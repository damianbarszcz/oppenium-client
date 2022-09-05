import React from 'react';
import styled from 'styled-components';

const OrderBlock = styled.div`
  padding: 1rem 2rem;
  max-width: 960px;
  z-index:1;
`
const OrdersHeader = styled.header`
  display: inline-block;
`
const OrdersInner = styled.div`
  margin-top:1.5rem;
  width:100%;
`
const OrdersHeaderTitle = styled.h1`
  font-family: 'Radio Canada', sans-serif;
  color:#17183B;
`
const OrdersInnerCounter = styled.span`
  display: block;
  padding-bottom: 2rem;
  margin-bottom:1rem;
  border-bottom: 1px solid #f3f3f3;
  width:100%;
  font-family: 'Radio Canada', sans-serif;
  font-size: 1.2rem;
  color:#17183B;
`
const OrderProduct = styled.div`
  display: grid;
  grid-template-columns: 0.25fr 1fr 0.15fr;
  align-items: center;
  padding: 0.5rem 0;
  width:100%;
  border-bottom: 1px solid #f3f3f3;
`
const OrderProductArtwork  = styled.img`
  display: inline-block;
  width:100px;
  height: auto;
`
const OrderProductInfo = styled.div`
  display: inline-block;
  width:100%;
  font-family: 'Radio Canada', sans-serif;
  color:#17183B;
`
const OrderProductPrice = styled.div`
  display: inline-block;
  width:100%;
  font-family: 'Radio Canada', sans-serif;
  color:#17183B;
`
const OrderDetails = styled.div`
  display: block;
  text-align:right;
  width:100%;
  font-family: 'Radio Canada', sans-serif;
  font-size:1.25rem;
  line-height: 2.5rem;
  color:#17183B;
`

const OrderActionsBtn = styled.button`
  display: block;
  padding: 1rem 2.5rem;
  text-transform: uppercase;
  transition: 0.1s ease-in-out;
  font-family: 'Radio Canada', sans-serif;
  background-color:#17183B;
  transition: 0.25s ease-in-out;
  text-decoration: none;
  border:0;
  cursor: pointer;
  color:#FFFFFF;
  font-weight: 600;
  font-size:1rem;

  &:hover{
    background-color:#0096FF;
  }

`
const OrderNoProduct = styled.div`
    display:block;
    margin-top:3.5rem;
`
const OrderNoProductCaption = styled.p`
    font-family: 'Radio Canada', sans-serif;
    font-size:1.25rem;
`
const OrdersInnerFlex = styled.div`
    display:flex;
    margin-top:3.5rem;
    width:100%;
    justify-content: space-between;
    align-items:center;
`

const ProductCart = (props) => {

  const total = (props.cart.reduce((total,currentItem) =>  total + currentItem.product_price , 0 ));

    return (
        <OrderBlock>
            <OrdersHeader>
                <OrdersHeaderTitle>Your Cart </OrdersHeaderTitle>
            </OrdersHeader>

            { props.cart.length > 0 ?
              <>
              <OrdersInner>
                  <OrdersInnerCounter>Number of products : {props.cart.length } </OrdersInnerCounter>
                  
                  { props.cart.map(item =>
                      <OrderProduct key={item.id}>
                        <OrderProductArtwork src={`/images/products/${item.product_image}`}  alt={ item.product_title }/>

                        <OrderProductInfo>{item.product_title}</OrderProductInfo>

                        <OrderProductPrice>{item.product_price + ".00 $" }</OrderProductPrice>
                    </OrderProduct>
                  )}
              </OrdersInner>

              <OrdersInnerFlex>
                  <div>
                      <OrderActionsBtn type="button" onClick={props.makePayment}>Pay</OrderActionsBtn>
                  </div>

                  <OrderDetails>Total: <br/> <strong>{ total + ".00 $" } </strong></OrderDetails>
              </OrdersInnerFlex>
              </>
              :

              <OrderNoProduct>
                <OrderNoProductCaption>No products added to the cart.</OrderNoProductCaption>
              </OrderNoProduct>
            }
        </OrderBlock>
    );
}

export default ProductCart;