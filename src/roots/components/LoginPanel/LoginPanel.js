import styled, { css }  from 'styled-components';

const LoginPanelSection = styled.section`
  position: relative;
  min-height: 100vh;
  background-color:#FFFFFF;
`
const Container = styled.div`
  max-width:1540px;
  margin:auto;
`
const LoginPanelBlock = styled.div`
  padding: 0rem 5rem;
`
const LoginPanelInner = styled.div`
  position: absolute;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
`
const LoginPanelHeader = styled.header`
  font-family: 'Radio Canada', sans-serif;
`
const LoginPanelHeaderTitle = styled.h1`
  font-size:2.35rem;
  font-weight: 600;
  color:#17183B;
`
const LoginPanelHeaderCaption = styled.p`
  font-size:1rem;
  font-weight: 400;
  text-transform: uppercase;
  color:#89898E;
`
const LoginPanelForm = styled.form`
  margin-top:2.5rem;
  min-width:415px;
  width:100%;
`
const FormLabel = styled.label`
  display: block;
  padding: 1rem 0 1rem;
  font-family: 'Radio Canada', sans-serif;
  color:#17183B;
`
const FormInput = styled.input`
  margin-bottom: 1rem;
  box-sizing: border-box;
  padding: 1rem 2rem;
  min-width: 100%;
  border:1px solid #CFCFCF;
  font-family: 'Radio Canada', sans-serif;
  font-size: 1rem;
  color:#17183B;

  &:focus { outline: none; }
`
const FormSubmit = styled.button`
  margin-top:2rem;
  padding: 1rem 2rem;
  min-width: 100%;
  min-height: 54px;
  text-transform: uppercase;
  font-family: 'Radio Canada', sans-serif;
  background-color:#5D5FEF;
  transition: 0.25s ease-in-out;
  border:0;
  cursor: pointer;
  color:#FFFFFF;
  font-weight: 600;

  &:hover { background-color: #4E50C8; }
`
const LoginPanelRegister = styled.div`
  padding: 1.5rem 2rem;
  text-align: center;
`
const LoginPanelRegisterCaption = styled.p`
  font-family: 'Radio Canada', sans-serif;
  color:#17183B;
`
const LoginPanelRegisterCaptionLink = styled.a`
  text-decoration: none;
  color:#5D5FEF;
`
const LoginPanelFormGroup  = styled.div`
  margin-bottom:1rem;
  width:100%;
  
  &:last-child{
    margin-bottom:0rem;
  }
`
const LoginPanelFormError  = styled.span`
  display: block;
  position: absolute;
  font-family: 'Radio Canada', sans-serif;
  font-size:0.85rem;
  color:#e33958;
`
const LoginPanelFormErrorBox = styled.div`
  position: relative;
  min-height: 2rem;
  transform:translateY(-0.75rem);
`
const LoginPanelFormSuccess  = styled.span`
  display: block;
  padding-left:1rem;
  position: absolute;
  font-family: 'Radio Canada', sans-serif;
  line-height:2.9rem;
  font-size:0.85rem;
  color:#ffffff;
`
const LoginPanelFormSuccessBox = styled.div`
  position: relative;
  min-height: 3rem;
  transform:translateY(-0.75rem);
  background-color: #76BA99;
`
const LoginPanelOAuth = styled.div`
  margin-top:2rem;
  min-width:100%;
`
const LoginPanelOAuthBtn = styled.a`
  display:block;
  padding:0.75rem 0.5rem;
  margin-bottom:1rem;
  min-width:100%;
  font-family: 'Radio Canada', sans-serif;
  font-weight:600;
  font-size:0.9rem;
  text-align:center;
  text-transform:uppercase;
  cursor:pointer;


  ${props => props.google && css`
      border: 2px solid #db4a39;
      color:#db4a39;

      &:hover{ color:#db4a39; }
  `}

  ${props => props.facebook && css`
      border: 2px solid #4267B2;
      color:#4267B2;

      &:hover{ color:#4267B2; }
  `}

  ${props => props.github && css`
      border: 2px solid #333;
      color:#333;

      &:hover{ color:#333;  }
  `}
`

const LoginPanel = (props) => {

    return (
        <LoginPanelSection>
            <Container>
                <LoginPanelBlock>
                    <LoginPanelInner>
                        <LoginPanelHeader>
                            <LoginPanelHeaderCaption>Start for free</LoginPanelHeaderCaption>
                            <LoginPanelHeaderTitle>Sign in</LoginPanelHeaderTitle>
                        </LoginPanelHeader>

                        <LoginPanelForm onSubmit={ props.handleSubmit(props.handleForm ) }>
                            { props.login_errors ?
                                <LoginPanelFormErrorBox>
                                    <LoginPanelFormError>{props.login_errors}</LoginPanelFormError>
                                </LoginPanelFormErrorBox> 
                                : '' 
                            }

                            { props.successMsg ?
                                <LoginPanelFormSuccessBox>
                                    <LoginPanelFormSuccess>{props.successMsg}</LoginPanelFormSuccess>
                                </LoginPanelFormSuccessBox> : '' 
                            }

                            <LoginPanelFormGroup>
                                <FormLabel>Email address:</FormLabel>

                                <FormInput name="email" type="email" {...props.register("email", { required: true })} tabIndex="1" />

                                {props.errors.email && <LoginPanelFormError>Enter your e-mail address.</LoginPanelFormError> }
                            </LoginPanelFormGroup>

                            <LoginPanelFormGroup>
                                <FormLabel>Password:</FormLabel>

                                <FormInput name="password" type="password" {...props.register("password", { required: true })} tabIndex="2"/>

                                {props.errors.password && <LoginPanelFormError>Enter the password.</LoginPanelFormError> }
                            </LoginPanelFormGroup>

                            <LoginPanelFormGroup>
                                <FormSubmit type="submit" tabIndex="3">Login</FormSubmit>
                            </LoginPanelFormGroup>
                        </LoginPanelForm>

                        <LoginPanelOAuth>
                            <LoginPanelOAuthBtn href="./" target="_self" google>Login with Google</LoginPanelOAuthBtn>
                            <LoginPanelOAuthBtn href="./" target="_self" facebook>Login with Facebook</LoginPanelOAuthBtn>
                            <LoginPanelOAuthBtn href="./" target="_self" github>Login with Github</LoginPanelOAuthBtn>
                        </LoginPanelOAuth>

                        <LoginPanelRegister>
                            <LoginPanelRegisterCaption>I don’t have an account ?
                                <LoginPanelRegisterCaptionLink href="/register" target="_self"> Sign up</LoginPanelRegisterCaptionLink>
                            </LoginPanelRegisterCaption>
                        </LoginPanelRegister>
                    </LoginPanelInner>
                </LoginPanelBlock>
            </Container>
        </LoginPanelSection>
    );
}

export default LoginPanel;