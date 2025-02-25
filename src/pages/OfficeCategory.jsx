import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import SingleCategory from "../components/products/SingleCategory"
const OfficeCategory = () => {
  return (
    <>
            <Navbar />
            <SingleCategory name={"office"} />
            <Footer />
    </>
  )
}

export default OfficeCategory