/* eslint-disable react/prop-types */
import { Link } from "react-router-dom"
import { LuChevronRight } from "react-icons/lu"

const MobileDropdown = ({status}) => {
  return (
    <div className={status ? "mobile-dropdown active" : "mobile-dropdown"}>
                    <div className="dropdown-column">
                                     <h2>Office</h2>
                                     <ul>
                                               <li><Link to={'/product-category/office/desks-and-workstations'}>Desks & Workstations<span><LuChevronRight /></span></Link></li>
                                               <li><Link to={'/product-category/office/tables'}>Tables<span><LuChevronRight /></span></Link></li>
                                               <li><Link to={"/product-category/office/reception-counters"}>Reception Counters <span><LuChevronRight /></span></Link></li>
                                               <li><Link to={'/product-category/office/office-chairs'}>Office Chairs<span><LuChevronRight /></span></Link></li>
                                               <li><Link to={'/product-category/office/stools'}>Stools<span><LuChevronRight /></span></Link></li>
                                    </ul>
                          </div>
                         
                          <div className="dropdown-column">
                                    <h2>Cabinets & Cupboards</h2>
                                    <ul>
                                               <li><Link to={'/product-category/cabinets-and-cupboards/filing-cabinets'}>Filing-Cabinets<span><LuChevronRight /></span></Link></li>
                                               <li><Link to={'/product-category/cabinets-and-cupboards/pedestals'}>Pedestals<span><LuChevronRight /></span></Link></li>
                                               <li><Link to={'/product-category/cabinets-and-cupboards/Cupboards'}>Cupboards<span><LuChevronRight /></span></Link></li>
                                               <li><Link to={'/product-category/cabinets-and-cupboards/map-cabinets'}>Map Cabinets<span><LuChevronRight /></span></Link></li>
                                               <li><Link to={'/product-category/cabinets-and-cupboards/fireproof-safe-and-cabinets'}>Fireproof Safe & Cabinets<span><LuChevronRight /></span></Link></li>
                                    </ul>
                          </div>
                          <div className="dropdown-column">
                                      <h2>School</h2>
                                      <ul>
                                               <li><Link to={'/product-category/school/school-desks-and-tables'}>School Desks & Tables<span><LuChevronRight /></span></Link></li>
                                               <li><Link to={'/product-category/school/school-chairs'}>School Chairs<span><LuChevronRight /></span></Link></li>
                                               <li><Link to={'/product-category/school/school-beds'}>School Beds<span><LuChevronRight /></span></Link></li>
                                               <li><Link to={'/product-category/school/school-tables'}>School Tables<span><LuChevronRight /></span></Link></li>
                                               <li><Link to={'/product-category/school/library-furniture'}>Library Furniture<span><LuChevronRight /></span></Link></li>
                                    </ul>
                          </div>
                          <div className="dropdown-column">
                                    <h2>Shelving</h2>
                                    <ul>
                                               <li><Link to={'/product-category/shelving/storage-shelving'}>Storage Shelving<span><LuChevronRight /></span></Link></li>
                                               <li><Link to={'/product-category/shelving/mobile-shelving'}>Mobile Shelving<span><LuChevronRight /></span></Link></li>
                                               <li><Link to={'/product-category/shelving/supermarket-shelving'}>Supermarket Shelving <span><LuChevronRight /></span></Link></li>
                                               <li><Link to={'/product-category/shelving/library-shelving'}>Library Shelving<span><LuChevronRight /></span></Link></li>
                                               <li><Link to={'/product-category/shelving/laboratory-shelving'}>Laboratory Shelving <span><LuChevronRight /></span></Link></li>
                                    </ul>
                          </div>
                          
                          <div className="dropdown-column">
                                  <h2>Racking</h2>
                                  <ul>
                                             <li><Link to={'/product-category/racking/heavy-duty-racks'}>Heavy Duty Racks<span><LuChevronRight /></span></Link></li>
                                             <li><Link to={'/product-category/racking/medium-duty-racks'}>Medium Duty Racks<span><LuChevronRight /></span></Link></li>
                                  </ul>
                          </div>
                          <div className="dropdown-column">
                                    <h2>Other Categories</h2>
                                    <ul>
                                             <li><Link to={'/product-category/bank'}>Bank<span><LuChevronRight /></span></Link></li>
                                             <li><Link to={'/product-category/hospital'}>Hospital<span><LuChevronRight /></span></Link></li>
                                             <li><Link to={'/product-category/clothing-lockers'}>Clothing Lockers<span><LuChevronRight /></span></Link></li>
                                             {/* <li><Link to={'/product-category/other-furniture'}>Other<span><LuChevronRight /></span></Link></li> */}
                                    </ul>
                          </div>
    </div>
  )
}

export default MobileDropdown