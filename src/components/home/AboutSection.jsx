import Partners from "./Partners"
import aboutImage from "../../assets/aboutImg.jpg"
import { Link } from "react-router-dom"
import { LuChevronRight } from "react-icons/lu";

const AboutSection = () => {
  return (
    <div className="about-section">
               <div className="inner-row">
                          <Partners />
                          <div className="about-section-content">
                                     <div className="about-section-image">
                                              <img src={aboutImage} alt="" />
                                     </div>
                                     <div className="about-section-description">
                                                 <h3>About Us</h3>
                                                 <h1>Redefining Furniture Quality and Innovation</h1>
                                                 <p>Mecol is a Kenyan company with a global presence, a leader in the manufacture and distribution of high quality furniture for the office and institutional industry. </p>
                                                 <p>We are composed of a team of specialists with several years of experience and intense knowledge about the market trends and requirements generated over time.</p>

                                                 <Link to={'/'} className="btn">Know More <span><LuChevronRight /></span></Link>
                                     </div>
                          </div>
               </div>
    </div>
  )
}

export default AboutSection