import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PERSISTED_PARAM_PREFIXES = ['utm_'];
const PERSISTED_PARAM_KEYS = new Set(['gclid', 'msclkid', 'fbclid']);
const STORAGE_KEY = 'utm:persistence';

const defaultContextValue = {
    params: {},
    has: () => false,
    get: () => null,
};

const UtmContext = React.createContext(defaultContextValue);

const shouldPersistParam = (key) => {
    const normalized = key.toLowerCase();
    return PERSISTED_PARAM_PREFIXES.some((prefix) => normalized.startsWith(prefix))
        || PERSISTED_PARAM_KEYS.has(normalized);
};

const sessionStore = {
    get(key) {
        if (typeof window === 'undefined') {
            return null;
        }

        try {
            return window.sessionStorage?.getItem(key) ?? null;
        } catch (error) {
            console.warn('[utmPersist] Unable to read sessionStorage.', error);
            return null;
        }
    },
    set(key, value) {
        if (typeof window === 'undefined') {
            return;
        }

        try {
            window.sessionStorage?.setItem(key, value);
        } catch (error) {
            console.warn('[utmPersist] Unable to write sessionStorage.', error);
        }
    },
    remove(key) {
        if (typeof window === 'undefined') {
            return;
        }

        try {
            window.sessionStorage?.removeItem(key);
        } catch (error) {
            console.warn('[utmPersist] Unable to remove sessionStorage item.', error);
        }
    },
};

const sanitizePersistedParams = (params) => {
    const entries = Object.entries(params ?? {}).map(([key, value]) => [
        key.toLowerCase(),
        typeof value === 'string' ? value : String(value ?? ''),
    ]);

    const filtered = entries.filter(([key, value]) => shouldPersistParam(key) && value.length > 0);
    return Object.fromEntries(filtered);
};

const loadPersistedParams = () => {
    const raw = sessionStore.get(STORAGE_KEY);
    if (!raw) {
        return {};
    }

    try {
        const parsed = JSON.parse(raw);
        if (parsed && typeof parsed === 'object') {
            return sanitizePersistedParams(parsed);
        }
    } catch (error) {
        console.warn('[utmPersist] Unable to parse stored params.', error);
    }

    sessionStore.remove(STORAGE_KEY);
    return {};
};

const persistParams = (params) => {
    const sanitized = sanitizePersistedParams(params);
    if (Object.keys(sanitized).length === 0) {
        sessionStore.remove(STORAGE_KEY);
        return;
    }

    sessionStore.set(STORAGE_KEY, JSON.stringify(sanitized));
};

const haveSameEntries = (a = {}, b = {}) => {
    const aKeys = Object.keys(a);
    const bKeys = Object.keys(b);

    if (aKeys.length !== bKeys.length) {
        return false;
    }

    return aKeys.every((key) => a[key] === b[key]);
};

export function UtmProvider({ children }) {
    const location = useLocation();
    const navigate = useNavigate();
    const [utmParams, setUtmParams] = React.useState(() => loadPersistedParams());
    const persistedRef = React.useRef(utmParams);

    React.useEffect(() => {
        persistedRef.current = utmParams;
    }, [utmParams]);

    React.useEffect(() => {
        const searchParams = new URLSearchParams(location.search);
        const paramsInUrl = {};

        searchParams.forEach((value, key) => {
            const normalizedKey = key.toLowerCase();
            if (shouldPersistParam(normalizedKey) && value) {
                paramsInUrl[normalizedKey] = value;
            }
        });

        if (Object.keys(paramsInUrl).length > 0) {
            if (!haveSameEntries(persistedRef.current, paramsInUrl)) {
                setUtmParams(paramsInUrl);
            }
            persistParams(paramsInUrl);
            return;
        }

        const storedParams = persistedRef.current;

        if (!storedParams || Object.keys(storedParams).length === 0) {
            return;
        }

        const mergedParams = new URLSearchParams(location.search);
        let updated = false;

        for (const [key, value] of Object.entries(storedParams)) {
            if (!value) {
                continue;
            }

            if (mergedParams.get(key) !== value) {
                mergedParams.set(key, value);
                updated = true;
            }
        }

        if (!updated) {
            return;
        }

        const searchString = mergedParams.toString();

        navigate({
            pathname: location.pathname,
            search: searchString ? `?${searchString}` : '',
            hash: location.hash,
        }, {
            replace: true,
            state: location.state,
        });
    }, [location, navigate]);

    const contextValue = React.useMemo(() => ({
        params: utmParams,
        has: (key) => {
            if (!key) {
                return false;
            }
            return Object.prototype.hasOwnProperty.call(utmParams, key.toLowerCase());
        },
        get: (key) => {
            if (!key) {
                return null;
            }
            return utmParams[key.toLowerCase()] ?? null;
        },
    }), [utmParams]);

    return (
        <UtmContext.Provider value={contextValue}>
            {children}
        </UtmContext.Provider>
    );
}

export const usePersistedQueryParams = () => React.useContext(UtmContext);
