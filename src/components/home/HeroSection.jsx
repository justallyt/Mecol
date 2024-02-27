import { Link } from "react-router-dom"
import { LuChevronRight } from "react-icons/lu";

const HeroSection = () => {
  return (
    <div className="hero-section">
              <div className="inner-row">
                       <div className="hero-section-content">
                                   <div className="hero-texts">
                                              <h3></h3>
                                              <h1>We Create <span>Unique</span> and <span>Modern</span> Design Furniture.</h1>
                                              <p>With over 4 decades of experience, we specialize in manufacture of Office, School, Hospital, Library and Shelving furniture.</p>
                                              <Link to={'/'}>Explore <span><LuChevronRight /></span></Link>
                                   </div>
                       </div>
              </div>
    </div>
  )
}

export default HeroSection