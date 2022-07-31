import styled from 'styled-components';

const LoginBannerSection = styled.section`
  position: relative;
  min-height: 100vh;
  background-color:#F6F6F6;
`
const Container = styled.div`
  max-width:1540px;
  margin:auto;
`
const LoginBannerBlock = styled.div`
  padding: 0rem 5rem;
`
const LoginBannerInner = styled.div`
  position: absolute;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
`
const LoginBannerHeader = styled.header`
  text-align:center;
  font-family: 'Radio Canada', sans-serif;
`
const LoginBannerHeaderTitle = styled.h1`
  font-size:2.35rem;
  font-weight: 600;
  color:#17183B;
`
const LoginBannerHeaderCaption = styled.p`
  font-size:1.25rem;
  font-weight: 400;
  color:#89898E;
`
const LoginBannerArtwork = styled.div`
  margin-top:7.5rem;
  text-align: center;
`
const LoginBannerArtworkImg = styled.img`
  max-width: 467px;
  max-height: 424px;
`

const LoginBanner = () => {

    return (
        <LoginBannerSection>
            <Container>
                <LoginBannerBlock>
                    <LoginBannerInner>
                        <LoginBannerHeader>
                            <LoginBannerHeaderTitle>Oppenium</LoginBannerHeaderTitle>
                            <LoginBannerHeaderCaption>Join to shopping universum</LoginBannerHeaderCaption>
                        </LoginBannerHeader>

                        <LoginBannerArtwork>
                            <LoginBannerArtworkImg src="./images/login/join_oppenium.png" alt="Shopping person" />
                        </LoginBannerArtwork>
                    </LoginBannerInner>
                </LoginBannerBlock>
            </Container>
        </LoginBannerSection>
    );
}

export default LoginBanner;