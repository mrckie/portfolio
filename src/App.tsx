import './index.css'
import AboutMe from './sections/Header'
import { ThemeProvider } from './components/theme-provider'


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <AboutMe />
    </ThemeProvider>
  )
}

export default App