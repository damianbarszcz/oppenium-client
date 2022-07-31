import styled from 'styled-components';

const RegisterPanelSection = styled.section`
  position: relative;
  min-height: 100vh;
  background-color:#FFFFFF;
`
const Container = styled.div`
  max-width:1540px;
  margin:auto;
`
const RegisterPanelBlock = styled.div`
  padding: 0rem 5rem;
`
const RegisterPanelInner = styled.div`
  position: absolute;
  left:50%;
  top:50%;
  transform: translate(-50%,-50%);
`
const RegisterPanelHeader = styled.header`
  font-family: 'Radio Canada', sans-serif;
`
const RegisterPanelHeaderTitle = styled.h1`
  font-size:2.35rem;
  font-weight: 600;
  color:#17183B;
`
const Form = styled.form`
  margin-top:2.5rem;
  min-width:285px;
  width:100%;
`
const FormInner = styled.div`
  display:grid;
  grid-template-columns: 1fr 1fr;
  grid-column-gap: 1.5rem;
`

const FormInnerName = styled.div`
  display:block;
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
const RegisterPanelLogin = styled.div`
  padding: 1.5rem 2rem;
  text-align: center;
`
const RegisterPanelLoginCaption = styled.p`
  font-family: 'Radio Canada', sans-serif;
  color:#17183B;
`
const RegisterPanelLoginCaptionLink = styled.a`
  text-decoration: none;
  color:#5D5FEF;
`
const RegisterPanelFormError  = styled.span`
  display: block;
  position: absolute;
  font-family: 'Radio Canada', sans-serif;
  font-size:0.85rem;
  color:#e33958;
`
const RegisterPanelFormGroup  = styled.div`
  margin-bottom:1.5rem;
  width:100%;
  
  &:last-child{
    margin-bottom:0rem;
  }
`
const RegisterPanelFormErrorBox = styled.div`
  position: relative;
  min-height: 2rem;
  transform:translateY(-0.75rem);
`

const RegisterPanel = (props) => {

    return (
        <RegisterPanelSection>
            <Container>
                <RegisterPanelBlock>
                    <RegisterPanelInner>
                        <RegisterPanelHeader>
                            <RegisterPanelHeaderTitle>Create new account</RegisterPanelHeaderTitle>
                        </RegisterPanelHeader>

                        <Form onSubmit={ props.handleSubmit(props.handleForm )}>
                            { props.register_errors ?
                                <RegisterPanelFormErrorBox>
                                    <RegisterPanelFormError>{props.register_errors}</RegisterPanelFormError>
                                </RegisterPanelFormErrorBox> : '' }

                            <RegisterPanelFormGroup>
                                <FormInner>
                                    <FormInnerName>
                                        <FormLabel>Name:</FormLabel>

                                        <FormInput name="first_name" type="text" {...props.register("first_name", { required: true })} tabIndex="1" />

                                        {props.errors.first_name && <RegisterPanelFormError>Enter your first name.</RegisterPanelFormError> }
                                    </FormInnerName>

                                    <FormInnerName>
                                        <FormLabel>Last name:</FormLabel>

                                        <FormInput name="last_name" type="text" {...props.register("last_name", { required: true })} tabIndex="2" />

                                        {props.errors.last_name && <RegisterPanelFormError>Enter your last name.</RegisterPanelFormError> }
                                    </FormInnerName>
                                </FormInner>
                            </RegisterPanelFormGroup>

                            <RegisterPanelFormGroup>
                                <FormLabel>Email address:</FormLabel>

                                <FormInput id="email" name="email" type="email" {...props.register("email", { required: true })} tabIndex="3" />

                                {props.errors.email && <RegisterPanelFormError>Enter your e-mail address.</RegisterPanelFormError> }
                            </RegisterPanelFormGroup>

                            <RegisterPanelFormGroup>
                                <FormLabel>Phone number:</FormLabel>

                                <FormInput id="phone_number" name="phone_number" type="text" {...props.register("phone_number", { required: true })} tabIndex="4" />

                                {props.errors.phone_number && <RegisterPanelFormError>Enter your phone number.</RegisterPanelFormError> }
                            </RegisterPanelFormGroup>


                            <RegisterPanelFormGroup>
                                <FormLabel>Password:</FormLabel>

                                <FormInput id="password" name="password" type="password" {...props.register("password", { required: true })} tabIndex="5"/>

                                {props.errors.password && <RegisterPanelFormError>Enter password</RegisterPanelFormError> }
                            </RegisterPanelFormGroup>

                            <RegisterPanelFormGroup>
                                <FormSubmit type="submit" tabIndex="6">Create account</FormSubmit>
                            </RegisterPanelFormGroup>
                        </Form>

                        <RegisterPanelLogin>
                            <RegisterPanelLoginCaption>Already have an account ?
                                <RegisterPanelLoginCaptionLink href="/login" target="_self"> Sign in</RegisterPanelLoginCaptionLink>
                            </RegisterPanelLoginCaption>
                        </RegisterPanelLogin>
                    </RegisterPanelInner>
                </RegisterPanelBlock>
            </Container>
        </RegisterPanelSection>
    );
}

export default RegisterPanel;