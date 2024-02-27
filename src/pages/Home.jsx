import "../css/home.css"
import Navbar from "../components/common/navigation/Navbar"
import HeroSection from "../components/home/HeroSection"
import AboutSection from "../components/home/AboutSection"
import Categories from "../components/home/Categories"
const Home = () => {
  return (
    <>
          <Navbar />
          <HeroSection />
          <AboutSection />
           <Categories />
    </>
  )
}

export default Home