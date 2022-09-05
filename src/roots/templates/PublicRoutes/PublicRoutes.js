import { Navigate, Outlet } from "react-router";


const useAuth=()=>{
    const user=localStorage.getItem('token')
    
    if(user){
      return true
    } 
    return false;
}

const PublicRoutes = (props) => {

  const auth = useAuth()

  return auth ? <Navigate to="/member/overview"/> : <Outlet/>
};

export default PublicRoutes;