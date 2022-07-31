import React,{useCallback, useEffect, useState}  from 'react';
import {Navigation, SProductInfo, SProductMedia} from "../../components";
import styled from "styled-components";
import axios from "axios";

const Container = styled.main`
  display: grid;
  padding:10rem 0 10rem;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 15rem;
  max-width:1540px;
  margin:auto;
`
const CartMsg = styled.div`
  padding: 1.5rem 0 1.5rem;
  min-width: 100%;
  background-color:#21bf73;
  font-family: 'Radio Canada', sans-serif;
  font-size:1.2rem;
  text-align: center;
  color:#ffffff;
`

const SingleSmartphone = (props) => {
    const [smartphoneProduct, getSmartphoneProduct] = useState([]);
    const [cartProductId, getCartProductId] = useState('');
    const [addMsg, getAddMsg] = useState([]);
    const [addMsgStatus, getAddMsgStatus] = useState(false);

    const getSmartphoneProductAPI = useCallback(async () => {
        const id = props.match.params.id;

        const result = await axios(`http://localhost:8080/api/product/single/${id}`);

        getSmartphoneProduct(result.data);

        getCartProductId(result.data.id);
    }, [])

    useEffect(() => {
        getSmartphoneProductAPI();
    }, [getSmartphoneProductAPI])

    const addToCart = (e) => {
        e.preventDefault();

        console.log(cartProductId);

        if(props.user){
            axios.post(`http://localhost:8080/api/cart/${props.user.id}/add-cart/${cartProductId}`,  {
                id: cartProductId
            })
            .then(response => {
                if (!response.error) {
                    getAddMsg(response.data);
                    getAddMsgStatus(true);
                }
            })
            .catch(error => { console.log(error.response.data); });
        }

        else{ props.history.push(`/login`) }
    }

    return (
        <>
            <Navigation user = {props.user} />
            { addMsgStatus  ? <CartMsg>Product {smartphoneProduct.product_title} has been added to the cart.</CartMsg> : '' }
            <Container>
                <SProductInfo product = {smartphoneProduct} category_header = "Smartphones" addToCart={ addToCart }
                getCartProductId={getCartProductId}  cartProductId={cartProductId}/>
                <SProductMedia product = {smartphoneProduct} />
            </Container>
        </>
    );
}

export default SingleSmartphone;