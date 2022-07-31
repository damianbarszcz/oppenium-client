import React  from 'react';
import styled from "styled-components";
const Block = styled.div`
  display: block;
`
const BlockHeader = styled.header`
  display: block;
`
const BlockHeaderCategory = styled.h2`
  display: block;
  text-transform: capitalize;
  font-family: 'Radio Canada', sans-serif;
  font-weight: 400;
  color:#7B7B7B;
`
const BlockHeaderTitle = styled.h1`
  display: block;
  font-size: 1.75rem;
  line-height: 45px;
  font-family: 'Radio Canada', sans-serif;
  color:#17183B;
`
const BlockBody = styled.div`
  display: block;
`
const BlockBodyPrice = styled.div`
  display: block;
  margin-top: 3rem;
  margin-bottom: 2rem;
  font-family: 'Radio Canada', sans-serif;
  font-size: 1.75rem;
  color:#17183B;
`
const BlockBodyParameters = styled.ul`
  display: block;
  margin:0;
  padding:0;
  font-family: 'Radio Canada', sans-serif;
  color:#17183B;
`
const BlockBodyParametersItem = styled.li`
  list-style-type: none;
  line-height: 45px;
  margin-bottom:1rem;
`
const BlockBodyCart = styled.button`
  display: inline-block;
  margin-top:2rem;
  padding: 0.75rem 2.5rem;
  border:0;
  line-height: 35px;
  font-family: 'Radio Canada', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform:uppercase;
  color:#ffffff;
  cursor:pointer;
  background-color:#5D5FEF;
`

const BlockBodyUnavailableCart = styled.button`
  display: inline-block;
  margin-top:2rem;
  padding: 0.75rem 2.5rem;
  border:0;
  line-height: 35px;
  font-family: 'Radio Canada', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  text-transform:uppercase;
  color:#ffffff;
  background-color:#ada9a8;
`

const SProductInfo = (props) => {
    let product_description = String(props.product.description);

    return (
        <Block>
            <BlockHeader>
                <BlockHeaderCategory> { props.category_header } </BlockHeaderCategory>

                <BlockHeaderTitle>
                    { props.product.product_title }
                </BlockHeaderTitle>
            </BlockHeader>

            <BlockBody>
                <BlockBodyPrice>
                    { props.product.product_price + ".00 $"  }
                </BlockBodyPrice>

                <BlockBodyParameters>
                    <BlockBodyParametersItem dangerouslySetInnerHTML={{__html: product_description.replace(/&/g, "<br/>")}} />
                </BlockBodyParameters>

                { props.product.availability  ?
                    <form onSubmit={ props.addToCart }>
                        <input type="text" name="cart_product_id" value={props.cartProductId} onChange={e => props.getCartProductId(e.target.value)} hidden/>
                        <BlockBodyCart type="submit" >Add To cart</BlockBodyCart>
                    </form>
                    :
                    <BlockBodyUnavailableCart type="button" disabled>Product unavailable</BlockBodyUnavailableCart>
                }
            </BlockBody>
        </Block>
    );
}

export default SProductInfo;