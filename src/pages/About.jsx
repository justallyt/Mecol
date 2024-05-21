import AboutBody from "../components/about/AboutBody"
import AboutHero from "../components/about/AboutHero"
import AboutStatements from "../components/about/AboutStatements"
import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import Nudge from "../components/common/Nudge"
import Choose from "../components/home/Choose"
import GallerySection from "../components/home/GallerySection"
import "../css/about.css"

const About = () => {
  return (
    <>
         <Navbar />
         <AboutHero />
         <AboutBody />
         <AboutStatements />
         <Choose />
         <GallerySection />
         <Nudge />
         <Footer />
    </>
  )
}

export default About