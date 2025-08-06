import { Route, Routes } from "react-router-dom"
import { routeList } from "../components"
import { Navbar, Sitebar } from "../modules"

const DashboardRoutes = () => {
  return (
    <div className="containers flex justify-between ">

      <Navbar />

      <div className="w-[910px] h-[100vh]  overflow-y-auto border-x-[1px] border-[#D8D8D8]">


        <Routes>


          {routeList.map(item => <Route key={item.id} path={item.path} element={item.element} />)}
        </Routes>
      </div>
      <Sitebar />

    </div>
  )
}

export default DashboardRoutes