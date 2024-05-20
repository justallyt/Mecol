import { Routes, Route, useLocation } from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Products from "./pages/Products"
import SingleProductCategory from "./pages/SingleProductCategory"
import { useEffect } from "react"

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
    </Routes>
  )
}

export default App
