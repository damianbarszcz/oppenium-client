import React,{useEffect, useState}  from 'react';
import { useParams, useNavigate } from "react-router-dom";
import {useForm} from 'react-hook-form';
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
  background-color: #76BA99;
  font-family: 'Radio Canada', sans-serif;
  font-size:1.2rem;
  text-align: center;
  color:#ffffff;
`

const SingleProduct = (props) => {
    const [singleProduct, getSingleProduct] = useState([]);
    const {handleSubmit, register,  formState: { errors } } = useForm();
    const [addMsg, getAddMsg] = useState([]);
    const [addMsgStatus, getAddMsgStatus] = useState(false);

    let navigate = useNavigate();

    let { id } = useParams(); 

    useEffect(() => {
        let abortController;

        (async () => {
            abortController = new AbortController();
            let signal = abortController.signal;    

             const { data } = await axios.get(
                `http://localhost:8080/api/product/single/${id}`,
                 { signal: signal }
             );
             getSingleProduct(data);
        })();
        return () => abortController.abort();
    }, []);

    const handleForm = async (data,e) => {
        e.preventDefault();

        if(props.user){
            const productData = new FormData();

            productData.append('product_id', data.product_id);

            axios.post(`http://localhost:8080/api/cart/${props.user.id}/add-cart`, productData)
            .then(response => {
                if (!response.error) {
                    getAddMsg(response.data);
                    getAddMsgStatus(true);
            
                    setTimeout(function(){ getAddMsgStatus(false) }.bind(this),2000);
                }
            })
            .catch(error => { console.log(error.response.data); });
        }
            
        else{ navigate('/login', {state: { success: "To add a product, you must log in first"}}) }
    }

    return (
        <>
            <Navigation user = {props.user} />
            { addMsgStatus  ? <CartMsg>{ addMsg } </CartMsg> : '' }

            <Container>
                <SProductInfo product = {singleProduct} category_header = {singleProduct.category} 
                handleForm={handleForm} handleSubmit = {handleSubmit} register = {register} />

                <SProductMedia product = {singleProduct} />
            </Container>
        </>
    );
}

export default SingleProduct;