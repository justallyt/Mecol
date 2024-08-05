import { useParams } from "react-router-dom"
import { categories } from "../../data/categories";

const SingleProductHero = () => {
    const { name } = useParams();
    
    const category = categories.find(item => item.url_param === name);
   
  return (
    <div className="single-product-hero">
               <div className="inner-row">
                           <div className="single-hero-texts">
                                      <h1>{category.title}</h1>
                           </div>
                           <div className="subcategory-row">
                                     { category.subcategory.map(item => 
                                        <div className="subcategory-moja" key={item.id}>
                                               <h2>{item.name}</h2>
                                               <p>{item.note}</p>
                                              
                                                { item.name === "4. Office Chairs" ?
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