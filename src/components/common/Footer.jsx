import { Link } from "react-router-dom"
import footerLogo from "../../assets/logo.png"
import { FaFacebookF, FaXTwitter, FaInstagram,FaTiktok } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer>
              <div className="inner-row">
                           <div className="footer-content">
                                        <div className="double-column">
                                                    <div className="footer-logo">
                                                               <img src={footerLogo} alt="" />
                                                               <span>Quality Furniture</span>
                                                    </div>
                                                    <p>All the items on our website are standard, however, we at Mecol are able to fabricate custom furniture as per customer requirements.</p>
                                                    <h4>Contacts</h4>
                                                    <p>Commercial Street, Industrial Area</p>
                                                    <p>P.O. Box 49861 - 00100, Nairobi, Kenya</p>
                                                    <p>+254 717 162127</p>
                                                    <p>sales@mecol.co.ke</p>
                                        </div>
                                        <div className="double-column-right">
                                                      <div className="footer-column">
                                                                <h3>Company</h3>
                                                                <ul>
                                                                            <li><Link to={'/'}>Home</Link></li>
                                                                            <li><Link to={'/about-us'}>About Us</Link></li>
                                                                            <li><Link to={'/products'}>Products</Link></li>
                                                                            <li><Link to={'/contact'}>Contact Us</Link></li>
                                                                </ul>
                                                      </div>
                                                      <div className="footer-column">
                                                                 <h3>Products</h3>
                                                                 <ul>
                                                                            <li><Link to={'/product-category/racking/heavy-duty-racks'}>Storage & Racking</Link></li>
                                                                            <li><Link to={"/product-category/shelving/storage-shelving"}>Shelving Furniture</Link></li>
                                                                            <li><Link to={'/product-category/cabinets-and-cupboards/filing-cabinets'}>Cabinets & Cupboards</Link></li>
                                                                           <li><Link to={'/product-category/office/desks-and-workstations'}>Office</Link></li>
                                                                           <li><Link to={'/product-category/bank'}>Bank Furniture </Link></li>
                                                                           <li><Link to={'/product-category/school/school-desks-and-tables'}>School</Link></li>
                                                                            <li><Link to={'/product-category/hospital'}>Hospital Furniture</Link></li>
                                                                 </ul>
                                                      </div>
                                        </div>
                           </div>

                           <div className="copyright">
                                      <p>All rights reserved &copy; {new Date().getFullYear()} <span>MECOL</span> Limited.</p>
                                      <div className="footer-social-links">
                                                <ul>
                                                         <li><Link to={'/'}><span><FaFacebookF /></span></Link></li>
                                                         <li><Link to={'/'}><span><FaXTwitter /></span></Link></li>
                                                         <li><Link to={'/'}><span><FaInstagram /></span></Link></li>
                                                         <li><Link to={'/'}><span><FaTiktok /></span></Link></li>
                                                </ul>
                                      </div>
                           </div>
              </div>
    </footer>
  )
}

export default Footer