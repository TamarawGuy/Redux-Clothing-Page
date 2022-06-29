import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
  const { productId } = useParams();

  return (
    <div>
      <h1>ProductComponent</h1>
    </div>
  );
};

export default ProductDetails;
