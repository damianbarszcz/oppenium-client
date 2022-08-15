import React, {useState}  from 'react';
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import axios from 'axios';
import {useForm} from "react-hook-form";

import { RegisterPanel, RegisterBanner } from "../../components";

const RegisterWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
`

const Register = () => {
    const {handleSubmit, register,  formState: { errors } } = useForm();
    const [register_errors, get_register_errors ] = useState([]);
    let navigate = useNavigate();

    const handleForm = (data,e) => {
        e.preventDefault();

        const registerData = new FormData();

        registerData.append('first_name', data.first_name);
        registerData.append('last_name', data.last_name);
        registerData.append('email', data.email);
        registerData.append('phone_number', data.phone_number);
        registerData.append('password', data.password);

        axios.post('http://localhost:8080/api/user/register', registerData)
        .then(response => {
            if (!response.error) {
                navigate('/login', {state: { success: response.data}}) 
                e.target.reset();
            }
        })
        .catch(error => {
            get_register_errors(error.response.data)
            console.log(error.response.data);
            e.target.reset();
        });
    }

    return (
        <RegisterWrapper>
            <RegisterBanner />
            <RegisterPanel handleForm={handleForm} handleSubmit = {handleSubmit} register = {register} errors ={errors} register_errors={register_errors} />
        </RegisterWrapper>
    );
}

export default Register;