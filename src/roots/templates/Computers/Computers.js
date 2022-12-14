import React,{useEffect, useState}  from 'react';
import { Navigation, CategoryHeader,CategoryFilter,CategoryProducts, Footer } from "../../components";
import styled from "styled-components";
import axios from "axios";

const Container = styled.main`
  display: grid;
  padding-bottom:6rem;
  grid-template-columns: 0.3fr 1fr;
  grid-column-gap: 5rem;
  max-width:1540px;
  margin:auto;
`


const Computers = (props) => {
    const [computers, getComputers] = useState([]);

    useEffect(() => {
        let abortController;
        (async () => {
            abortController = new AbortController();
            let signal = abortController.signal;    

             const { data } = await axios.get(
                 'http://localhost:8080/api/product/computers',
                 { signal: signal }
             );
             getComputers(data);
        })();

        return () => abortController.abort();
    }, []);

    return (
        <>
            <Navigation user = {props.user} />
            <CategoryHeader category_header = "Computers" />
            <Container>
                <CategoryFilter />
                <CategoryProducts products = {computers} category_products = "computers"  />
            </Container>
            <Footer/>
        </>
    );
}

export default Computers;