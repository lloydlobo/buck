import { Context, createContext } from 'react';

type InitialState = {
    dark: boolean;
    theme: { backgroundColor: string; color: string; colorScheme: string };
    toggle: () => void;
};

type Themes = {
    dark: { backgroundColor: string; color: string; colorScheme: string };
    light: { backgroundColor: string; color: string; colorScheme: string };
};

// https://vimalselvam.com/post/toggle-theme-using-react-hooks/
const themes: Themes = {
    dark: {
        backgroundColor: '',
        color: '',
        colorScheme: 'dark',
    },
    light: {
        // backgroundColor: '#ffabc8',
        backgroundColor: '',
        color: '',
        colorScheme: 'light',
    },
};

const initialState: InitialState = {
    dark: false,
    theme: themes.light,
    toggle: () => {},
};

// export const ThemeContext = React.createContext(initialState)
const ThemeContext: Context<InitialState> = createContext(initialState);

export { ThemeContext, themes };

// Alternative: // https://codesandbox.io/s/c24yq?file=/src/App.js:472-539
