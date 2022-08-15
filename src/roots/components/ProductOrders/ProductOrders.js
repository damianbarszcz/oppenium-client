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
  text-align:right;
  font-family: 'Radio Canada', sans-serif;
  color:#17183B;
`
const OrderNoProduct = styled.div`
    display:block;
    margin-top:3.5rem;
`
const OrderNoProductCaption = styled.p`
    font-family: 'Radio Canada', sans-serif;
    font-size:1.25rem;
`
const OrdersSeparateLine = styled.div`
    margin-top:3.5rem;
`
const OrdersPriceTotal = styled.div`
  display: block;
  text-align:right;
`

const OrdersPriceTotalCaption = styled.p`
    font-family: 'Radio Canada', sans-serif;
    font-weight:600;
    font-size:1rem;
    line-height: 2.5rem;
    color:#17183B;
`

const NoDisplay = styled.span`
    display:none;
`

const ProductOrders = (props) => {

    let total = 0;

    const orderPushed = [];

    props.orders.map((currentItem) =>  orderPushed.push(currentItem.order_id));

    const getTotalOrderPrice = (product_price) =>{
        total = total + product_price 
    }

    const yourOrders = () => {
        return (
        props.orders.map((item,index) => (
            (orderPushed[index-1] !=  item.order_id && index > 0 ) ? 
            <>
              <OrdersPriceTotal><OrdersPriceTotalCaption>{ total + ".00 $" } </OrdersPriceTotalCaption> </OrdersPriceTotal>

              <NoDisplay>{total = 0}</NoDisplay>

              <OrdersSeparateLine/>

              <OrderProduct key={item.id}>
                  <OrderProductArtwork src={`/images/products/${item.product_image}`}  alt={ item.product_title }/>

                  <OrderProductInfo>{item.product_title}</OrderProductInfo>

                  <OrderProductPrice>{item.product_price + ".00 $" } </OrderProductPrice>
              </OrderProduct>

              { getTotalOrderPrice(item.product_price) }
            </>
            : 

            <>
              <OrderProduct key={item.id}>
                <OrderProductArtwork src={`/images/products/${item.product_image}`}  alt={ item.product_title }/>

                <OrderProductInfo>{item.product_title}</OrderProductInfo>

                <OrderProductPrice>{item.product_price + ".00 $" }</OrderProductPrice>
              </OrderProduct>

              { getTotalOrderPrice(item.product_price) }

              {props.orders.length - 1 === index ? 
                <OrdersPriceTotal><OrdersPriceTotalCaption>{ total + ".00 $" } </OrdersPriceTotalCaption> </OrdersPriceTotal>
                : ''
              }
            </>
          ) )
      )
    }

    return (
        <OrderBlock>
            <OrdersHeader>
                <OrdersHeaderTitle>Your Orders </OrdersHeaderTitle>
            </OrdersHeader>

            { props.orders.length > 0 ?
              <OrdersInner> 
                  { yourOrders() }
              </OrdersInner> 
              :

              <OrderNoProduct>
                <OrderNoProductCaption>You have not made any orders yet.</OrderNoProductCaption>
              </OrderNoProduct>
            }
        </OrderBlock>
    );
}

export default ProductOrders;