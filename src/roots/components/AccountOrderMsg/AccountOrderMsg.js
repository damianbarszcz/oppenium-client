import React  from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const OrderMsgBlock = styled.div`
    padding: 1rem 2rem;
    max-width: 960px;
    z-index:1;
`

const OrderMsgInner = styled.div`
    margin: 3.5rem auto 0rem;
    padding: 3.5rem;
    max-width: 660px;
    border: 1px solid #f3f3f3;
`

const OrderMsgHeader = styled.header`
    text-align:center;
    font-family: 'Radio Canada', sans-serif;
`

const OrderMsgActions = styled.div`
    margin-top: 3.5rem;
    text-align:center;
`

const OrderMsgActionsBtn = styled(Link)`
  display: inline-block;
  padding: 1.5rem 2.5rem;
  text-transform: uppercase;
  font-family: 'Radio Canada', sans-serif;
  transition: 0.1s ease-in-out;
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
const OrderMsgHeaderTitle = styled.h1`
    line-height:5.5rem;
`

const OrderMsgHeaderCaption = styled.p`
    margin: 0 5rem;
    line-height: 2.5rem;
    font-size:1.25rem;
`

const AccountOrderMsg = (props) => {

    return (
        <OrderMsgBlock>
            <OrderMsgInner>
                <OrderMsgHeader>
                    <OrderMsgHeaderTitle>{ props.msgTitle }</OrderMsgHeaderTitle>

                    <OrderMsgHeaderCaption>{ props.msgCaption }</OrderMsgHeaderCaption>
                </OrderMsgHeader>

                <OrderMsgActions>
                    <OrderMsgActionsBtn type="button" to="/member/overview">Return to dashboard</OrderMsgActionsBtn>
                </OrderMsgActions>
            </OrderMsgInner>
        </OrderMsgBlock>
    );
}

export default AccountOrderMsg;