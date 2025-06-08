import './index.css'
import Header from './sections/Header'
import { ThemeProvider } from './components/theme-provider'
import AboutMe from './sections/AboutMe'


function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <main className='px-4'>
        <Header />
        <AboutMe />
      </main>
    </ThemeProvider>
  )
}

export default App