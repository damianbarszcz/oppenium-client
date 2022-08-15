import React from 'react';
import styled from 'styled-components';

const FilterBlock = styled.div`
  padding: 1rem 2rem;
  z-index:1;
  height: 400px;
  max-height: 400px;
`

const CategoryFilter = (props) => {

    return (
        <FilterBlock/>
    );
}

export default CategoryFilter;