import { useState } from "react"
import {sidebarContext} from "./navcontext"
import Header from "./Header";
import Sidebar from "./Sidebar";

const Navbar = () => {
  const [sidebarStatus, setSidebarStatus] = useState(false);
  return (
    <sidebarContext.Provider value={[sidebarStatus, setSidebarStatus]}>
              <Header />
              <Sidebar />
    </sidebarContext.Provider>
  )
}

export default Navbar