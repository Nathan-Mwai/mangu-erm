import { Outlet } from "react-router-dom"
import Navbar from "../components/Navbar"

const MainLayout = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64">
        <Navbar />
        {/* The outlet from react router dom allows all pages that have been written in the router in the main.jsx to be seen. The Navbar will appear first then from there he rest of the pages will appear */}
        <Outlet/>
    </div>
  )
}

export default MainLayout