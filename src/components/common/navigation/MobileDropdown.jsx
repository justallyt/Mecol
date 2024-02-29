/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { LuChevronRight } from "react-icons/lu"

const MobileDropdown = ({status}) => {
  return (
    <div className={status ? "mobile-dropdown active" : "mobile-dropdown"}>
              <div className="dropdown-column">
                                    <h2>General Furniture</h2>
                                    <ul>
                                               <li><Link to={'/office-furniture'}>Office Furniture <span><LuChevronRight /></span></Link></li>
                                               <li><Link to={'/bank-furniture'}>Bank Furniture <span><LuChevronRight /></span></Link></li>
                                               <li><Link to={'/hotel-furniture'}>Hotel Furniture <span><LuChevronRight /></span></Link></li>
                                    </ul>
                          </div>
                          <div className="dropdown-column">
                                     <h2>Institutional Furniture</h2>
                                     <ul>
                                               <li><Link to={'/school-furniture'}>School Furniture <span><LuChevronRight /></span></Link></li>
                                               <li><Link to={'/hospital-furniture'}>Hospital Furniture <span><LuChevronRight /></span></Link></li>
                                               <li><Link to={'/library-furniture'}>Library Furniture <span><LuChevronRight /></span></Link></li>
                                    </ul>
                          </div>
                          <div className="dropdown-column">
                                      <h2>Shelving & Related Furniture</h2>
                                      <ul>
                                               <li><Link to={'/storage-and-rackingl-furniture'}>Storage & Racking Furniture <span><LuChevronRight /></span></Link></li>
                                               <li><Link to={'/supermarket-furniture'}>Supermarket Furniture <span><LuChevronRight /></span></Link></li>
                                               <li><Link to={'/mobile-shelving-furniture'}>Mobile Shelving Furniture <span><LuChevronRight /></span></Link></li>
                                    </ul>
                          </div>
    </div>
  )
}

export default MobileDropdown