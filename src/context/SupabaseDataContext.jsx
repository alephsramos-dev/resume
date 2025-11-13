import { createContext, useCallback, useContext, useEffect, useMemo, useRef, useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

const SupabaseDataContext = createContext(undefined);

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

const normalizeProjects = (rows = []) => rows.map((row) => ({
    id: row.id,
    slug: row.slug,
    title: row.title,
    image: row.image_url,
    popupContent: row.popup_content ?? '',
    siteType: row.site_type ?? '',
    imageCompanyUrl: row.image_company_url ?? '',
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
}));

const normalizeServices = (rows = []) => rows.map((row) => ({
    id: row.id,
    slug: row.slug,
    image: row.image_url,
    name: row.name,
    description: row.description ?? '',
    width: row.width ?? '',
    colorToken: row.color_border_expression ?? '',
}));

const normalizeBenefits = (rows = []) => rows.map((row) => ({
    id: row.id,
    iconName: row.icon_name ?? '',
    title: row.title ?? '',
    description: row.description ?? '',
}));

const normalizeAssessments = (rows = []) => rows.map((row) => ({
    id: row.id,
    image: row.image_url ?? '',
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
        src: icon.src ?? '',
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
        image: company.image_url ?? '',
    };

    return acc;
}, {});

export function SupabaseDataProvider({ children }) {
    const isMountedRef = useRef(true);

    const [data, setData] = useState({
        projects: [],
        services: [],
        benefits: [],
        assessments: [],
        techIcons: {},
        companies: {},
    });

    const [loading, setLoading] = useState({
        projects: true,
        services: true,
        benefits: true,
        assessments: true,
        techIcons: true,
        companies: true,
    });

    const [errors, setErrors] = useState({
        projects: null,
        services: null,
        benefits: null,
        assessments: null,
        techIcons: null,
        companies: null,
    });

    useEffect(() => () => {
        isMountedRef.current = false;
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

    const setDataSafe = useCallback((key, value) => {
        if (!isMountedRef.current) {
            return;
        }

        setData((prev) => ({
            ...prev,
            [key]: value,
        }));
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

    const fetchProjects = useCallback(async () => {
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

            setDataSafe('projects', normalizeProjects(rows));
        } catch (error) {
            handleError('projects', error);
        } finally {
            setLoadingSafe('projects', false);
        }
    }, [handleError, setDataSafe, setLoadingSafe]);

    const fetchServices = useCallback(async () => {
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

            setDataSafe('services', normalizeServices(rows));
        } catch (error) {
            handleError('services', error);
        } finally {
            setLoadingSafe('services', false);
        }
    }, [handleError, setDataSafe, setLoadingSafe]);

    const fetchBenefits = useCallback(async () => {
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

            setDataSafe('benefits', normalizeBenefits(rows));
        } catch (error) {
            handleError('benefits', error);
        } finally {
            setLoadingSafe('benefits', false);
        }
    }, [handleError, setDataSafe, setLoadingSafe]);

    const fetchAssessments = useCallback(async () => {
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

            setDataSafe('assessments', normalizeAssessments(rows));
        } catch (error) {
            handleError('assessments', error);
        } finally {
            setLoadingSafe('assessments', false);
        }
    }, [handleError, setDataSafe, setLoadingSafe]);

    const fetchTechIcons = useCallback(async () => {
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

            setDataSafe('techIcons', normalizeTechIcons(rows));
        } catch (error) {
            handleError('techIcons', error);
        } finally {
            setLoadingSafe('techIcons', false);
        }
    }, [handleError, setDataSafe, setLoadingSafe]);

    const fetchCompanies = useCallback(async () => {
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

            setDataSafe('companies', normalizeCompanies(rows));
        } catch (error) {
            handleError('companies', error);
        } finally {
            setLoadingSafe('companies', false);
        }
    }, [handleError, setDataSafe, setLoadingSafe]);

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
            projects: fetchProjects,
            services: fetchServices,
            benefits: fetchBenefits,
            assessments: fetchAssessments,
            techIcons: fetchTechIcons,
            companies: fetchCompanies,
        },
        isLoading: Object.values(loading).some(Boolean),
    }), [data, errors, fetchAssessments, fetchBenefits, fetchCompanies, fetchProjects, fetchServices, fetchTechIcons, loading]);

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
