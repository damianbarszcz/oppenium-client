import React from 'react';
import styled from 'styled-components';

const CategoryBanner = styled.section`
  min-width:100%;
  background-color:#ffffff;
  z-index:1;
`
const Container = styled.div`
  max-width:1540px;
  margin:auto;
`
const CategoryBlock = styled.div`
  padding: 4rem 0 4rem;
`
const Header = styled.header`
  margin-bottom:2rem;
  width:100%;
  font-family: 'Radio Canada', sans-serif;
`
const HeaderTitle = styled.h1`
  font-size: 1.65rem;
  font-weight: 600;
  color:#17183B;
`

const CategoryHeader = (props) => {

    return (
        <CategoryBanner>
            <Container>
                <CategoryBlock>
                    <Header>
                        <HeaderTitle>{props.category_header}</HeaderTitle>
                    </Header>
                </CategoryBlock>
            </Container>
        </CategoryBanner>
    );
}

export default CategoryHeader;