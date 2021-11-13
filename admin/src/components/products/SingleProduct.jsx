import React from "react";
const SingleProduct = (props) => {
  return (
    <div>
      <h3>{props.product.name}</h3>
      <p>
        <b>Price</b> {props.product.price} PKR
      </p>
      <hr />
    </div>
  );
};

export default SingleProduct;
