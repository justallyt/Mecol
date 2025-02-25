import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import SingleCategory from "../components/products/SingleCategory"

const ShelvingCategory = () => {
  return (
    <>
            <Navbar />
            <SingleCategory name={"shelving"} />
            <Footer />
    </>
  )
}

export default ShelvingCategory