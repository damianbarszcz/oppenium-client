import React,{useState} from 'react';
import styled from 'styled-components';

const ProductsSection = styled.section`
  width:100%;
  z-index:1;
`
const ProductsInner = styled.div`
  display:grid;
  grid-template-columns: repeat(3,1fr);
  grid-gap:3.5rem;
`
const SingleProduct = styled.a`
  display:flex;
  justify-content: space-between;
  flex-direction: column;
  position: relative;
  width:100%;
  min-height: 500px;
  border: 1px solid #f3f3f3;
  text-decoration: none;
`
const SingleProductArtwork = styled.div`
  padding: 1rem;
  border-bottom: 1px solid #f3f3f3;
  text-align: center;
`
const SingleProductArtworkImage = styled.img`
  width:240px;
  height: 187px;
`
const SingleProductInfo = styled.div`
  position: relative;
  padding: 0.5rem 1.5rem 1rem;
`
const SingleProductInfoTitle = styled.h3`
  font-family: 'Radio Canada', sans-serif;
  font-weight: 400;
  color:#17183B;
`
const SingleProductInfoDescryption = styled.p`
  font-family: 'Radio Canada', sans-serif;
  font-size: 0.85rem;
  line-height: 30px;
  font-weight: 100;
  color:#89898E;
`
const SingleProductInfoMore = styled.div`
  display: flex;
  align-items: center; 
  padding: 0rem 1.5rem 1rem;
  justify-content: space-between;
  align-items: center;
`
const SingleProductInfoPrice = styled.span`
  font-family: 'Radio Canada', sans-serif;
  font-weight: 400;
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

const ProductSearch = styled.div`
  width:100%;
  min-height:100px;
`
const ProductSearchForm = styled.form`
    display: flex;
    position: relative;
    min-width:100%;
    height: 65px;
`
const ProductSearchFormInput = styled.input`
    padding: 0 2rem 0 2rem;
    min-width:100%;
    box-sizing: border-box;
    height: 65px;
    font-size:1rem;
    font-family: 'Radio Canada', sans-serif;
    font-weight: 400;
    color:#17183B;
    border:1px solid #f3f3f3;
  
    &:focus {outline:0;}
`

const ProductSearchFormInputIcon = styled.span`
    display: block;
    position: absolute;
    top: 1.25rem;
    right: 1.75rem;
    fill: #5B5B5B;
`

const NoProductsMsg = styled.div`
    grid-column-start: 1;
    grid-column-end: 4;
    margin-top: 3.5rem;
`
const NoProductsMsgHeader = styled.header`
    text-align: center;
    font-family: 'Radio canada', sans-serif;
    color:#17183B;
`
const NoProductsMsgHeaderTitle = styled.h2`
    display: block;
`
const NoProductsMsgHeaderDesc = styled.p`
    display: block;
`

const CategoryProducts = (props) => {
    const [searchTerm, getSearchTerm] = useState('');

    let searchResults =  props.products.filter(product =>
        product.product_title.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const method = (propsText) => {
        let product_description = String(propsText);

        return   <SingleProductInfoDescryption dangerouslySetInnerHTML={{__html: product_description.replace(/&/g, "<br/>")}} />
    }

    return (
        <ProductsSection>
            <ProductSearch>
                <ProductSearchForm method="GET">
                    <ProductSearchFormInput type="search" onChange={e => getSearchTerm(e.target.value)}  value={ searchTerm } placeholder={`Search ${props.category_products }`} tabindex="1"/>

                    <ProductSearchFormInputIcon>
                        <svg width="28" height="28" focusable="false" aria-hidden="true" viewBox="0 0 24 24">
                            <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z"></path>
                        </svg>
                    </ProductSearchFormInputIcon>
                </ProductSearchForm>
            </ProductSearch>

            <ProductsInner>
                { searchResults.map((product) =>
                    <SingleProduct href={`/single/${product.category}/${product.id}`} target="_self" key={product.id}>
                        <SingleProductArtwork>
                            <SingleProductArtworkImage src={`/images/products/${product.product_image}`}  alt={ product.product_title } />
                        </SingleProductArtwork>

                        <SingleProductInfo>
                            <SingleProductInfoTitle>{product.product_title}</SingleProductInfoTitle>

                            { method(product.description) }
                        </SingleProductInfo>

                        <SingleProductInfoMore>
                            <SingleProductInfoPrice>{product.product_price + ".00 $" } </SingleProductInfoPrice>
                            {product.availability ?
                                <ProductAvailability />
                                :
                                <ProductNotAvailability />
                            }
                        </SingleProductInfoMore>
                    </SingleProduct> )
                }

                { searchResults.length == 0  ?
                    <NoProductsMsg>
                        <NoProductsMsgHeader>
                            <NoProductsMsgHeaderTitle>The product does not exist</NoProductsMsgHeaderTitle>

                            <NoProductsMsgHeaderDesc>The product with the name was not found "{ searchTerm }".</NoProductsMsgHeaderDesc>
                        </NoProductsMsgHeader>
                    </NoProductsMsg> : '' }
            </ProductsInner>
        </ProductsSection>
    );
}

export default CategoryProducts;