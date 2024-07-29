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
                                                         <p>Mecol was incorporated in 1958 and has been producing a wide variety of quality furniture in the corporate, health, institutional and recreation sector. We believe that it pays off to invest in top quality. Products made from first class materials and with precise craftmanship not only last longer, but are a delight to the eye when you come into contact with them every day. We believe that even children will recognize and appreciate good quality and style. And that when they grow up sorrounded by such things, they will continue to do so throughout their adult lives.</p>

                                                         <p>Aside from dominating the local market, Mecol products are also exported to companies in the COMESA and the East African community. As a team of professional furnitue experts, we understand the field, and once you place your order, we do not leave you in the dark. We purposely keep you informed about the progress of your order at all times. As soon as we receive the ordered goods, we turn and check each item numerous times to make sure that only those items that are in perfect condition are shipped to you.</p>
                                             </div>
                              </div>
                </div>
    </div>
  )
}

export default AboutBody