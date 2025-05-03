import {BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { top_categories } from "../../data/categories";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef,} from "react";
import PopularProducts from "./PopularProducts";
const Categories2 = () => {
  const navigate = useNavigate();
  const roller = useRef();
  const rollerBox = useRef();
  const shiftRef = useRef();
  //const [counter, setCounter] = useState(1)
 
  const shiftLeft = useRef();
  const shiftRight = useRef();
  useEffect(() => {
           let counter = 1;
           const size = roller && roller.current.querySelectorAll(".category-detail-box")[0].clientWidth + 30;
           
           if(counter === 1){
                 shiftLeft.current.classList.add("deactivate")
           }      
      
           shiftLeft.current.addEventListener("click", () => {       
                  if(counter === 1){
                       shiftLeft.current.classList.add("deactivate");
                       roller.current.style.transition = 'transform 0.6s ease-in-out';
                        roller.current.style.transform =  'translateX(0px)';
                  }else{
                            --counter;
                           shiftRight.current.classList.remove("deactivate")
                            roller.current.style.transition = 'transform 0.6s ease-in-out';
                            roller.current.style.transform =  'translateX('+(-counter * size) + 'px)';
                      }
                })

                shiftRight.current.addEventListener("click", () => {    
                     if(window.innerWidth <= 1080 && window.innerWidth > 768 && counter > 6){
                           shiftRight.current.classList.add("deactivate")
                     }else if(window.innerWidth <= 768 && window.innerWidth > 530 && counter > 7){
                        shiftRight.current.classList.add("deactivate")
                     }else if(window.innerWidth <= 530 && counter > 7){
                          shiftRight.current.classList.add("deactivate")
                     }else if (window.innerWidth > 1080 && counter > 5){
                        shiftRight.current.classList.add("deactivate")
                     }
                   else{
                      shiftRight.current.classList.remove("deactivate")
                      shiftLeft.current.classList.remove("deactivate")
                      roller.current.style.transition = "transform 0.6s ease-in-out";
                      roller.current.style.transform = 'translateX('+(-counter * size) + 'px)';
                      ++counter;
                  }
              })
  }, [])

  return (
    <div className="categories-section-2">
                <div className="categories-body-intro">
                          <div className="categories-body-column">
                                     <h2>Discover By Category</h2>
                                     <p>View our incredible selection of furniture designed to match your unique style and fit perfectly into your space. Whether you&apos;re looking for something sleek and modern or cozy and classic, we have the perfect pieces to bring your vision to life.</p>
                          </div>
                          <div className="categories-shifts">
                                      <div ref={shiftRef} className="shift-box">
                                                 <span ref={shiftLeft} className="left"><BsArrowLeft /></span>
                                                 <span ref={shiftRight} className="right"><BsArrowRight /></span>
                                      </div>
                          </div>
                </div>

                <div className="categories-wrapper">
                        <div ref={roller}  className="categories-roller">
                        { top_categories.map(item => 
                                 <div ref={rollerBox} className="category-detail-box" key={item.id} onClick={() => navigate(item.link)}>
                                           <img src={item.image} alt="" />
                                           
                                           <div className="details-text">
                                                    <h3>{item.title}</h3>
                                                    <p>{item.number} Items</p>
                                           </div>
                                 </div>
                        )}
                        </div>
                </div>


                <PopularProducts />
    </div>
  )
}

export default Categories2