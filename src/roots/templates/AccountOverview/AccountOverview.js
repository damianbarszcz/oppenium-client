import React from 'react'
import { Navigation, Footer,AccountMenu,AccountInfo } from "../../components";
import styled from "styled-components";

const Container = styled.main`
  display: grid;
  padding:6rem 0 6rem;
  grid-template-columns: 0.25fr 1fr;
  grid-column-gap: 5rem;
  max-width:1540px;
  margin:auto;
`

const AccountOverview = (props) => {

    return (
        <>
            <Navigation user = {props.user} />
            <Container>
                <AccountMenu  user = {props.user}  />
                <AccountInfo  user = {props.user}  />
            </Container>
            <Footer/>
        </>
    );
}

export default AccountOverview;