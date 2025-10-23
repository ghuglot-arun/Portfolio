import About from "./Components/About/About"
import Contact from "./Components/Contact/Contact"
import Footer from "./Components/Footer/Footer"
import Hero from "./Components/Hero/Hero"
import Navbar from "./Components/Navbar/Navbar"
import ProjectSection from "./Components/Project/Project"



function App() {
 

  return (
   <div>
    <Navbar />
    <Hero />
    <About />
    <ProjectSection />
    <Contact />
    <Footer />
   </div>
  )
}

export default App
