import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import styled from "styled-components";

const Container = styled.div`
  width: 250px;
  height: 380px;
  padding: 10px;
  border: 2px solid #000000;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 95%;
  position: relative;
`;

const ImageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Image = styled.img`
  width: 200px;
  height: 200px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const Text = styled.span`
  font-size: 20px;
  color: #000000;
  padding-bottom: 40px;
`;

const Price = styled.span`
  font-size: 20px;
  color: #000000;
`;

const Category = styled.span`
  color: grey;
  padding-top: 5px;
`;

const ProductComponent = () => {
  const products = useSelector((state) => state.allProducts.products);
  const renderList = products.map((product) => {
    const { id, title, price, image, category } = product;
    return (
      <Container key={id}>
        <Link to={`/product/${id}`}>
          <Wrapper>
            <ImageContainer>
              <Image
                // style={{ width: "50px", height: "50px" }}
                src={image}
                alt={title}
              />
            </ImageContainer>
            <TextWrapper>
              <Text>{title}</Text>
              <Price>$ {price}</Price>
              <Category>{category}</Category>
            </TextWrapper>
          </Wrapper>
        </Link>
      </Container>
    );
  });
  return <>{renderList}</>;
};

export default ProductComponent;
