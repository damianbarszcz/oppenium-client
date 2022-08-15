import React from 'react';
import styled from 'styled-components';

const FooterSection = styled.section`
  min-width:100%;
  background-color:#ffffff;
  border-top:1px solid #f3f3f3;
  z-index:1;
`
const Container = styled.div`
  max-width:1540px;
  margin:auto;
`
const FooterBlock = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2.5rem 0 2.5rem;
`
const FooterCopyright = styled.div`
  font-family: 'Radio Canada', sans-serif;
  color:#89898E;
`
const FooterBrand = styled.div`
  font-size: 1.5rem;
  font-family: 'Radio Canada', sans-serif;
  color:#89898E;
`

const Footer = () => {

    return (
        <FooterSection>
            <Container>
                <FooterBlock>
                    <FooterCopyright>
                        © 2021 Openium. Design by Damian Barszcz
                    </FooterCopyright>

                    <FooterBrand>
                        Oppenium
                    </FooterBrand>
                </FooterBlock>
            </Container>
        </FooterSection>
    );
}

export default Footer;