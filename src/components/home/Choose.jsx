import chooseImg from "../../assets/chooseImg2.jpg"
import { reasons } from "../../data/reasons"
import rawMaterial from "../../assets/artisanry.jpg"
import workshop from "../../assets/workshop2.jpg"
import carpenter from "../../assets/carpenter.jpeg"

const Choose = () => {
  return (
    <div className="choose-section">
             <div className="inner-row">
                        <div className="choose-section-content">
                                     <div className="choose-intro">
                                                 <h1>Why Choose Us</h1>
                                                 <p>We strive to provide our customers with the best possible furniture experience.</p>
                                                 <div className="choose-intro-image">
                                                           <img src={chooseImg} alt="" />
                                                 </div>
                                     </div>
                                     <div className="choose-row">
                                                { reasons.map(item => 
                                                       <div className="choose-moja" key={item.id}>
                                                                   <div className="icon">
                                                                              <img src={item.icon} alt="" />
                                                                   </div>
                                                                   <h4>{item.title}</h4>
                                                                   <p>{item.description}</p>
                                                       </div>
                                                )}
                                     </div>

                                    <div className="quality-row">
                                                <div className="quality-row-column">
                                                            <h2>We Use Premium Quality Materials</h2>
                                                            <div className="quality-description">
                                                                         <p>Made by professionals with premium quality materials to create an elegant and luxurious experience to all our customers.</p>
                                                            </div>
                                                </div>
                                                <div className="quality-row-images">
                                                           <div className="image-ndogo">
                                                                     <img src={rawMaterial} alt="" />
                                                           </div>
                                                            <div className="image-kubwa">
                                                                     <img src={workshop} alt="" />
                                                            </div>
                                                            <div className="image-ndogo adjusted">
                                                                     <img src={carpenter} alt="" />
                                                            </div>
                                                </div>
                                    </div>

                        </div>
             </div>
    </div>
  )
}

export default Choose