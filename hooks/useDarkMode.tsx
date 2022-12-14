// https://github.com/fireship-io/tailwind-dashboard/blob/main/src/hooks/useDarkMode.jsx
import { useEffect, useState } from 'react';

const useLocalStorage = (key: string, initialValue?: undefined): any[] => {
    const [storedValue, setStoredValue] = useState(() => {
        try {
            const item = window.localStorage.getItem(key);
            return item ? JSON.parse(item) : initialValue;
        } catch (error) {
            console.log(error);
            return initialValue;
        }
    });
    const setValue = (value: any) => {
        try {
            const valueToStore =
                value instanceof Function ? value(storedValue) : value;

            setStoredValue(valueToStore);

            window.localStorage.setItem(key, JSON.stringify(valueToStore));
        } catch (error) {
            console.log(error);
        }
    };
    return [storedValue, setValue];
};

const UseDarkMode = () => {
    const [enabled, setEnabled] = useLocalStorage('dark-theme');
    // TODO: find var enabledState.
    const isEnabled = typeof setEnabled(enabled) === 'undefined' && enabled;

    useEffect(() => {
        const className = 'dark';
        const bodyClass = window.document.body.classList;

        isEnabled ? bodyClass.add(className) : bodyClass.remove(className);
    }, [enabled, isEnabled]);

    return [enabled, setEnabled];
};

export { UseDarkMode };
