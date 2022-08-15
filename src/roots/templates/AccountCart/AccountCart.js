import React, { useEffect,useState } from 'react'
import { useParams } from "react-router-dom";
import styled from "styled-components";
import axios from "axios";
import {loadStripe} from '@stripe/stripe-js';
import { Navigation, Footer,AccountMenu,ProductCart } from "../../components";

const stripePromise = loadStripe("pk_test_51LPYVbFtCHoZJI1Yy7d4mCODWOb9Zo2IQ7XDcZ2CNKUzD7GbRuX15MTcbUedOxRivpfcnpgbLclhQfYJMf3ty1fy00viiDeLWs")

const Container = styled.main`
  display: grid;
  padding:6rem 0 6rem;
  grid-template-columns: 0.25fr 1fr;
  grid-column-gap: 5rem;
  max-width:1540px;
  margin:auto;
`

const AccountCart = (props) => {
    const [cart, getCart] = useState([]);

    let { user_id } = useParams(); 

    useEffect(() => {
        let abortController;
        (async () => {
            abortController = new AbortController();
            let signal = abortController.signal;  

            const { data } = await axios({
                method: "GET",
                url: `http://localhost:8080/api/cart/${user_id}/products`}, 
                {signal: signal}
            )
            getCart(data);
        })();
        return () => abortController.abort();
    }, []);

    const makePayment = async (e) => {
        e.preventDefault();
        if(props.user){
            const stripeResp = await fetch(`http://localhost:8080/api/order/${user_id}/make-peyment`)
            const { id: sessionId } = await stripeResp.json()
        
            const stripe = await stripePromise;
            const { error } = await stripe.redirectToCheckout({ sessionId });
            console.log(error)
        }
        
        else{ props.history.push(`/login`) }
    }

    return (
        <>
            <Navigation user = {props.user}  />
            <Container>
                <AccountMenu user = {props.user} userData = {props.userData}  />
                <ProductCart  cart = {cart}  makePayment={makePayment} />
            </Container>
            <Footer/>
        </>
    );
}

export default AccountCart;