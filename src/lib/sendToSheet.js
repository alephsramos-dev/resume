// Utilitário para envio de dados para Google Sheets via Apps Script
// Configure no .env: VITE_GOOGLE_SHEETS_ENDPOINT=https://script.google.com/macros/s/SEU_ID/exec

function getDeviceType() {
    if (typeof navigator === 'undefined') return 'desktop';

    const ua = navigator.userAgent.toLowerCase();

    // Detecta tablets
    if (/(ipad|tablet|(android(?!.*mobile))|(windows(?!.*phone)(.*touch))|kindle|playbook|silk|(puffin(?!.*(IP|AP|WP))))/.test(ua)) {
        return 'tablet';
    }

    // Detecta mobile
    if (/mobile|ip(hone|od)|android.+mobile|blackberry|iemobile|opera mini|webos/.test(ua)) {
        return 'mobile';
    }

    return 'desktop';
}

function normalizeForSheet(payload = {}) {
    const utm = payload.utm || {};
    const page = payload.page || (typeof window !== 'undefined' ? {
        url: window.location.href,
        title: typeof document !== 'undefined' ? document.title : undefined,
        referrer: typeof document !== 'undefined' ? document.referrer || undefined : undefined,
        path: typeof window !== 'undefined' ? window.location.pathname : undefined,
    } : undefined);

    const userAgent = typeof navigator !== 'undefined' ? navigator.userAgent : undefined;
    const deviceType = getDeviceType();

    // Normaliza campos para combinar com o cabeçalho da planilha do anexo (nome, email, telefone, utm_*, page_*, device, form_name)
    const normalized = {
        // Chaves originais
        ...payload,

        // Campos normalizados (mantém ambos para flexibilidade do Apps Script)
        nome: payload.nome || payload.name || "-",
        email: payload.email || "-",
        telefone: payload.telefone || payload.phone || "-",

        utm_source: utm.utm_source || utm.source || "Organico",
        utm_content: utm.utm_content || utm.content || "-",
        utm_medium: utm.utm_medium || utm.medium || "-",
        utm_term: utm.utm_term || utm.term || "-",
        utm_campaign: utm.utm_campaign || utm.campaign || "-",

        page_url: page?.url || "-",
        page_path: page?.path || (page?.url ? new URL(page.url).pathname : "-"),
        device: deviceType,
        form_name: payload.form_name || payload.source || payload.type || "-",
        message: payload.message || "-",
    };

    return {
        ...normalized,
        _meta: {
            ...(payload._meta || {}),
            timestamp: new Date().toISOString(),
            userAgent,
            language: typeof navigator !== 'undefined' ? navigator.language : undefined,
        }
    };
}

async function tryJsonPost(endpoint, enriched, { signal } = {}) {
    const res = await fetch(endpoint, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(enriched),
        signal,
        // padrão 'cors'; se servidor responder com CORS, conseguiremos ler resposta
    });
    const text = await res.text();
    const isJson = text.startsWith('{') || text.startsWith('[');
    const data = isJson ? JSON.parse(text) : { raw: text };
    return { ok: res.ok, status: res.status, data };
}

async function tryNoCors(endpoint, enriched) {
    // 1) Tenta navigator.sendBeacon (não bloqueia a navegação; ideal para redirecionos)
    try {
        if (typeof navigator !== 'undefined' && typeof navigator.sendBeacon === 'function') {
            const blob = new Blob([JSON.stringify(enriched)], { type: 'text/plain;charset=UTF-8' });
            const ok = navigator.sendBeacon(endpoint, blob);
            if (ok) return { ok: true, status: 0, data: { mode: 'beacon' } };
        }
    } catch (_) { }

    // 2) Fallback para fetch no-cors (resposta será opaca e não legível, mas o servidor recebe)
    try {
        await fetch(endpoint, {
            method: 'POST',
            mode: 'no-cors',
            // Content-Type simples evita preflight
            headers: {
                'Content-Type': 'text/plain;charset=UTF-8'
            },
            body: JSON.stringify(enriched),
        });
        return { ok: true, status: 0, data: { mode: 'no-cors' } };
    } catch (error) {
        return { ok: false, error: error.message };
    }
}

export async function sendToSheet(payload, { signal } = {}) {
    const endpoint = import.meta.env.VITE_GOOGLE_SHEETS_ENDPOINT;
    if (!endpoint) {
        console.warn("[sendToSheet] Endpoint não definido em VITE_GOOGLE_SHEETS_ENDPOINT");
        return { ok: false, error: "Endpoint não configurado" };
    }

    const enriched = normalizeForSheet(payload);

    // Log para debug
    console.log('[sendToSheet] Enviando payload:', enriched);
    console.log('[sendToSheet] Endpoint:', endpoint);

    const isAppsScript = /script\.google\.com/.test(endpoint);

    // Para Google Apps Script, sempre usa no-cors/beacon para evitar problemas de CORS
    if (isAppsScript) {
        const result = await tryNoCors(endpoint, enriched);
        console.log('[sendToSheet] Resultado:', result);
        return result;
    }

    // Para outros endpoints, tenta JSON normal primeiro
    try {
        const primary = await tryJsonPost(endpoint, enriched, { signal });
        if (primary.ok) return primary;
        const fallback = await tryNoCors(endpoint, enriched);
        return fallback;
    } catch (error) {
        const fallback = await tryNoCors(endpoint, enriched);
        return fallback;
    }
}// Exemplo de estrutura esperada pelo Apps Script:
// function doPost(e) {
//   const sheet = SpreadsheetApp.getActive().getSheetByName('Leads');
//   const data = JSON.parse(e.postData.contents);
//   // Adeque a ordem das colunas à sua planilha:
//   sheet.appendRow([
//     new Date(),
//     data.nome,
//     data.email,
//     data.telefone,
//     data.utm_source,
//     data.utm_content,
//     data.utm_medium,
//     data.utm_term,
//     data.utm_campaign,
//     data.page_url,
//     data.page_path,
//     data.device,
//     data.form_name,
//     data.message,
//   ]);
//   return ContentService.createTextOutput(JSON.stringify({ success: true }))
//     .setMimeType(ContentService.MimeType.JSON);
// }