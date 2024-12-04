import React, { createContext, useState } from "react"

// Criação do contexto para armazenar o tema.
export const ThemeContext = createContext()

// Provedor do contexto, envolve os componentes filhos e fornece o valor do tema e a função para alternar o tema
export function ThemeProvider({children}) {
    const [theme, setTheme] = useState("light") // Estado para armazenar o tema

    // Função para alternar o tema
    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme == "light" ? "dark" : "light"))
    }

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}