import "../css/home.css"
import Navbar from "../components/common/navigation/Navbar"
import HeroSection from "../components/home/HeroSection"
import AboutSection from "../components/home/AboutSection"
import Categories from "../components/home/Categories"
import Choose from "../components/home/Choose"
import GallerySection from "../components/home/GallerySection"
import Nudge from "../components/common/Nudge"
import Footer from "../components/common/Footer"
const Home = () => {
  return (
    <>
          <Navbar />
          <HeroSection />
          <AboutSection />
           <Categories />
           <Choose />
           <GallerySection />
           <Nudge />
           <Footer />
    </>
  )
}

export default Home