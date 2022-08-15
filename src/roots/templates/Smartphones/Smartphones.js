import React,{useEffect, useState}  from 'react';
import styled from "styled-components";
import axios from "axios";

import { Navigation, CategoryHeader,CategoryFilter,CategoryProducts, Footer } from "../../components";

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

    useEffect(() => {
        let abortController;
        (async () => {
            abortController = new AbortController();
            let signal = abortController.signal;    

             const { data } = await axios.get(
                 'http://localhost:8080/api/product/smartphones',
                 { signal: signal }
             );
             getSmartphones(data);
        })();

        return () => abortController.abort();
    }, []);

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