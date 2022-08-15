import React, {useState,useEffect}  from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import {useForm} from 'react-hook-form';
import styled from "styled-components";
import axios from 'axios';

import { LoginPanel, LoginBanner } from "../../components";

const LoginWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
`

const Login = (props) => {
    const {handleSubmit, register,  formState: { errors } } = useForm();
    const [login_errors, get_login_errors ] = useState('');
    const [successMsg, getSuccessMsg] = useState('');

    let navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        if(location.state){
            getSuccessMsg(location.state.success);
        }
     }, [location]);


     const handleForm = async (data,e) => {
        e.preventDefault();

        const loginData = new FormData();

        loginData.append('email', data.email);
        loginData.append('password', data.password);

        await axios.post(`http://localhost:8080/api/user/login`, loginData, {withCredentials: 'include'})
        .then(response => {
            if (!response.error) {
                    if(!window.location.reload()){
                        localStorage.setItem('token', response.data)
                        navigate(`/member/overview`)
                        e.target.reset();
                    }
                }
            }
        )

        .catch(error => {
            get_login_errors(error?.response.data);
            e.target.reset();
        } );
    }

    return (
        <LoginWrapper>
            <LoginBanner />
            <LoginPanel handleForm={handleForm} handleSubmit = {handleSubmit} register = {register} errors = {errors} login_errors={login_errors} successMsg={successMsg} />
        </LoginWrapper>
    );
}

export default Login;