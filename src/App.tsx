import { useRef } from 'react'
import './App.css'
import Education from './components/Education'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Project from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'
import type { NavigationTabs } from './types/NavigationTabs'
import Recommendation from './components/Recommendation'



function App() {

  const homeRef = useRef<HTMLDivElement | null>(null);
  const educationRef = useRef<HTMLDivElement | null>(null);
  const skillsRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const recommendationsRef = useRef<HTMLDivElement | null>(null);
  const contactRef = useRef<HTMLDivElement | null>(null);


  
  const scrollToSection = (tabRef: React.RefObject<HTMLDivElement | null>) => {
    tabRef?.current?.scrollIntoView({ behavior: "smooth" });
  }



  const navigationTabs: NavigationTabs = {
    items: [
      {
        label: "Home",
        elementRef: homeRef
      },
      {
        label: "Education",
        elementRef: educationRef
      },
      {
        label: "Skills",
        elementRef: skillsRef
      },
      {
        label: "Projects",
        elementRef: projectsRef
      },
      {
        label: "Recommendations",
        elementRef: recommendationsRef
      },
      {
        label: "Contact",
        elementRef: contactRef
      }
    ],
    scrollTo: scrollToSection
  }

  


  return (

    <div>
      <Navbar items= {navigationTabs.items} scrollTo={navigationTabs.scrollTo}/>

      <section ref={homeRef} className="h-screen w-full flex  place-content-center">
        <Home />
      </section>

      <section ref={educationRef}>
        <Education />
      </section>

      <section ref={skillsRef}>
        <Skills />
      </section>

      <section ref={projectsRef}>
        <Project />
      </section>
      <section ref={recommendationsRef}>
        <Recommendation />
      </section>

      <section ref={contactRef}>
        <Contact />
      </section>
    </div>

  )
}

export default App
