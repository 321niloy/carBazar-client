import { Outlet } from "react-router-dom"
import DashNav from "../../Component/dashNav/DashNav";




 const Dashboard = () =>{
   return(
    <div className="lg:flex md:flex">
        <div className="w-[20%] ">
        <DashNav></DashNav>
        </div>
      
        <div className=" p-10 w-[80%]">
        <Outlet></Outlet>
        </div>
        
    </div>
   )
}
export default Dashboard;