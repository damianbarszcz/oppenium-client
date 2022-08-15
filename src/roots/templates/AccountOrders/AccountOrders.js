import React, { useEffect, useState } from 'react'
import { Navigation, Footer,AccountMenu,ProductOrders } from "../../components";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";


const Container = styled.main`
  display: grid;
  padding:6rem 0 6rem;
  grid-template-columns: 0.25fr 1fr;
  grid-column-gap: 5rem;
  max-width:1540px;
  margin:auto;
`

const AccountOrders = (props) => {
    const [orders, getOrders] = useState([]);

    let { user_id } = useParams(); 

    useEffect(() => {
        let abortController;
        (async () => {
            abortController = new AbortController();
            let signal = abortController.signal;    

            const { data } = await axios({
                method: "GET",
                url: `http://localhost:8080/api/order/${user_id}/products`}, 
                {signal: signal}
            )
            getOrders(data);
        })();
        return () => abortController.abort();
    }, []);

    return (
        <>
            <Navigation user = {props.user}  />
            <Container>
                <AccountMenu user = {props.user} userData = {props.userData}  />
                <ProductOrders  orders = {orders} />
            </Container>
            <Footer/>
        </>
    );
}

export default AccountOrders;