//import video from "../../assets/vid.mp4"
import about1 from "../../assets/about5.jpg"
import about2 from "../../assets/about6.jpg"

const AboutBody = () => {
  return (
    <div className="about-body-section">
                <div className="inner-row">
                              <div className="about-body-content">
                                             <div className="about-body-header">
                                                          <h2>Who We Are</h2>
                                                          {/* <div className="video-box">
                                                                    <video autoPlay loop   muted>
                                                                                <source src={video} type="video/mp4"/>
                                                                    </video>
                                                          </div> */}
                                                          <div className="images-wrapper">
                                                                   <img src={about1} alt="" />
                                                                   <img src={about2} alt="" />
                                                          </div>
                                             </div>
                                             <div className="about-body-description">
                                                         <p>Established in 1958, Mecol has built a legacy of crafting high-quality furniture for the corporate, healthcare, institutional, and retail sectors.
We believe that investing in top-tier quality always pays off. Our products, made from premium materials and with meticulous craftsmanship, are not only built to last but also offer daily visual and tactile satisfaction. 
</p>

                                                         <p>While we lead the local market, Mecol also proudly exports to companies across the COMESA region and the East African Community.
                                                         As a team of dedicated furniture professionals, we understand the importance of clear communication. From the moment you place your order, we keep you updated throughout the process. Every item is thoroughly inspected upon arrival and rechecked multiple times to ensure only pieces in perfect condition are delivered to you.</p>
                                             </div>
                              </div>
                </div>
    </div>
  )
}

export default AboutBody