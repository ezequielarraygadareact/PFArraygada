import { Outlet, Navigate } from "react-router-dom"

let userRol = "admin"




const ProtectedRoutes = () => {
  return (
    <div>
      {
        userRol !== "admin" ? <Navigate to={"/"} /> :         <Outlet/>
      }
    </div> 
  )
}

export default ProtectedRoutes