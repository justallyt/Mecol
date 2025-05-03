import { Link } from "react-router-dom"
import { GoArrowUpRight } from "react-icons/go";

const Nudge = () => {
  return (
    <div className="nudge-section">
                <div className="inner-row">
                           <div className="nudge-section-content">
                                     <h1>Need Furniture Supplies Tailored to Your Needs? </h1>
                                     <p>We offer a comprehensive range of furniture for diverse industries. For bespoke solutions, reach out to request a custom quote today.</p>
                                     <Link to={'/contact'} className="btn-v2">Request Quotation <span><GoArrowUpRight /></span></Link>
                           </div>
                </div>
    </div>
  )
}

export default Nudge