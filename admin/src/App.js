import React from "react";

import logo from "./logo.svg";
import "./App.css";
import Counter from "./components/examples/Counter";
import SortTest from "./components/examples/SortTest";
import Products from "./components/products/Products";
import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/views/auth/Login";
import Register from "./components/views/auth/Register";
import ProductDetails from "./components/products/ProductDetails";

function App() {
  const [theme, setTheme] = React.useState("blue");
  return (
    <div className="App">
      <BrowserRouter>
        <ul id="menu">
          <li>
            <a href="/">Home Link</a>
          </li>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/products/details/:id" element={<ProductDetails />} />
          <Route path="/" element={<Products />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
