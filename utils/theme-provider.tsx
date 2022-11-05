import { ReactNode, useEffect, useState } from "react"
import { ThemeContext, themes } from "./theme-context"

// https://vimalselvam.com/post/toggle-theme-using-react-hooks/
function ThemeProvider({ children }: {
    children: ReactNode | ReactNode[]
}) {
    // Set react hook state.
    const [dark, setDark] = useState(false)

    // On mount, read the preferred theme from the persisence.
    useEffect(() => {
        const isDark: boolean = localStorage.getItem('dark') === 'true'
        setDark(isDark)
    }, [dark])

    // To toggle between dark and light themes.
    const toggle = () => {
        const isDark: boolean = !dark
        localStorage.setItem('dark', JSON.stringify(isDark))
        setDark(isDark)
    }

    // Filter the styles based on selected theme.
    const theme = dark
        ? themes.dark
        : themes.light

    return (
        <ThemeContext.Provider value={{ theme, dark, toggle }}>
            {children}
        </ThemeContext.Provider>
    )
}

export { ThemeProvider }
