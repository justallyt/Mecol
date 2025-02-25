import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import SingleCategory from "../components/products/SingleCategory"

const CabinetryCategory = () => {
  return (
    <>
            <Navbar />
            <SingleCategory name={"cabinets-and-cupboards"} />
            <Footer />
    </>
  )
}

export default CabinetryCategory