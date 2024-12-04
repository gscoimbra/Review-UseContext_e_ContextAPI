import React, { useContext } from "react"
import { ThemeContext } from "./ThemeContext"

function ThemeButton() {
    const {theme, toggleTheme} = useContext(ThemeContext) // Acessa o tema e a função de alternância

    // Alteramos o estilo do botão com base no valor do tema.
    return (
        <button
        onClick={toggleTheme}
        style={{
            backgroundColor: theme === "light" ? "#ffffff" : "#333333",
            color: theme === "light" ? "#000000" : "#ffffff",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
        }}
        >
            Mudar para {theme == "light" ? "Tema Escuro" : "Tema Claro"}
        </button>
    )
}

export default ThemeButton