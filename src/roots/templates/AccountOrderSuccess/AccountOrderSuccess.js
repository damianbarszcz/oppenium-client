import React from 'react'
import { Navigation, Footer, AccountMenu, AccountOrderMsg } from "../../components";
import styled from "styled-components";

const Container = styled.main`
  display: grid;
  padding:6rem 0 6rem;
  grid-template-columns: 0.25fr 1fr;
  grid-column-gap: 5rem;
  max-width:1540px;
  margin:auto;
`

const AccountOrderSuccess = (props) => {
    return (
        <>
            <Navigation user = {props.user}  />
            <Container>
                <AccountMenu user = {props.user} userData = {props.userData}  />
                <AccountOrderMsg msgTitle="Payment Successful"  msgCaption="Your payment was successful. You can now return to Oppenium dashboard." />
            </Container>
            <Footer/>
        </>
    );
}

export default AccountOrderSuccess;