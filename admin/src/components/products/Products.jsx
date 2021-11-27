import React, { useState } from "react";
import SingleProduct from "./SingleProduct";
import axios from "axios";
import { Link } from "react-router-dom";
const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const getData = () => {
    setLoading(true);
    axios
      .get("https://usman-recipes.herokuapp.com/api/products")
      .then((res) => {
        // setProducts([]);
        setProducts(res.data);
        setLoading(false);
        console.log(res.data);
      });
  };
  React.useEffect(getData, []);

  return (
    <div>
      {loading && <p>Loading...</p>}
      {products.length == 0 && !loading && (
        <p>Sorry We have No Products to Show</p>
      )}
      <Link to="/products/create">Create Product</Link>
      {products.map((p) => (
        <SingleProduct product={p} onDelete={getData} />
      ))}
    </div>
  );
};

export default Products;
