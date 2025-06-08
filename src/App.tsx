import './index.css'
import Header from './sections/Header'
import { ThemeProvider } from './components/theme-provider'
import AboutMe from './sections/AboutMe'
import TechStack from './sections/TechStack'


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <main className='px-6 z-0 mb-100'>
        <AboutMe />
        <TechStack />
      </main>
    </ThemeProvider>
  )
}

export default App