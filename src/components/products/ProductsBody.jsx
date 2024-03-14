import office1 from "../../assets/office1.jpg"
import library1 from "../../assets/library1.jpg"
import school1 from "../../assets/school1.jpg"
import bank1 from "../../assets/bank1.jpg"
import hotel1 from '../../assets/hotel1.jpg'
import hospital1 from "../../assets/hospital1.jpg"
import storage1 from '../../assets/storage1.jpg'
import supermarket from "../../assets/supermarket.jpg"
import mobileshelves from "../../assets/mobileshelves.jpg"
const ProductsBody = () => {
  return (
    <div className="products-body-section">
              <div className="inner-row">
                         <div className="products-body-content">
                                   <h2>Product Listing</h2>

                                   <div className="products-body-row">
                                            <div className="product-moja">
                                                          <img src={office1} alt="" />
                                                         <h3>Office Furniture</h3>
                                            </div>
                                            <div className="product-moja">
                                                          <img src={library1} alt="" />
                                                         <h3>Office Furniture</h3>
                                            </div>
                                            <div className="product-moja">
                                                          <img src={school1} alt="" />
                                                         <h3>School Furniture</h3>
                                            </div>
                                            <div className="product-moja">
                                                          <img src={bank1} alt="" />
                                                         <h3>Bank Furniture</h3>
                                            </div>
                                            <div className="product-moja">
                                                          <img src={hotel1} alt="" />
                                                         <h3>Hotel Furniture</h3>
                                            </div>
                                            <div className="product-moja">
                                                          <img src={hospital1} alt="" />
                                                         <h3>Hospital Furniture</h3>
                                            </div>
                                            <div className="product-moja">
                                                          <img src={storage1} alt="" />
                                                         <h3>Storage & Racking Furniture</h3>
                                            </div>
                                            <div className="product-moja">
                                                          <img src={supermarket} alt="" />
                                                         <h3>Supermarket Furniture</h3>
                                            </div>
                                            <div className="product-moja">
                                                          <img src={mobileshelves} alt="" />
                                                         <h3>Storage & Racking Furniture</h3>
                                            </div>
                                   </div>
                         </div>
              </div>
    </div>
  )
}

export default ProductsBody