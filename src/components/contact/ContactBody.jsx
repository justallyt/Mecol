import { IoMdCall } from "react-icons/io";
import { BsEnvelope } from "react-icons/bs";
import { Link } from "react-router-dom";
import { FaFacebookF, FaXTwitter, FaInstagram } from "react-icons/fa6";
import ContactForm from "./ContactForm";
const ContactBody = () => {
  return (
    <div className="contact-body">
              <div className="inner-row">
                        <div className="contact-body-content">
                                       <div className="contact-details">
                                                   <div className="contact-heading-texts">
                                                              <h2>Visit our Showroom & Store</h2>
                                                              <p>At Mecol, we are a team of experienced furniture enthusiasts who craft various designs that definitely impress. All are welcome to view a showcase of some of latest designs present in our store.</p>
                                                   </div>
                                                   <div className="opening-hours">
                                                              <h4>Opening Hours</h4>
                                                              <h5>Monday - Friday: 9am - 5pm</h5>
                                                               <h5>Weekend Closed</h5>
                                                   </div>
                                                   <div className="email-phone-box">
                                                              <div className="phone-box">
                                                                        <h4>Phone Number</h4>
                                                                        <h5><span><IoMdCall /></span>+254 727 162127</h5>
                                                                        <h5><span><IoMdCall /></span>+254 206 531371</h5>
                                                              </div>
                                                              <div className="email-box">
                                                                       <h4>Email Address</h4>
                                                                       <h5><span><BsEnvelope /></span>sales@mecol.co.ke</h5>
                                                                       <h5><span><BsEnvelope /></span>support@mecol.co.ke</h5>
                                                              </div>
                                                   </div>
                                                   <div className="address-box">
                                                                <h4>Address</h4>
                                                                <h5>Commercial Street, Industrial Area</h5>
                                                                <h5>Nairobi, Kenya</h5>
                                                   </div>
                                                   <div className="social-links">
                                                              <h4>Connect With Us</h4>
                                                              <ul>
                                                                         <li><Link to={''}><span><FaFacebookF /></span></Link></li>
                                                                         <li><Link to={''}><span><FaXTwitter /></span></Link></li>
                                                                         <li><Link to={''}><span><FaInstagram /></span></Link></li>
                                                              </ul>
                                                   </div>
                                       </div>
                                       <div className="contact-form-row">
                                                <ContactForm />
                                       </div>
                        </div>
              </div>
    </div>
  )
}

export default ContactBody