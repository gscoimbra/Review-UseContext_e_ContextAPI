import React from "react"
import './App.css'
import { ThemeProvider } from'./ThemeContext'
import ThemeButton from './ThemeButton'

function App() {

  return (
    // O ThemeProvider é usado para envolver toda a aplicação (ou parte dela), garantindo que todos os componentes dentro dele possam acessar o contexto
    <ThemeProvider>
      <div>
        <h1>Exemplo de Tema com Context API</h1>
        <ThemeButton />
      </div>
    </ThemeProvider>
  )
}

export default App
