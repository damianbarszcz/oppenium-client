import React, {useState}  from 'react';
import styled from "styled-components";
import axios from 'axios';

import { RegisterPanel, RegisterBanner } from "../../components";
import {useForm} from "react-hook-form";

const RegisterWrapper = styled.main`
  display: grid;
  grid-template-columns: 1fr 1fr;
  height: 100vh;
`

const Register = (props) => {
    const {handleSubmit, register,  formState: { errors } } = useForm();
    const [register_errors, get_register_errors ] = useState([]);

    const handleForm =  async (data,e) => {
        e.preventDefault();

        const registerData = new FormData();

        registerData.append('first_name', data.first_name);
        registerData.append('last_name', data.last_name);
        registerData.append('email', data.email);
        registerData.append('phone_number', data.phone_number);
        registerData.append('password', data.password);

        await axios.post(`http://localhost:8080/api/user/register`, registerData)
        .then(response => {
            if (!response.error) {
                if(!window.location.reload()){
                    props.history.push(`/login`)
                    e.target.reset();
                }
            }
        })
        .catch(error => {
            get_register_errors(error?.response.data);
            e.target.reset();
        } );
    }

    return (
        <RegisterWrapper>
            <RegisterBanner />
            <RegisterPanel handleForm={handleForm} handleSubmit = {handleSubmit} register = {register} errors ={errors} register_errors={register_errors} />
        </RegisterWrapper>
    );
}

export default Register;