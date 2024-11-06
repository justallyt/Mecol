/* eslint-disable react/prop-types */

import { Link } from "react-router-dom"
import { LuChevronRight } from "react-icons/lu";
const Dropdown = ({ status }) => {
  return (
    <div className={status ? 'dropdown active' : "dropdown"}>
               <div className="dropdown-inner">
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
                                               <li><Link to={"/product-category/clothing-lockers"}>Clothing Lockers <span><LuChevronRight /></span></Link></li>
                                    </ul>
                          </div>
                          <div className="dropdown-column">
                                      <h2>Shelving & Related Furniture</h2>
                                      <ul>
                                               <li><Link to={'/product-category/storage-and-racking-furniture'}>Racking <span><LuChevronRight /></span></Link></li>
                                               <li><Link to={'/product-category/shelving-furniture'}>Storage Shelving<span><LuChevronRight /></span></Link></li>
                                               <li><Link to={'/product-category/cabinets-and-cupboards'}>Cabinets & Cupboards <span><LuChevronRight /></span></Link></li>
                                    
                                    </ul>
                          </div>
               </div>
    </div>
  )
}

export default Dropdown