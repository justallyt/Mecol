import Navbar from "../components/common/navigation/Navbar"
import ProductsHero from "../components/products/ProductsHero"
import ProductsBody from "../components/products/ProductsBody"
import "../css/products.css"
import Footer from "../components/common/Footer"
import Nudge from "../components/common/Nudge"
const Products = () => {
  return (
    <>
        <Navbar />
        <ProductsHero />
        <ProductsBody />
        <Nudge />
        <Footer />
    </>
  )
}

export default Products