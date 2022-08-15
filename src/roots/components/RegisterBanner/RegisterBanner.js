import styled from 'styled-components';

const RegisterBannerSection = styled.section`
  position: relative;
  min-height: 100vh;
  background-color:#F6F6F6;
`
const Container = styled.div`
  max-width:1540px;
  margin:auto;
`
const RegisterBannerBlock = styled.div`
  padding: 0rem 5rem;
`
const RegisterBannerInner= styled.div`
  position: absolute;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
`
const RegisterBannerHeader = styled.header`
  margin-bottom:2rem;
  text-align:left;
  font-family: 'Radio Canada', sans-serif;
`
const RegisterBannerHeaderTitle = styled.h1`
  font-size:2.35rem;
  font-weight: 600;
  color:#17183B;
`
const RegisterBannerHeaderCaption = styled.p`
  font-size:1.4rem;
  line-height: 2.5rem;
  font-weight: 400;
  color:#89898E;
`
const RegisterBannerInfo = styled.div``

const RegisterBannerInfoCaption = styled.p`
  margin-left: 2.5rem;
  font-family: 'Radio Canada', sans-serif;
  font-size:1.25rem;
  font-weight: 400;
  color:#89898E;
`
const RegisterBannerInfoArtwork = styled.img`
  max-width: 467px;
  max-height: 424px;
`
const RegisterBannerInfoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom:2rem;
`

const RegisterBanner = () => {

    return (
        <RegisterBannerSection>
            <Container>
                <RegisterBannerBlock>
                    <RegisterBannerInner>
                        <RegisterBannerHeader>
                            <RegisterBannerHeaderTitle>Oppenium</RegisterBannerHeaderTitle>
                            <RegisterBannerHeaderCaption>Your free Oppenium account in only 5 seconds away.</RegisterBannerHeaderCaption>
                        </RegisterBannerHeader>

                        <RegisterBannerInfo>
                            <RegisterBannerInfoWrapper>
                                <RegisterBannerInfoArtwork src="http://localhost:3000/images/register/shop.png" alt="Order faster"/>
                                <RegisterBannerInfoCaption>Order faster</RegisterBannerInfoCaption>
                            </RegisterBannerInfoWrapper>

                            <RegisterBannerInfoWrapper>
                                <RegisterBannerInfoArtwork src="http://localhost:3000/images/register/previous_order.png" alt="Check orders"/>
                                <RegisterBannerInfoCaption>Check previous orders</RegisterBannerInfoCaption>
                            </RegisterBannerInfoWrapper>
                        </RegisterBannerInfo>
                    </RegisterBannerInner>
                </RegisterBannerBlock>
            </Container>
        </RegisterBannerSection>
    );
}

export default RegisterBanner;