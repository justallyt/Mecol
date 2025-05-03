import { useNavigate } from "react-router-dom";
import { popular_products } from "../../data/categories"
import { LuMoveUpRight } from "react-icons/lu";

const PopularProducts = () => {
   const navigate = useNavigate();
  return (
    <div className="popular-products">
              <div className="popular-intro">
                        <h2>Popular Products at Mecol</h2>
                        <p>Explore the top picks in industrial and institutional furniture at Mecol! From ergonomic office setups to heavy-duty industrial workstations, our best-selling pieces are designed for durability, functionality, and style. Whether you&apos;re outfitting a modern workspace or upgrading your facility, these favorites deliver the quality and performance you need.</p>
              </div>

              <div className="popular-products-row">
                        { popular_products.map(item=>
                              <div className="popular-moja" key={item} onClick={() => navigate(item.link) }>
                                            <img src={item.image} alt="" />
                                           <h3>{item.title}</h3>
                              </div>
                        )}
                        <div className="more-products" onClick={() => navigate("/products")}>
                                   <h4>Explore More Products <span><LuMoveUpRight /></span></h4>
                        </div>
              </div>
    </div>
  )
}

export default PopularProducts