import { categories } from "../../data/categories"
import { Link } from "react-router-dom"
const ProductsBody = () => {
  return (
    <div className="products-body-section">
              <div className="inner-row">
                         <div className="products-body-content">
                                   <h2>Product Listing</h2>

                                   <div className="products-body-row">
                                            { categories.map(item => 
                                                      <Link to={item.link} className="product-moja" key={item.id}>
                                                                <img src={item.image} alt="" />
                                                                 <h3>{item.title}</h3>
                                                      </Link>
                                             )}
                                   </div>
                         </div>
              </div>
    </div>
  )
}

export default ProductsBody