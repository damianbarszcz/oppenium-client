import React, { useState,useEffect } from 'react';
import { Recommend, Navigation, Footer } from "../../components";
import axios from 'axios';

const Overview = (props) => {
    const [recommendProducts, getRecommendProducts] = useState([]);

    useEffect(() => {
        let abortController;
        (async () => {
            abortController = new AbortController();
            let signal = abortController.signal;    

             const { data } = await axios.get(
                 'http://localhost:8080/api/product/recommend',
                 { signal: signal }
             );
             getRecommendProducts(data);
        })();
        return () => abortController.abort();
    }, []);
    
    return (
        <>
            <Navigation user = {props.user} />
            <Recommend  recommendProducts = {recommendProducts} />
            <Footer />
        </>
    );
}

export default Overview;