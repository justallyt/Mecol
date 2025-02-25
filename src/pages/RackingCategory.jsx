import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import SingleCategory from "../components/products/SingleCategory"

const RackingCategory = () => {
  return (
    <>
             <Navbar />
             <SingleCategory name={"racking"} />
             <Footer />
    </>
  )
}

export default RackingCategory