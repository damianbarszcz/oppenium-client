import React from 'react';
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
  list-style-type: none;
`
const FunctionItem = styled.li`
  display: flex;
  align-items: center;
  margin-bottom:3rem;
  
`
const FunctionItemLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  font-family: 'Radio Canada', sans-serif;
  font-size: 1.1rem;
  line-height: 1rem;
  color:#17183B;
`

const AccountMenu = (props) => {

    return (
        <MenuBlock>
            <MenuUser>
                <MenuUserTitle>Hello, <br /> <strong> {props.user.UserData.first_name} {props.user.UserData.last_name}  </strong></MenuUserTitle>
            </MenuUser>

            <FunctionsList>
                <FunctionItem>
                    <FunctionItemLink to="/member/overview" target="_self">Overview</FunctionItemLink>
                </FunctionItem>

                <FunctionItem>
                    <FunctionItemLink to={`/member/orders/${props.user.id}`} target="_self">Your orders</FunctionItemLink>
                </FunctionItem>
            </FunctionsList>
        </MenuBlock>
    );
}

export default AccountMenu;