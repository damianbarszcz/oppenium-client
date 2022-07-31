import React  from 'react';
import styled from "styled-components";

const Block = styled.div`
  display: block;
`
const BlockArtwork = styled.img`
  display: block;
`

const SProductMedia = (props) => {

    return (
        <Block>
            <BlockArtwork src={`/images/products/${props.product.product_image}`} alt={props.product.product_title} />
        </Block>
    );
}

export default SProductMedia;