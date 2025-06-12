import './index.css'
import Header from './sections/Header'
import { ThemeProvider } from './components/theme-provider'
import AboutMe from './sections/AboutMe'
import TechStack from './sections/TechStack'
import PracticesLearning from './sections/PracticesLearning'
import Projects from './sections/Projects'
import { Particles } from './components/magicui/particles'
import { useEffect, useState } from 'react';
import { useTheme } from '@/components/theme-provider';


function App() {
  const { theme, setTheme } = useTheme();
  const [color, setColor] = useState("#ffffff");

  useEffect(() => {
    setColor(theme === "dark" ? "#ffffff" : "#000000");
  }, [setTheme]);

  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <Header />
      <main className='relative px-8 lg:px-10 z-0 flex flex-col gap-y-30 py-30 lg:py-53 lg:gap-y-53'>
        <Particles
          className="absolute inset-0 z-0"
          quantity={40}
          ease={80}
          refresh
          color={color}
        />
        <AboutMe />
        <Projects />
        <TechStack />
        <PracticesLearning />
      </main>
    </ThemeProvider>
  )
}

export default App