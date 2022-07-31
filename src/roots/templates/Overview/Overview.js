import React, { useState,useEffect,useCallback } from 'react';
import { Recommend,Navigation, Footer } from "../../components";
import axios from 'axios';

function Overview(props) {

    const [recommendProducts, getRecommendProducts] = useState([]);

    const getCollectionAPI = useCallback(async () => {
        const result = await axios('http://localhost:8080/api/product/recommend');
        getRecommendProducts(result.data);
    }, [])

    useEffect(() => {
        getCollectionAPI();
    }, [getCollectionAPI])

    return (
        <>
            <Navigation user = {props.user} />
            <Recommend  recommendProducts = {recommendProducts} />
            <Footer />
        </>
    );
}

export default Overview;