import { Link } from "react-router-dom"
import { GoArrowUpRight } from "react-icons/go";

const Nudge = () => {
  return (
    <div className="nudge-section">
                <div className="inner-row">
                           <div className="nudge-section-content">
                                     <h1>Do you need Furniture Supplies?</h1>
                                     <p>Discover our full range of furniture products for all vast industries we serve.</p>
                                     <Link to={'/'} className="btn-v2">Request Catalogue <span><GoArrowUpRight /></span></Link>
                           </div>
                </div>
    </div>
  )
}

export default Nudge