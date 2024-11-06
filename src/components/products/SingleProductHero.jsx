import { useParams } from "react-router-dom"
import { categories } from "../../data/categories";
import { useState } from "react";

const SingleProductHero = () => {
    const { name } = useParams();
    const [ activeTab, setActiveTab] = useState(1)
    
    const category = categories.find(item => item.url_param === name);
   
  return (
    <div className="single-product-hero">
               <div className="inner-row">
                           <div className="single-hero-texts">
                                      <h1>{category.title}</h1>
                           </div>
                           <div className="subcategory-row">
                                    <div className="subcategory-tabs">
                                               <ul>
                                                       { category.subcategory.map(item => 
                                                       <li onClick={() => setActiveTab(item.name.slice(0, 1))}
                                                             className={activeTab == item.name.slice(0,1) ? "active" : ""} key={item.id}>{item.name.slice(3)}
                                                      </li>
                                                        )}
                                               </ul>
                                    </div>
                                  
                                    {/* { category.subcategory.map(sub => 
                                                           
                                              <div className="subcategory-tab-wrapper" key={sub.id}>
                                                      
                                              </div>
                                    )} */}
                                     { category.subcategory.filter(f => f.name.slice(0,1) == activeTab).map(item => 
                                        <div className="subcategory-moja" key={item.id}>
                                               <h2>{item.name}</h2>
                                               <p>{item.note}</p>
                                              
                                                { item.name === "4. Office Chairs" || item.name == "2. Tables" ?
                                                      <div className="distinct">
                                                                 {item.productsV2 && item.productsV2.length > 0 && item.productsV2.map(oitem=> 
                                                                        <div className="subcategory" key={oitem.id}>
                                                                                   <h3>{oitem.subcategory}</h3>
                                                                                   <div className="subcategory-specifics">
                                                                                           { oitem.prods.map(pitem => 
                                                                                              <div className="product" key={pitem.id}>
                                                                                                          <div className="product-image">
                                                                                                                           <img src={pitem.image} alt="" />
                                                                                                          </div>
                                                                                                          { pitem.code && <h3>{pitem.code}</h3>}
                                                                                                          <h4>{pitem.description}</h4>
                                                                                                </div>
                                                                                           )}
                                                                                   </div>
                                                                        </div>
                                                                 )}
                                                      </div>
                                                      :
                                                      <div className="subcategory-specifics">
                                                      {item.products.map(pitem => 
                                                           <div className="product" key={pitem.id}>
                                                                   <div className="product-image">
                                                                               <img src={pitem.image} alt="" />
                                                                   </div>
                                                                   { pitem.code && <h3>{pitem.code}</h3>}
                                                                   <h4>{pitem.description}</h4>
                                                                   
                                                           </div>
                                                     )}
                                               </div>
                                                  }

                                       </div>
                                      )}
                           </div>
               </div>
    </div>
  )
}

export default SingleProductHero