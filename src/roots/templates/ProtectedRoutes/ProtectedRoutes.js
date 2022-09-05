import { Navigate, Outlet } from "react-router";


const useAuth=()=>{
    const user=localStorage.getItem('token')
    
    if(user){
      return true
    } 
    return false;
}

const ProtectedRoutes = (props) => {

  const auth = useAuth()

  return  auth ? <Outlet/> : <Navigate to="/login" />;
};

export default ProtectedRoutes;