
import './App.css'
import { ThemeContextProvider } from './context/ThemeContext'
import RouterApp from './pages/RouterApp'


function App() {
  return (
    <ThemeContextProvider>
      <RouterApp />
    </ThemeContextProvider>
  )
}

export default App
