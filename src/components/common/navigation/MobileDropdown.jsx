/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { LuChevronRight } from "react-icons/lu"

const MobileDropdown = ({status}) => {
  return (
    <div className={status ? "mobile-dropdown active" : "mobile-dropdown"}>
              <div className="dropdown-column">
                                    <h2>General Furniture</h2>
                                    <ul>
                                               <li><Link to={'/product-category/office-furniture'}>Office Furniture <span><LuChevronRight /></span></Link></li>
                                               <li><Link to={'/product-category/bank-furniture'}>Bank Furniture <span><LuChevronRight /></span></Link></li>
                                    </ul>
                          </div>
                          <div className="dropdown-column">
                                     <h2>Institutional Furniture</h2>
                                     <ul>
                                               <li><Link to={'/product-category/school-furniture'}>School Furniture <span><LuChevronRight /></span></Link></li>
                                               <li><Link to={'/product-category/hospital-furniture'}>Hospital Furniture <span><LuChevronRight /></span></Link></li>
                                    </ul>
                          </div>
                          <div className="dropdown-column">
                                      <h2>Shelving & Related Furniture</h2>
                                      <ul>
                                               <li><Link to={'/product-category/storage-and-racking-furniture'}>Storage & Racking Furniture <span><LuChevronRight /></span></Link></li>
                                               <li><Link to={'/product-category/shelving-furniture'}>Shelving Furniture <span><LuChevronRight /></span></Link></li>
                                               <li><Link to={'/product-category/cabinets-and-cupboards'}>Cabinets & Cupboards <span><LuChevronRight /></span></Link></li>
                                    </ul>
                          </div>
    </div>
  )
}

export default MobileDropdown