import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import ContactBody from "../components/contact/ContactBody"
import ContactHero from "../components/contact/ContactHero"
import "../css/contact.css"
const Contact = () => {
  return (
    <>
          <Navbar />
          <ContactHero />
          <ContactBody />
           <div className="map-section">
                           <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15955.191590298295!2d36.8329301!3d-1.2958669!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x182f1118ed2f51dd%3A0x1cca07ab66de0084!2sMecol%20Ltd!5e0!3m2!1sen!2ske!4v1710368219482!5m2!1sen!2ske" width="600" height="450" allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
           </div>
          <Footer />
    </>
  )
}

export default Contact