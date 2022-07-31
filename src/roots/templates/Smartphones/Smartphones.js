import React  from 'react';
import { Navigation, CategoryHeader,CategoryFilter,CategoryProducts, Footer } from "../../components";
import styled from "styled-components";
import {useCallback, useEffect, useState} from "react";
import axios from "axios";

const Container = styled.main`
  display: grid;
  padding-bottom:6rem;
  grid-template-columns: 0.3fr 1fr;
  grid-column-gap: 5rem;
  max-width:1540px;
  margin:auto;
`

const Smartphones = (props) => {
    const [smartphones, getSmartphones] = useState([]);

    const getSmartphonesAPI = useCallback(async () => {
        const result = await axios('http://localhost:8080/api/product/smartphones');
        getSmartphones(result.data);
    }, [])

    useEffect(() => {
        getSmartphonesAPI();
    }, [getSmartphonesAPI])

    return (
        <>
            <Navigation user = {props.user} />
            <CategoryHeader category_header = "Smartphones"  />
            <Container>
                <CategoryFilter />
                <CategoryProducts products = {smartphones}  category_products = "smartphones"  />
            </Container>
            <Footer/>
        </>
    );
}

export default Smartphones;