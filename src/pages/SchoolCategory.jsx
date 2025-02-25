import Footer from "../components/common/Footer"
import Navbar from "../components/common/navigation/Navbar"
import SingleCategory from "../components/products/SingleCategory"

const SchoolCategory = () => {
  return (
    <>
           <Navbar />
           <SingleCategory name={"school"} />
           <Footer />
    </>
  )
}

export default SchoolCategory