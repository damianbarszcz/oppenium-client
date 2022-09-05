import React from 'react'
import styled from 'styled-components';
import {Link} from "react-router-dom";

const MenuBlock = styled.div`
  padding: 1rem 2rem 1rem 0rem;
  height: 100vh;
  max-height: 700px;
  border-right:1px solid #f3f3f3;
  z-index:1;
`
const MenuUser = styled.div``

const MenuUserTitle = styled.h1`
  font-family: 'Radio Canada', sans-serif;
  font-size: 1.5rem;
  line-height: 2.75rem;
  font-weight: 400;
  color:#17183B;
`
const FunctionsList = styled.ul`
  padding:0;
  margin-top:3.5rem;
  list-style: none;
`
const FunctionItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom:3rem;
`
const FunctionItemLink = styled(Link)`
  display: inline-block;
  transition: 0.1s ease-in-out;
  text-decoration: none;
  font-family: 'Radio Canada', sans-serif;
  font-size: 1.1rem;
  line-height: 1rem;
  color:#17183B;

  &:hover{
    color:#0096FF;
  }
`
const FunctionItemIcon = styled.img`
  display: block;
  padding-right: 2rem;
  width:64px;
  height: 32px;
`
const AccountMenu = (props) => {

    return (
        <MenuBlock>
            <MenuUser>
                <MenuUserTitle>Hello, <br /> <strong> {props.userData.first_name} {props.userData.last_name} </strong></MenuUserTitle>
            </MenuUser>

            <FunctionsList>
                <FunctionItem>
                    <FunctionItemIcon src="http://localhost:3000/images/member/home.png" alt="Overview" /><FunctionItemLink to="/member/overview/" target="_self">Overview</FunctionItemLink>
                </FunctionItem>

                <FunctionItem>
                    <FunctionItemIcon src="http://localhost:3000/images/member/shopping-cart.png" alt="Cart"/><FunctionItemLink to={`/member/cart/${props.user.id}`} target="_self">Your cart</FunctionItemLink>
                </FunctionItem>

                <FunctionItem>
                    <FunctionItemIcon src="http://localhost:3000/images/member/order-success.png" alt="Orders"/><FunctionItemLink to={`/member/orders/${props.user.id}`} target="_self">Your orders</FunctionItemLink>
                </FunctionItem>
            </FunctionsList>
        </MenuBlock>
    );
}

export default AccountMenu;