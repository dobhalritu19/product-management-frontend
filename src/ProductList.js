import React, { useEffect, useState } from "react";
import axios from "axios";
import { QRCodeCanvas } from "qrcode.react";
// import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/api/products")
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product) => (
          <li key={product._id} style={{ marginBottom: "20px" }}>
            <strong>{product.name}</strong> - ${product.price}
            <p>{product.description}</p>

            {/* QR Code */}
            <QRCodeCanvas 
              value={`http://localhost:3000/product/${product._id}`} 
              size={100} 
            />
            
            {/* Link to Product Details Page */}
            {/* <p>
              <Link to={`/product/${product._id}`}>View Details</Link>
            </p> */}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
