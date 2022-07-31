import React, { useEffect,useCallback, useState } from 'react'
import { Navigation, Footer,AccountMenu,ProductOrders } from "../../components";
import styled from "styled-components";
import axios from "axios";
import {loadStripe} from '@stripe/stripe-js';
const stripePromise = loadStripe('pk_test_51LPYVbFtCHoZJI1Yy7d4mCODWOb9Zo2IQ7XDcZ2CNKUzD7GbRuX15MTcbUedOxRivpfcnpgbLclhQfYJMf3ty1fy00viiDeLWs')


const Container = styled.main`
  display: grid;
  padding:6rem 0 6rem;
  grid-template-columns: 0.25fr 1fr;
  grid-column-gap: 5rem;
  max-width:1540px;
  margin:auto;
`

const AccountOrders = (props) => {
    const [cart, getCart] = useState([]);

    const getCartAPI = useCallback(async () => {
        const id = props.match.params.id;

        const result = await axios(`http://localhost:8080/api/cart/${id}/products`);

        getCart(result.data);
    }, [])

    const makePayment = async (e) => {
        e.preventDefault();
        if(props.user){
            const stripeResp = await fetch(`http://localhost:8080/api/order/make-peyment/${props.user.id}`)
            const { id: sessionId } = await stripeResp.json()
        
            const stripe = await stripePromise;
            const { error } = await stripe.redirectToCheckout({ sessionId });
            console.log(error)
        }
        
        else{ props.history.push(`/login`) }
    }

    useEffect(() => {
        getCartAPI();

    }, [getCartAPI])

    return (
        <>
            <Navigation user = {props.user}  />
            <Container>
                <AccountMenu user = {props.user}  />
                <ProductOrders  cart = {cart}  makePayment={makePayment} />
            </Container>
            <Footer/>
        </>
    );
}

export default AccountOrders;