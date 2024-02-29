import { Link, NavLink } from "react-router-dom"
import logo from "../../../assets/logo.png"
import { CgClose } from "react-icons/cg"
import { LuChevronDown } from "react-icons/lu";
import MobileDropdown from "./MobileDropdown";
import { useContext, useEffect, useRef, useState } from "react";
import { IoMdCall } from "react-icons/io";
import { sidebarContext } from "./navcontext";
import gsap from "gsap";

const Sidebar = () => {
   const [dropdownStatus, setDropdownStatus] = useState(false);
   const [sidebarStatus, setSidebarStatus] = useContext(sidebarContext);
   const sidebarRef = useRef();

   useEffect(() => {
        if(sidebarStatus) {
              const tl = gsap.timeline();
              sidebarRef.current.classList.add('active');

              tl.to(sidebarRef.current.querySelector('.sidebar-overlay'), {
                    y: 0,
                  duration: 1
             })
            tl.to(sidebarRef.current.querySelector('.sidebar-content'), {
                  x: 0,
                 duration: 1
            })
        }else{
             const tl = gsap.timeline();
            tl.to(sidebarRef.current.querySelector('.sidebar-content'), {
                  x: '-100%',
                  duration: 1
             })
            tl.to(sidebarRef.current.querySelector('.sidebar-overlay'), {
                  y: '-100%',
                 duration: 1
            })
             setTimeout(() => {
                   sidebarRef.current.classList.remove("active")
             }, 2000)
           }
        }, [sidebarStatus]);


        const closeSidebar = () => setSidebarStatus(false);
  return (
    <div className="sidebar-section" ref={sidebarRef}>
             <div className="sidebar-overlay"></div>
             <div className="sidebar-content">
                       <div className="sidebar-intro">
                                     <Link to={'/'} className="logo">
                                              <img src={logo} alt="mecol logo" />
                                              <span>Quality Furniture</span>
                                     </Link>
                                     <span className="close-btn" onClick={closeSidebar}><CgClose /></span>
                       </div>
                       <div className="sidebar-nav">
                               <ul>
                                       <li><NavLink to={'/'}>Home</NavLink></li>
                                      <li><NavLink to={'/about-us'}>About Us</NavLink></li>
                                      <li onClick={() => setDropdownStatus(!dropdownStatus)}><NavLink className={dropdownStatus ? "active" : "inactive"} to={'#'}>Products <span><LuChevronDown /></span></NavLink>
                                                   <MobileDropdown status={dropdownStatus}/>               
                                      </li>
                                       <li><NavLink to={'/contact-us'}>Contact Us</NavLink></li>
                                 </ul>
                       </div>

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
                                    </div>
             </div>
    </div>
  )
}

export default Sidebar