import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchProducts } from "../redux/actions/productActions";
import ProductComponent from "./ProductComponent";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-column-gap: 40px;
  grid-row-gap: 40px;
`;

const ProductList = () => {
  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);

  return (
    <Container>
      <Wrapper>
        <ProductComponent />
      </Wrapper>
    </Container>
  );
};

export default ProductList;
