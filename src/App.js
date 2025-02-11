import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import ProductList from "./ProductList";

function App() {
  return (
    <Router>
      <nav style={{ display: "flex", justifyContent: "center", gap: "20px", padding: "10px" }}>
        <Link to="/">Product List</Link>
        <Link to="/scan">Scan QR</Link>
      </nav>

      <Routes>
        <Route path="/" element={<ProductList />} />
      </Routes>
    </Router>
  );
};

export default App;

