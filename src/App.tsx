import { useRef } from 'react'
import './App.css'
import Education from './components/Education'
import Home from './components/Home'
import Navbar from './components/Navbar'
import Project from './components/Projects'
import Skills from './components/Skills'
import type { SectionRefs } from './types/SectionsRef'
import Contact from './components/Contact'



function App() {
const refs: SectionRefs = {
  homeRef: useRef<HTMLDivElement>(null),
  educationRef: useRef<HTMLDivElement>(null),
  skillsRef: useRef<HTMLDivElement>(null),
  projectsRef: useRef<HTMLDivElement>(null),
  contactRef: useRef<HTMLDivElement>(null),
};

  const scrollToSection = (section: React.RefObject<HTMLDivElement>) => {
    section?.current?.scrollIntoView({behavior: "smooth"});
  }


  return (

    <div>
      <Navbar refs={refs} scrollToSection={scrollToSection}/>

      <section ref={refs.homeRef} className="h-screen w-full flex  place-content-center">
        <Home />
      </section>

      <section ref={refs.educationRef}>
        <Education />
      </section>

      <section ref={refs.skillsRef}>
        <Skills />
      </section>

      <section ref={refs.projectsRef}>
        <Project />
      </section>
       <section ref={refs.contactRef}>
        <Contact />
      </section>
    </div>

  )
}

export default App
