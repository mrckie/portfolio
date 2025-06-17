import './index.css'
import NavHeader from './components/ui/nav-header'
import { ThemeProvider } from './components/theme-provider'
import Hero from './sections/Hero'
import TechnicalSkills from './sections/TechnicalSkills'
import AboutMe from './sections/AboutMe'
import Projects from './sections/Projects'
import Footer from './sections/Footer'


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <NavHeader />
      <main className='relative px-8 lg:px-10 z-0 flex flex-col gap-y-30 py-30 lg:py-53 md:gap-y-53'>
        <Hero />
        <AboutMe />
        <Projects />
        <TechnicalSkills />
        <Footer />
      </main>
    </ThemeProvider>
  )
}

export default App