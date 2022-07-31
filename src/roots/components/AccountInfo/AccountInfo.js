import React from 'react';
import styled from 'styled-components';

const InfoBlock = styled.div`
  padding: 1rem 2rem 10rem 0rem;
  height: 100vh;
  max-height: 700px;
  border-right:1px solid #f3f3f3;
  z-index:1;
`
const InfoHeader = styled.header`
  display: inline-block;
`
const InfoHeaderTitle = styled.h1`
  font-family: 'Radio Canada', sans-serif;
  color:#17183B;
`
const InfoUser = styled.div`
  max-width:45rem;
`
const InfoUserHeader = styled.header`
  max-width:45rem;
  margin-top:3.5rem;
  margin-bottom:2rem;
`
const InfoUserHeaderTitle = styled.h2`
  font-family: 'Radio Canada', sans-serif;
  font-weight: 400;
  color:#17183B;
`
const InfoUserLabel = styled.div`
  line-height: 35px;
  font-family: 'Radio Canada', sans-serif;
  font-size: 1rem;
  font-weight: 400;
  color:#17183B;
`
const InfoUserData = styled.div`
  display: inline-block;
  margin-top:1rem;
  padding: 1.25rem 1.5rem;
  max-width:45rem;
  width: 20rem;
  margin-bottom:2.5rem;
  border:1px solid #f3f3f3;
  font-family: 'Radio Canada', sans-serif;
  font-size: 1rem;
`

const AccountInfo = (props) => {

    return (
        <InfoBlock>
            <InfoHeader>
                <InfoHeaderTitle>Overview</InfoHeaderTitle>
            </InfoHeader>

            <InfoUser>
                <InfoUserHeader>
                    <InfoUserHeaderTitle>Account information</InfoUserHeaderTitle>
                </InfoUserHeader>

                <InfoUserLabel><strong>Your name:</strong></InfoUserLabel>
                <InfoUserData>{props.user.UserData.first_name} {props.user.UserData.last_name} </InfoUserData>

                <InfoUserLabel><strong> Email address: </strong></InfoUserLabel>
                <InfoUserData> {props.user.email}  </InfoUserData>

                <InfoUserLabel><strong> Phone number: </strong></InfoUserLabel>
                <InfoUserData> {props.user.UserData.phone_number} </InfoUserData>
            </InfoUser>
        </InfoBlock>
    );
}

export default AccountInfo;