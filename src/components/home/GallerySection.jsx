import { Link } from "react-router-dom"
import { GoArrowUpRight } from "react-icons/go";
import { gallery } from "../../data/gallery";

const GallerySection = () => {
  return (
    <div className="gallery-section">
             <div className="inner-row">
                     <div className="gallery-intro">
                                <div className="gallery-intro-content">
                                        <h1>View Some of The Success We&apos;ve had over the Years</h1>
                                        <Link to={'/'} className="btn-v2">View Gallery<span><GoArrowUpRight /></span></Link>
                                 </div>
                        </div>
                           <div className="gallery-body">
                                    <div className="left-column">
                                               { gallery.slice(0, 2).map(item => 
                                                         <div className="gallery-item" key={item.id}>
                                                                  <img src={item.image} alt="" />
                                                                  <h4>{item.project}</h4>
                                                         </div>
                                                )}
                                    </div>
                                    <div className="right-column">
                                                 { gallery.slice(2, 5).map(item => 
                                                         <div className="gallery-item" key={item.id}>
                                                                   <img src={item.image} alt="" />
                                                                   <h4>{item.project}</h4>
                                                         </div>
                                                  )}
                                    </div>
                            </div>
             </div>
    </div>
  )
}

export default GallerySection