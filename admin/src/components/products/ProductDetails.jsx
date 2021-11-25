import React from "react";
import { useParams } from "react-router";
import axios from "axios";
const ProductDetails = (props) => {
  const [product, setProduct] = React.useState({});
  const params = useParams();
  console.log(params);
  const getData = () => {
    axios
      .get("https://usman-recipes.herokuapp.com/api/products/" + params.id)
      .then((res) => {
        setProduct(res.data);
      });
  };
  React.useEffect(getData, []);
  return (
    <div>
      <h3>{product.name}</h3>
      <p>
        <b>Price</b> {product.price} PKR <br />
        <b>Color</b> {product.color} <br />
        <b>department</b> {product.department} <br />
      </p>
      <p>{product.description}</p>
      <hr />
    </div>
  );
};

export default ProductDetails;
