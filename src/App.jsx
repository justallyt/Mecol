import { Routes, Route, useLocation } from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Products from "./pages/Products"
import SingleProductCategory from "./pages/SingleProductCategory"
import { useEffect } from "react"
import OfficeCategory from "./pages/OfficeCategory"
import SchoolCategory from "./pages/SchoolCategory"
import RackingCategory from "./pages/RackingCategory"
import CabinetryCategory from "./pages/CabinetryCategory"
import ShelvingCategory from "./pages/ShelvingCategory"

function App() {
  const location = useLocation();

  useEffect(() => {
         window.scrollTo(0, 0)
  }, [location])
  return (
    <Routes>
           <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
           <Route path="/products" element={<Products />} />
           <Route path="/contact" element={<Contact />} />
           <Route path="/product-category/:name" element={<SingleProductCategory />} />
           <Route path="/product-category/office/:param" element={<OfficeCategory />} />
           <Route path="/product-category/school/:param" element={<SchoolCategory />} />
           <Route path="/product-category/racking/:param" element={<RackingCategory />} />
           <Route path="/product-category/cabinets-and-cupboards/:param" element={<CabinetryCategory />} />
           <Route path="/product-category/shelving/:param" element={<ShelvingCategory />} />
    </Routes>
  )
}

export default App
