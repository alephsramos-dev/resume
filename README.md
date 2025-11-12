# Resume site (React + Vite)

## Envio de formulários para Google Sheets

Os formulários do FAQ e do modal foram integrados para enviar os dados para uma planilha do Google via Google Apps Script.

### Como configurar

1) Crie sua planilha no Google Sheets e dê um nome a uma aba (ex.: `Leads`).

2) No Google Drive, crie um Apps Script:
	- Extensões > Apps Script
	- Cole o código abaixo (ajuste o nome da aba se necessário):

	```js
	function doPost(e) {
	  const sheet = SpreadsheetApp.getActive().getSheetByName('Leads');
	  const data = JSON.parse(e.postData.contents);
	  sheet.appendRow([
		 new Date(),
		 data.nome,
		 data.email,
		 data.telefone,
		 data.utm_source,
		 data.utm_content,
		 data.utm_medium,
		 data.utm_term,
		 data.utm_campaign,
		 data.page_url,
		 data.page_path,
		 data.device,
		 data.form_name,
		 data.message
	  ]);
	  return ContentService.createTextOutput(JSON.stringify({ success: true }))
		 .setMimeType(ContentService.MimeType.JSON);
	}
	```

3) Publique como Web App:
	- Deploy > Manage deployments > New deployment
	- Type: Web app
	- Who has access: Anyone (or Anyone with link)
	- Copie a URL gerada (termina com `/exec`).

4) Configure a variável de ambiente no projeto:
	- Crie um arquivo `.env.local` na raiz com:
   
	```env
	VITE_GOOGLE_SHEETS_ENDPOINT=https://script.google.com/macros/s/SEU_ID/exec
	```

	- Em produção (Vercel), adicione a mesma variável no painel de Environment Variables.

Pronto. O FAQ enviará `type=faq` com a `message` e metadados; o modal enviará `type=modal` com `name`, `phone`, `agree` e metadados (UTMs, página, userAgent, etc.).

### Onde está a integração no código

- Utilitário de envio: `src/lib/sendToSheet.js`
- FAQ: `src/pages/Home/FAQ.jsx` (função `handleSubmit`)
- Modal: `src/components/ui/Modal/ContactFormModal.jsx` (função `onSubmit`)

Se o endpoint não estiver configurado, o envio é ignorado com um aviso no console e o fluxo do usuário não é bloqueado.

---

## Desenvolvimento

- Dev server: `npm run dev`
- Build: `npm run build`

Plugins oficiais do Vite para React:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) (Babel / Fast Refresh)
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) (SWC / Fast Refresh)
