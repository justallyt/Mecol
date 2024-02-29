import { Link, NavLink } from "react-router-dom"
import { IoMdCall } from "react-icons/io";
import logo from "../../../assets/logo.png"
import { LuChevronDown } from "react-icons/lu";
import { useContext, useState } from "react";
import Dropdown from "./Dropdown";
import { CgMenuRightAlt } from "react-icons/cg";
import { sidebarContext } from "./navcontext";
const Header = () => {
  const [ dropdown, setDropdown] = useState(false);
  const [sidebarStatus, setSidebarStatus] = useContext(sidebarContext);

  const openSidebar = () => setSidebarStatus(true);
  return (
    <header>
              <div className="inner-row">
                        <div className="header-content">
                                    <Link to={'/'} className="logo">
                                              <img src={logo} alt="mecol logo" />
                                              <span>Quality Furniture</span>
                                    </Link>

                                    <nav>
                                              <ul>
                                                         <li><NavLink to={'/'}>Home</NavLink></li>
                                                         <li><NavLink to={'/about-us'}>About Us</NavLink></li>
                                                         <li onMouseOver={() => setDropdown(true)} onMouseOut={() => setDropdown(false)}><NavLink to={'/products'}>Products <span><LuChevronDown /></span></NavLink>
                                                                    <Dropdown status={dropdown} />
                                                         </li>
                                                         <li><NavLink to={'/contact-us'}>Contact Us</NavLink></li>
                                              </ul>
                                    </nav>

                                    <div className="header-actions">
                                              <div className="header-box">
                                                       <h3>
                                                                 <span><IoMdCall /></span>
                                                                 +254 7271-62127
                                                       </h3>
                                              </div>
                                              <div className="header-box">
                                                         <Link to={'/'}>Request A Quote</Link>
                                              </div>

                                              <div className="menu-btn" onClick={openSidebar}>
                                                        <span><CgMenuRightAlt /></span>
                                              </div>
                                    </div>
                        </div>
              </div>
    </header>
  )
}

export default Header