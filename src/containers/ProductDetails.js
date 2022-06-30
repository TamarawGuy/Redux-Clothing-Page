import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProduct,
  removeSelectedproduct,
} from "../redux/actions/productActions";
import styled from "styled-components";

const Container = styled.div``;

const Wrapper = styled.div``;

const ImageContainer = styled.div``;

const TextWrapper = styled.div``;

const Title = styled.span``;

const Price = styled.span``;

const Category = styled.span``;

const Description = styled.p``;

const ProductDetails = () => {
  const product = useSelector((state) => state.product);
  const { title, price, description, category, image } = product;
  const { productId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (productId && productId !== "") {
      dispatch(fetchProduct(productId));
    }
    return () => dispatch(removeSelectedproduct());
  }, [productId]);

  return (
    <Container className="ui grid container">
      {Object.keys(product).length === 0 ? (
        <div>...Loading</div>
      ) : (
        <div className="ui placeholder segment">
          <div className="ui two column stackable center aligned grid">
            <div className="ui vertical divider">AND</div>
            <div className="middle aligned row">
              <div className="column lp">
                <img className="ui fluid image" src={image} alt={title} />
              </div>
              <div className="column rp">
                <h1>{title}</h1>
                <h2>
                  <a href="#" className="ui teal tag label">
                    ${price}
                  </a>
                </h2>
                <h3 className="ui brown block header">{category}</h3>
                <p>{description}</p>
                <div className="ui vertical animated button" tabIndex="0">
                  <div className="hidden content">
                    <i className="shop icon"></i>
                  </div>
                  <div className="visible content">Add to Cart</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </Container>
  );
};

export default ProductDetails;
