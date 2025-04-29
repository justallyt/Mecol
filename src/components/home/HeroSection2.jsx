import { Link } from "react-router-dom"
import { HiOutlineArrowUpRight } from "react-icons/hi2";
import desks from "../../assets/desks.jpg"
import waiting from "../../assets/waiting.jpg"
import boardroom from "../../assets/boardroom.jpg"
import racking from "../../assets/racking2.jpg"
import specification from "../../assets/specification.jpg"
import crafting from "../../assets/crafting.jpg"
import delivery from "../../assets/delivery.jpg"

const HeroSection2 = () => {
  return (
    <div className="hero-section-2">
             <div className="inner-row">
                         <div className="hero-section-2-content">
                                      <div className="hero-title">
                                                  <h1>Durable, Purpose-Driven Furniture for <span>Institutional</span> and <span>Industrial</span> Spaces.</h1>
                                                  <div className="hero-title-texts">
                                                             <p>We blend precision-engineered steel with the natural warmth of wood—built to endure, designed to inspire, and trusted by institutions that demand uncompromising quality in both function and form.</p>
                                                             <Link to={"/"}>Explore More <span><HiOutlineArrowUpRight /></span></Link>
                                                  </div>
                                      </div>

                                      <div className="hero-images-grid">
                                                  <div className="double-grid-column">
                                                          <div className="inner-column">
                                                                     <img src={waiting} alt="" />
                                                          </div>
                                                          <div className="inner-column">
                                                                     <img src={desks} alt="" />
                                                          </div>
                                                  </div>
                                                  <div className="single-grid-column">
                                                            <img src={boardroom} alt="" />
                                                  </div>
                                                  <div className="single-grid-column expand">
                                                             <img src={racking} alt="" />
                                                  </div>
                                      </div>

                                      <div className="simple-process">
                                                  <div className="process-moja">
                                                            <img src={specification} alt="" />
                                                            <div className="process-texts">
                                                                      <h3>Specification & Planning</h3>
                                                                      <p>We review your requirements to ensure every detail is understood.</p>
                                                            </div>
                                                  </div>
                                                  <div className="process-moja">
                                                             <img src={crafting} alt="" />
                                                             <div className="process-texts">
                                                                          <h3>Crafting</h3>
                                                                          <p>Our team builds with precision, using durable steel and quality wood.</p>
                                                             </div>
                                                  </div>
                                                  <div className="process-moja">
                                                            <img src={delivery} alt="" />
                                                            <div className="process-texts">
                                                                        <h3>Delivery & Installation</h3>
                                                                        <p>We deliver on time and ensure everything is ready for use.</p>
                                                            </div>
                                                  </div>
                                      </div>
                         </div>
             </div>
    </div>
  )
}

export default HeroSection2