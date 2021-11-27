import { Button } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
const SingleProduct = (props) => {
  return (
    <div>
      <h3>
        <Link to={"/products/details/" + props.product._id}>
          {props.product.name}
        </Link>
      </h3>
      <Link to={"/products/edit/" + props.product._id}>Edit</Link>
      <p>
        <b>Price</b> {props.product.price} PKR
      </p>
      <Button
        variant="contained"
        color="secondary"
        onClick={(e) => {
          axios
            .delete(
              "https://usman-recipes.herokuapp.com/api/products/" +
                props.product._id
            )
            .then((res) => {
              console.log("deleted");
              props.onDelete();
            });
        }}
      >
        Delete
      </Button>
      <hr />
    </div>
  );
};

export default SingleProduct;
