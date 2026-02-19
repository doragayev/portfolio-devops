/**
 * App - Main application component.
 * Single-page portfolio with smooth scroll navigation.
 */
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TechStack from './components/TechStack'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <TechStack />
        <WorkExperience />
        <Projects />
        <Education />
        <Contact />
        <Footer />
      </main>
    </>
  )
}

export default App
