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

const AccountOrderCancel = (props) => {
    return (
        <>
            <Navigation user = {props.user}  />
            <Container>
                <AccountMenu user = {props.user}  />
                <AccountOrderMsg msgTitle="Error..."  msgCaption="We have problem with your payment. You must return and try to pay again." />
            </Container>
            <Footer/>
        </>
    );
}

export default AccountOrderCancel;