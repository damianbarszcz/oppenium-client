import React from 'react';
import styled from 'styled-components';
import {Link} from "react-router-dom";

const RecommendSection = styled.section`
  min-width:100%;
  background-color:#ffffff;
  z-index:1;
`
const Container = styled.div`
  max-width:1540px;
  margin:auto;
`
const RecommendBlock = styled.div`
  padding: 4rem 0 4rem;
`
const RecommendHeader = styled.header`
  margin-bottom:2rem;
  width:100%;
`
const RecommendHeaderTitle = styled.h2`
  font-family: 'Radio Canada', sans-serif;
  font-weight: 600;
  color:#17183B;
`
const RecommendInner = styled.div`
  display:grid;
  margin-top:3.5rem;
  grid-template-columns: repeat(4,1fr);
  grid-gap:3.5rem;
`
const RecommendProduct = styled(Link)`
  display:flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  width:100%;
  min-height: 200px;
  border: 1px solid #f3f3f3;
  text-decoration: none;
`
const RecommendProductArtwork = styled.div`
  padding: 2rem;
  border-bottom: 1px solid #f3f3f3;
  text-align: center;
`
const RecommendProductArtworkImage = styled.img`
  width:240px;
  height: 187px;
`
const RecommendProductInfo = styled.div`
  padding: 0rem 1.35rem;
`
const RecommendProductInfoTitle = styled.h3`
  font-family: 'Radio Canada', sans-serif;
  font-size:0.9rem;
  line-height: 1.65rem;
  font-weight: 400;
  color:#17183B;
`
const RecommendProductInfoMore = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 1.5rem 1rem;
  justify-content: space-between;
  align-items: center;
`
const RecommendProductInfoPrice = styled.span`
  font-family: 'Radio Canada', sans-serif;
  font-size:1.1rem;
  font-weight: 300;
  color:#17183B;
`
const ProductAvailability = styled.span`
  display: block;
  width:40px;
  height: 40px;
  font-family: 'Radio Canada', sans-serif;
  font-weight: 400;
  color:#17183B;
  border: 1px solid #13F36D;
  border-radius: 100%;
  background-color:transparent;
  background-image: url("http://localhost:3000/images/global/availability.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size:50%;
`

const ProductNotAvailability = styled.span`
  display: block;
  width:40px;
  height: 40px;
  font-family: 'Radio Canada', sans-serif;
  font-weight: 400;
  color:#17183B;
  border: 1px solid #5B5B5B;
  border-radius: 100%;
  background-color:transparent;
  background-image: url("http://localhost:3000/images/global/not-availability.svg");
  background-repeat: no-repeat;
  background-position: center;
  background-size:50%;
`

const Recommend = (props) => {

    return (
        <RecommendSection>
            <Container>
                <RecommendBlock>
                    <RecommendHeader>
                        <RecommendHeaderTitle>Recommend</RecommendHeaderTitle>
                    </RecommendHeader>

                    <RecommendInner>
                            { props.recommendProducts.slice(0,8).map((recommendProduct) =>
                            <RecommendProduct to={`/single/${recommendProduct.category}/${recommendProduct.id}`} target="_self" key={recommendProduct.id}>
                                <RecommendProductArtwork>
                                    <RecommendProductArtworkImage src={`http://localhost:3000/images/products/${recommendProduct.product_image}`}  alt={ recommendProduct.product_title } />
                                </RecommendProductArtwork>

                                <RecommendProductInfo>
                                    <RecommendProductInfoTitle>{recommendProduct.product_title}</RecommendProductInfoTitle>
                                </RecommendProductInfo>

                                <RecommendProductInfoMore>
                                    <RecommendProductInfoPrice>{recommendProduct.product_price + ".00 $" }</RecommendProductInfoPrice>

                                    {recommendProduct.availability ?
                                        <ProductAvailability />
                                        :
                                        <ProductNotAvailability />
                                    }
                                </RecommendProductInfoMore>
                            </RecommendProduct>)}
                    </RecommendInner>
                </RecommendBlock>
            </Container>
        </RecommendSection>
    );
}

export default Recommend;