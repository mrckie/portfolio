import './index.css'
import Header from './sections/Header'
import { ThemeProvider } from './components/theme-provider'
import AboutMe from './sections/AboutMe'
import TechStack from './sections/TechStack'
import PracticesLearning from './sections/PracticesLearning'


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <main className='px-7 lg:px-10 z-0 flex flex-col gap-y-24 py-20 lg:py-35 lg:gap-y-35'>
        <AboutMe />
        <TechStack />
        <PracticesLearning />
      </main>
    </ThemeProvider>
  )
}

export default App