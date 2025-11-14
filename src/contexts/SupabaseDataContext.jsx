import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { rgba } from 'polished';
import { supabase } from '@/lib/supabaseClient';

const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL ?? '';

const SUPABASE_PROJECT_REF = (() => {
    if (!SUPABASE_URL) {
        return '';
    }

    try {
        const { hostname } = new URL(SUPABASE_URL);
        const [projectRef] = hostname.split('.');
        return projectRef ?? '';
    } catch (error) {
        console.warn('[Supabase] Unable to parse project ref from VITE_SUPABASE_URL.', error);
        return '';
    }
})();

const STORAGE_PUBLIC_BASE = SUPABASE_URL
    ? `${SUPABASE_URL.replace(/\/+$/, '')}/storage/v1/object/public/assets`
    : '';

const CACHE_STORAGE_KEY = 'supabase:data-cache:v2';
const CACHE_TTL_MS = 1000 * 60 * 60; // 1 hour

const DATA_KEYS = ['projects', 'services', 'benefits', 'assessments', 'techIcons', 'companies'];

const createDefaultData = () => ({
    projects: [],
    services: [],
    benefits: [],
    assessments: [],
    techIcons: {},
    companies: {},
});

const isObject = (value) => value !== null && typeof value === 'object';

const hasUsableData = (value) => {
    if (Array.isArray(value)) {
        return value.length > 0;
    }

    if (isObject(value)) {
        return Object.keys(value).length > 0;
    }

    return Boolean(value);
};

const loadCacheFromStorage = () => {
    if (typeof window === 'undefined') {
        return { data: createDefaultData(), meta: {} };
    }

    try {
        const raw = window.localStorage.getItem(CACHE_STORAGE_KEY);

        if (!raw) {
            return { data: createDefaultData(), meta: {} };
        }

        const parsed = JSON.parse(raw);
        const cachedData = isObject(parsed?.data) ? parsed.data : {};
        const meta = isObject(parsed?.meta) ? parsed.meta : {};

        return {
            data: {
                ...createDefaultData(),
                ...cachedData,
            },
            meta,
        };
    } catch (error) {
        console.warn('[Supabase] Unable to read cached data.', error);
        return { data: createDefaultData(), meta: {} };
    }
};

const persistCacheToStorage = (data, meta) => {
    if (typeof window === 'undefined') {
        return;
    }

    try {
        window.localStorage.setItem(CACHE_STORAGE_KEY, JSON.stringify({ data, meta }));
    } catch (error) {
        console.warn('[Supabase] Unable to persist cache.', error);
    }
};

const resolveStorageUrl = (value) => {
    if (!value || typeof value !== 'string') {
        return '';
    }

    const trimmed = value.trim();

    if (!trimmed) {
        return '';
    }

    if (/^https?:\/\//i.test(trimmed)) {
        if (SUPABASE_PROJECT_REF && trimmed.includes('<PROJECT-REF>')) {
            return trimmed.replace(/<PROJECT-REF>/g, SUPABASE_PROJECT_REF);
        }
        return trimmed;
    }

    if (!SUPABASE_URL) {
        console.warn('[Supabase] Missing VITE_SUPABASE_URL env; returning raw storage path.');
        return trimmed;
    }

    const withoutBucket = trimmed.replace(/^assets\//i, '').replace(/^\/+/, '');
    return `${STORAGE_PUBLIC_BASE}/${withoutBucket}`;
};

const SupabaseDataContext = createContext(undefined);

const createTransformedImageUrl = (url, params = {}) => {
    if (!url || typeof url !== 'string' || !/^https?:\/\//i.test(url)) {
        return url;
    }

    try {
        const transformedPath = url.includes('/storage/v1/object/')
            ? url.replace('/storage/v1/object/', '/storage/v1/render/image/')
            : url;

        const parsed = new URL(transformedPath);

        Object.entries(params).forEach(([key, value]) => {
            if (value !== undefined && value !== null && `${value}`.length > 0) {
                parsed.searchParams.set(key, value);
            }
        });

        return parsed.toString();
    } catch (error) {
        console.warn('[Supabase] Unable to create transformed image url.', error);
        return url;
    }
};

const formatDateBR = (value) => {
    if (!value) {
        return '';
    }

    const date = value instanceof Date ? value : new Date(value);
    if (Number.isNaN(date.getTime())) {
        return '';
    }

    return new Intl.DateTimeFormat('pt-BR').format(date);
};

const normalizeStack = (stackValue) => {
    if (Array.isArray(stackValue)) {
        return stackValue;
    }

    if (typeof stackValue === 'string' && stackValue.trim().length > 0) {
        try {
            const parsed = JSON.parse(stackValue);
            return Array.isArray(parsed) ? parsed : [];
        } catch (error) {
            console.warn('[Supabase] Unable to parse stack JSON:', error);
        }
    }

    return [];
};

const createColorBorderResolver = (expression) => {
    if (!expression || typeof expression !== 'string') {
        return null;
    }

    const trimmed = expression.trim();
    const match = trimmed.match(/rgba\(props\.theme\.colors\.(\w+)\['(\w+)'\],\s*([0-9.]+)\)/i);

    if (match) {
        const [, palette, shade, alpha] = match;
        const alphaValue = Number.parseFloat(alpha);

        return (props) => {
            const theme = props?.theme ?? props;
            const baseColor = theme?.colors?.[palette]?.[shade];

            if (!baseColor) {
                return trimmed;
            }

            const safeAlpha = Number.isFinite(alphaValue) ? alphaValue : 1;
            return rgba(baseColor, safeAlpha);
        };
    }

    return trimmed;
};

const normalizeProjects = (rows = []) => rows.map((row) => {
    const imageFull = resolveStorageUrl(row.image_url);
    const imagePreview = createTransformedImageUrl(imageFull, {
        width: 640,
        quality: 70,
        format: 'webp',
    });

    return {
        id: row.id,
        slug: row.slug,
        title: row.title,
        image: imageFull || imagePreview,
        imagePreview: imagePreview || imageFull,
        imageFull: imageFull,
        popupContent: row.popup_content ?? '',
        siteType: row.site_type ?? '',
        imageCompanyUrl: resolveStorageUrl(row.image_company_url),
        companyName: row.company_name ?? '',
        tecnologias: Array.isArray(row.tecnologias) ? row.tecnologias : [],
        stack: normalizeStack(row.stack),
        date: formatDateBR(row.project_date),
        duration: row.duration ?? null,
        plataform: row.platform ?? '',
        platform: row.platform ?? '',
        country: row.country ?? '',
        description: row.description ?? '',
        urlPage: row.url_page ?? '',
        fullDescription: row.full_description ?? '',
        githubUrl: row.github_url ?? '',
        popupBg: row.popup_bg ?? '',
        popupBorder: row.popup_border ?? '',
        popupColor: row.popup_color ?? '',
        siteBg: row.site_bg ?? '',
        siteBorder: row.site_border ?? '',
        siteColor: row.site_color ?? '',
    };
});

const normalizeServices = (rows = []) => rows.map((row) => ({
    id: row.id,
    slug: row.slug,
    image: resolveStorageUrl(row.image_url),
    name: row.name,
    description: row.description ?? '',
    width: row.width ?? '',
    colorBorder: createColorBorderResolver(row.color_border_expression),
}));

const normalizeBenefits = (rows = []) => rows.map((row) => ({
    id: row.id,
    iconName: row.icon_name ?? '',
    title: row.title ?? '',
    description: row.description ?? '',
}));

const normalizeAssessments = (rows = []) => rows.map((row) => ({
    id: row.id,
    image: resolveStorageUrl(row.image_url),
    alt: row.alt ?? '',
    name: row.name ?? '',
    role: row.role ?? '',
}));

const normalizeTechIcons = (rows = []) => rows.reduce((acc, icon) => {
    if (!icon || !icon.icon_key) {
        return acc;
    }

    const key = icon.icon_key.toLowerCase();
    acc[key] = {
        key,
        src: resolveStorageUrl(icon.src),
        alt: icon.alt ?? icon.title ?? icon.icon_key,
        title: icon.title ?? icon.alt ?? icon.icon_key,
        width: icon.width ?? 24,
        height: icon.height ?? 24,
    };

    return acc;
}, {});

const normalizeCompanies = (rows = []) => rows.reduce((acc, company) => {
    if (!company?.slug) {
        return acc;
    }

    acc[company.slug] = {
        id: company.id,
        slug: company.slug,
        name: company.name ?? '',
        image: resolveStorageUrl(company.image_url),
    };

    return acc;
}, {});

export function SupabaseDataProvider({ children }) {
    const cacheBootstrapRef = useRef(loadCacheFromStorage());
    const dataRef = useRef({ ...cacheBootstrapRef.current.data });
    const cacheMetaRef = useRef({ ...(cacheBootstrapRef.current.meta ?? {}) });
    const isMountedRef = useRef(true);

    const [data, setData] = useState(() => ({
        ...cacheBootstrapRef.current.data,
    }));

    const [loading, setLoading] = useState(() => {
        const initial = {};
        const now = Date.now();

        DATA_KEYS.forEach((key) => {
            const meta = cacheMetaRef.current[key];
            const isValid = Boolean(meta?.updatedAt) && (now - meta.updatedAt) < CACHE_TTL_MS;
            const hasData = hasUsableData(dataRef.current[key]);
            initial[key] = !(isValid && hasData);
        });

        return initial;
    });

    const [errors, setErrors] = useState({
        projects: null,
        services: null,
        benefits: null,
        assessments: null,
        techIcons: null,
        companies: null,
    });

    useEffect(() => {
        isMountedRef.current = true;
        return () => {
            isMountedRef.current = false;
        };
    }, []);

    const handleError = useCallback((key, error) => {
        if (!isMountedRef.current) {
            return;
        }

        setErrors((prev) => ({
            ...prev,
            [key]: error,
        }));

        if (error) {
            console.error(`[Supabase] Failed to load ${key}:`, error);
        }
    }, []);

    const setDataSafe = useCallback((key, value, { persist = true } = {}) => {
        if (!isMountedRef.current) {
            return;
        }

        setData((prev) => {
            const next = {
                ...prev,
                [key]: value,
            };

            dataRef.current = next;

            if (persist) {
                const nextMeta = {
                    ...cacheMetaRef.current,
                    [key]: {
                        updatedAt: Date.now(),
                    },
                };
                cacheMetaRef.current = nextMeta;
                persistCacheToStorage(next, nextMeta);
            }

            return next;
        });
    }, []);

    const setLoadingSafe = useCallback((key, value) => {
        if (!isMountedRef.current) {
            return;
        }

        setLoading((prev) => ({
            ...prev,
            [key]: value,
        }));
    }, []);

    const isCacheValid = useCallback((key) => {
        const meta = cacheMetaRef.current[key];
        if (!meta?.updatedAt) {
            return false;
        }

        return (Date.now() - meta.updatedAt) < CACHE_TTL_MS;
    }, []);

    const fetchProjects = useCallback(async ({ force = false } = {}) => {
        const canUseCache = !force && isCacheValid('projects') && hasUsableData(dataRef.current.projects);

        if (canUseCache) {
            setLoadingSafe('projects', false);
            return dataRef.current.projects;
        }

        setLoadingSafe('projects', true);
        handleError('projects', null);

        try {
            const { data: rows, error } = await supabase
                .from('projects')
                .select('*')
                .order('project_date', { ascending: false });

            if (error) {
                throw error;
            }

            const normalized = normalizeProjects(rows ?? []);
            setDataSafe('projects', normalized);
            return normalized;
        } catch (error) {
            handleError('projects', error);
            return dataRef.current.projects;
        } finally {
            setLoadingSafe('projects', false);
        }
    }, [handleError, isCacheValid, setDataSafe, setLoadingSafe]);

    const fetchServices = useCallback(async ({ force = false } = {}) => {
        const canUseCache = !force && isCacheValid('services') && hasUsableData(dataRef.current.services);

        if (canUseCache) {
            setLoadingSafe('services', false);
            return dataRef.current.services;
        }

        setLoadingSafe('services', true);
        handleError('services', null);

        try {
            const { data: rows, error } = await supabase
                .from('services')
                .select('*')
                .order('slug');

            if (error) {
                throw error;
            }

            const normalized = normalizeServices(rows ?? []);
            setDataSafe('services', normalized);
            return normalized;
        } catch (error) {
            handleError('services', error);
            return dataRef.current.services;
        } finally {
            setLoadingSafe('services', false);
        }
    }, [handleError, isCacheValid, setDataSafe, setLoadingSafe]);

    const fetchBenefits = useCallback(async ({ force = false } = {}) => {
        const canUseCache = !force && isCacheValid('benefits') && hasUsableData(dataRef.current.benefits);

        if (canUseCache) {
            setLoadingSafe('benefits', false);
            return dataRef.current.benefits;
        }

        setLoadingSafe('benefits', true);
        handleError('benefits', null);

        try {
            const { data: rows, error } = await supabase
                .from('benefits')
                .select('*')
                .order('title');

            if (error) {
                throw error;
            }

            const normalized = normalizeBenefits(rows ?? []);
            setDataSafe('benefits', normalized);
            return normalized;
        } catch (error) {
            handleError('benefits', error);
            return dataRef.current.benefits;
        } finally {
            setLoadingSafe('benefits', false);
        }
    }, [handleError, isCacheValid, setDataSafe, setLoadingSafe]);

    const fetchAssessments = useCallback(async ({ force = false } = {}) => {
        const canUseCache = !force && isCacheValid('assessments') && hasUsableData(dataRef.current.assessments);

        if (canUseCache) {
            setLoadingSafe('assessments', false);
            return dataRef.current.assessments;
        }

        setLoadingSafe('assessments', true);
        handleError('assessments', null);

        try {
            const { data: rows, error } = await supabase
                .from('assessments')
                .select('*')
                .order('name');

            if (error) {
                throw error;
            }

            const normalized = normalizeAssessments(rows ?? []);
            setDataSafe('assessments', normalized);
            return normalized;
        } catch (error) {
            handleError('assessments', error);
            return dataRef.current.assessments;
        } finally {
            setLoadingSafe('assessments', false);
        }
    }, [handleError, isCacheValid, setDataSafe, setLoadingSafe]);

    const fetchTechIcons = useCallback(async ({ force = false } = {}) => {
        const canUseCache = !force && isCacheValid('techIcons') && hasUsableData(dataRef.current.techIcons);

        if (canUseCache) {
            setLoadingSafe('techIcons', false);
            return dataRef.current.techIcons;
        }

        setLoadingSafe('techIcons', true);
        handleError('techIcons', null);

        try {
            const { data: rows, error } = await supabase
                .from('tech_icons')
                .select('*')
                .order('icon_key');

            if (error) {
                throw error;
            }

            const normalized = normalizeTechIcons(rows ?? []);
            setDataSafe('techIcons', normalized);
            return normalized;
        } catch (error) {
            handleError('techIcons', error);
            return dataRef.current.techIcons;
        } finally {
            setLoadingSafe('techIcons', false);
        }
    }, [handleError, isCacheValid, setDataSafe, setLoadingSafe]);

    const fetchCompanies = useCallback(async ({ force = false } = {}) => {
        const canUseCache = !force && isCacheValid('companies') && hasUsableData(dataRef.current.companies);

        if (canUseCache) {
            setLoadingSafe('companies', false);
            return dataRef.current.companies;
        }

        setLoadingSafe('companies', true);
        handleError('companies', null);

        try {
            const { data: rows, error } = await supabase
                .from('companies')
                .select('*')
                .order('name');

            if (error) {
                throw error;
            }

            const normalized = normalizeCompanies(rows ?? []);
            setDataSafe('companies', normalized);
            return normalized;
        } catch (error) {
            handleError('companies', error);
            return dataRef.current.companies;
        } finally {
            setLoadingSafe('companies', false);
        }
    }, [handleError, isCacheValid, setDataSafe, setLoadingSafe]);

    useEffect(() => {
        fetchProjects();
        fetchServices();
        fetchBenefits();
        fetchAssessments();
        fetchTechIcons();
        fetchCompanies();
    }, [
        fetchProjects,
        fetchServices,
        fetchBenefits,
        fetchAssessments,
        fetchTechIcons,
        fetchCompanies,
    ]);

    const value = useMemo(() => ({
        ...data,
        loading,
        errors,
        refresh: {
            projects: (options) => fetchProjects({ force: true, ...(options ?? {}) }),
            services: (options) => fetchServices({ force: true, ...(options ?? {}) }),
            benefits: (options) => fetchBenefits({ force: true, ...(options ?? {}) }),
            assessments: (options) => fetchAssessments({ force: true, ...(options ?? {}) }),
            techIcons: (options) => fetchTechIcons({ force: true, ...(options ?? {}) }),
            companies: (options) => fetchCompanies({ force: true, ...(options ?? {}) }),
        },
        ensure: {
            projects: fetchProjects,
            services: fetchServices,
            benefits: fetchBenefits,
            assessments: fetchAssessments,
            techIcons: fetchTechIcons,
            companies: fetchCompanies,
        },
        isLoading: Object.values(loading).some(Boolean),
    }), [
        data,
        errors,
        fetchAssessments,
        fetchBenefits,
        fetchCompanies,
        fetchProjects,
        fetchServices,
        fetchTechIcons,
        loading,
    ]);

    return (
        <SupabaseDataContext.Provider value={value}>
            {children}
        </SupabaseDataContext.Provider>
    );
}

export function useSupabaseData() {
    const context = useContext(SupabaseDataContext);

    if (context === undefined) {
        throw new Error('useSupabaseData must be used within a SupabaseDataProvider');
    }

    return context;
}
