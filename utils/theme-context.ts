import { createContext } from "react"

// https://vimalselvam.com/post/toggle-theme-using-react-hooks/
const themes = {
    dark: {
        backgroundColor: 'black',
        color: 'white',
        colorScheme: 'dark',
    },
    light: {
        backgroundColor: 'white',
        color: 'black',
        colorScheme: 'light',
    }
}

const initialState = {
    dark: false,
    theme: themes.light,
    toggle: () => { }
}

// export const ThemeContext = React.createContext(initialState)
const ThemeContext = createContext(initialState)

export { ThemeContext, themes }

// Alternative: // https://codesandbox.io/s/c24yq?file=/src/App.js:472-539

