import { useState } from "react"
import { ThemeProvider } from "./context/Theme"
import { useEffect } from "react"
import ThemeButton from "./components/ThemeButton"
import Card from "./components/Card"

function App() {
  const [defaultTheme, setDefaultTheme] = useState('light')

  const lightTheme = () => {
    setDefaultTheme('light')
  }

  const darkTheme = () => {
    setDefaultTheme('dark')
  }

  // Actual change in theme

  useEffect(() => {
    document.querySelector('html').classList.remove('light','dark')
    document.querySelector('html').classList.add(defaultTheme)
  }, [defaultTheme])


  return (
    <>
      <ThemeProvider value={{defaultTheme, darkTheme, lightTheme}}>
        <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
            <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
              <ThemeButton/>
            </div>

            <div className="w-full max-w-sm mx-auto">
              <Card/>
            </div>
          </div>
        </div>
      </ThemeProvider>
    </>
  )
}

export default App
