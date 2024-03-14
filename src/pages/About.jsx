import AboutBody from "../components/about/AboutBody"
import AboutHero from "../components/about/AboutHero"
import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import "../css/about.css"

const About = () => {
  return (
    <>
         <Navbar />
         <AboutHero />
         <AboutBody />
         <Footer />
    </>
  )
}

export default About