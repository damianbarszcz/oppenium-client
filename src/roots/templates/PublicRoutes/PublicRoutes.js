import { Navigate, Outlet } from "react-router";


const useAuth=()=>{
    const user=localStorage.getItem('token')
    
    return user;
}

const PublicRoutes = (props) => {

  const auth = useAuth()

  return auth ? <Navigate to="/member/overview"/> : <Outlet/>
};

export default PublicRoutes;