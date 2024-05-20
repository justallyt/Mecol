import { GoArrowUpRight } from "react-icons/go";
import { Link } from "react-router-dom"
import { categories } from "../../data/categories";

const Categories = () => {
  return (
    <div className="categories-section">
                <div className="categories-intro">
                            <div className="inner-row">
                                        <div className="categories-intro-content">
                                                    <h2>Top Categories</h2>
                                                    <p>We offer a wide variety of funiture products to suit your unique style and needs.</p>
                                                    <Link className="btn-v2" to={'/products'}>Discover More <span><GoArrowUpRight /></span></Link>
                                        </div>
                            </div>
                </div>
                <div className="categories-row">
                          { categories.map(item => 
                                 <div className="category-box" key={item.id}>
                                         <div className="overlay">
                                                   <div className="overlay-inner">
                                                          <img src={item.icon} alt="" />
                                                           <h3> {item.title}</h3>                             
                                                   </div>
                                         </div>
                                        <img src={item.image} alt="" />
                                         <div className="category-box-texts">
                                                     <h2>{item.title}</h2>
                                                     <p>{item.description}</p>
                                                     <Link to={item.link}>Explore<span><GoArrowUpRight /></span></Link>
                                          </div>
                            </div>
                            )}
                </div>
    </div>
  )
}

export default Categories