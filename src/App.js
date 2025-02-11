import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProductList from "./ProductList";
import ProductDetails from "./ProductDetails";

const App = () => {
  return (
    <Router>
      <nav style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "10px" }}>
        <Link to="/">Product List</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
