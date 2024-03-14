import { Routes, Route } from "react-router-dom"
import './App.css'
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import Products from "./pages/Products"

function App() {
  return (
    <Routes>
           <Route path="/" element={<Home />} />
          <Route path="/about-us" element={<About />} />
           <Route path="/products" element={<Products />} />
           <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
