import Partners from "./Partners"
import aboutImage from "../../assets/aboutImg3.jpg"
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
                                                 <h1>Tailored furniture solutions designed for performance and durability.</h1>
                                                 {/* <p>Mecol is a Kenyan company with a global presence, a leader in the manufacture and distribution of high quality furniture for the office and institutional industry. </p> */}
                                                 <p>Mecol is a Kenyan company renowned for its expertise in crafting high-quality, purpose-built furniture solutions. With years of experience, our team has a deep understanding of the specific needs of industrial and institutional spaces. We engineer durable furniture that performs seamlessly in demanding environments, providing reliability and functionality for organizations that require top-tier solutions.</p>
                                                 {/* <p>We are composed of a team of specialists with several years of experience and intense knowledge about the market trends and requirements generated over time.</p> */}
                                                 <p>Our commitment to excellence is at the heart of everything we do. We combine strength, design, and practicality to create furniture solutions that not only meets but exceeds expectations.</p>

                                                 <Link to={'/about-us'} className="btn">Know More <span><LuChevronRight /></span></Link>
                                     </div>
                          </div>
               </div>
    </div>
  )
}

export default AboutSection