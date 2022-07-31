import React, {useState,useEffect}  from 'react'
import { BrowserRouter, Switch, Route, Redirect  } from "react-router-dom";

import {
    Overview,
    Computers,
    ComputerComponents,
    Smartphones,
    Login,
    Register,
    AccountOverview,
    AccountOrders,
    SingleComputer,
    SingleComputerComponent,
    SingleSmartphone,
    AccountOrderSuccess,
    AccountOrderCancel,
} from "./templates";

const App = (props) => {
    const [user, getUser] = useState('');


    useEffect(() => {(
        async () => {
            const response = await fetch('http://localhost:8080/api/user/data', {
                headers: {'Content-Type': 'application/json'},
                credentials: 'include'
            });

            const content = await response.json();

            if(response.ok){  getUser(content);}

            else{  getUser('');  }
        }
       )();
    });

    return (
        <BrowserRouter>
            {user  ?
            <Switch>
                <Route exact path="/" render={(props) => <Overview user = {user} {...props} /> } />
                <Route path="/computers" render={(props) => <Computers user = {user} {...props} /> }  />
                <Route path="/single/computers/:id" render={(props) => <SingleComputer user = {user} {...props} /> }  />
                <Route path="/computer-components" render={(props) => <ComputerComponents user = {user} {...props} /> }  />
                <Route path="/single/computer-components/:id" render={(props) => <SingleComputerComponent user = {user} {...props} /> }  />
                <Route path="/smartphones" render={(props) => <Smartphones user = {user} {...props} /> }  />
                <Route path="/single/smartphones/:id" render={(props) => <SingleSmartphone user = {user} {...props} /> }  />
                <Route path="/member/overview" render={(props) => <AccountOverview user = {user}  {...props} /> }  />
                <Route path="/member/orders/:id" render={(props) => <AccountOrders user = {user}  {...props} /> }  />
                <Route path="/member/order/success" render={(props) => <AccountOrderSuccess user = {user}  {...props} /> }  />
                <Route path="/member/order/cancel" render={(props) => <AccountOrderCancel user = {user}  {...props} /> }  />

                <Redirect to="/member/overview" />
            </Switch>
                :
            <Switch>
                <Route exact path="/" component={ Overview }  />
                <Route path="/computers" component={ Computers } exact />
                <Route path="/single/computers/:id" component={ SingleComputer } exact />
                <Route path="/computer-components" component={ ComputerComponents } exact />
                <Route path="/single/computer-components/:id" component={ SingleComputerComponent } exact />
                <Route path="/smartphones" component={ Smartphones } exact />
                <Route path="/single/smartphones/:id" component={ SingleSmartphone } exact />
                <Route path="/login" component={ Login } exact />
                <Route path="/register" component={ Register } exact />

                <Redirect to="/login" />
            </Switch>
            }
        </BrowserRouter>
    );
}

export default App;
