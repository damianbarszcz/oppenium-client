import React,{ useState,useEffect }  from 'react';
import {Route, Routes } from "react-router-dom";
import { decodeToken } from "react-jwt";

import {
    Overview,
    Computers,
    ComputerComponents,
    Smartphones,
    Login,
    Register,
    AccountOverview,
    AccountOrders,
    AccountCart,
    SingleProduct,
    AccountOrderCancel,
    AccountOrderSuccess,
    ProtectedRoutes,
    PublicRoutes
} from "./templates";

const App = () => {
    const [user, setUser] = useState('');
    const [userData, setUserData] = useState('');

    async function getUser() {
		const req = await fetch('http://localhost:8080/api/user/account', {
			headers: { 'x-access-token': localStorage.getItem('token')},
            credentials: 'include'
		})
		const data = await req.json()

        console.log(data.UserData);

		if (data) {
			setUser(data)
            setUserData(data.UserData);
            
		} else { alert(data.error) }
	}
    
    useEffect(() => {
        const token = localStorage.getItem('token')

        if(token){
            const user = decodeToken(token)

            if(!user){
                localStorage.removeItem('token')
                window.location.href = '/login'
            }

            else{ getUser() }
        }
    }, []);

    return (
        <Routes>
            <Route exact path="/" element={<Overview user = {user}/> } />
            <Route path="/computers" element={ <Computers user = {user}/> }  />
            <Route exact path="/single/computers/:id" element={<SingleProduct user = {user} /> }  />
            <Route path="/computer-components" element={<ComputerComponents user = {user}/> }  />
            <Route path="/single/computer-components/:id" element={<SingleProduct user = {user}  /> }  />
            <Route path="/smartphones" element={ <Smartphones  user = {user} /> }  />
            <Route path="/single/smartphones/:id" element={<SingleProduct user = {user}  /> }  />

            <Route element={ <PublicRoutes  /> }>
                <Route path="/login" element={ <Login /> } />
                <Route path="/register" element={ <Register /> } />
            </Route>

            <Route element={ <ProtectedRoutes  /> }>
                <Route path="/member/overview" element={ <AccountOverview user = {user} userData = {userData} />}  />
                <Route path="/member/cart/:user_id" element={<AccountCart user = {user} userData = {userData}   />}  />
                <Route path="/member/orders/:user_id" element={<AccountOrders user = {user} userData = {userData}  />}  />
                <Route path="/member/order/success" element={ <AccountOrderSuccess user = {user} userData = {userData} />}  />
                <Route path="/member/order/cancel" element={ <AccountOrderCancel user = {user} userData = {userData} />}  />
            </Route>
        </Routes>
    );
}

export default App;
