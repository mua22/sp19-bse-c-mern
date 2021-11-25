import React from "react";
import { Link } from "react-router-dom";
const SingleProduct = (props) => {
  return (
    <div>
      <h3>
        <Link to={"/products/details/" + props.product._id}>
          {props.product.name}
        </Link>
      </h3>
      <p>
        <b>Price</b> {props.product.price} PKR
      </p>
      <hr />
    </div>
  );
};

export default SingleProduct;
