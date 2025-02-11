import React, { useEffect, useState } from "react";
import axios from "axios";
import { QRCodeCanvas } from "qrcode.react";

const ProductList = () => {
  const API_BASE_URL = process.env.REACT_APP_API_BASE_URL
  const FRONTEND_BASE_URL = process.env.REACT_APP_FRONTEND_BASE_URL

  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get(`${API_BASE_URL}/api/products`)
      .then((response) => {
        setProducts(response.data);
      })
      .catch((error) => console.error("Error fetching products:", error));
  }, []);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {products.map((product, index) => (
          <li key={index} style={{ marginBottom: "20px" }}>
            <p>{product.id}</p>
            <strong>{product.name}</strong> - ${product.price}
            <p>{product.description}</p>

            {/* QR Code */}
            <QRCodeCanvas
              value={`${FRONTEND_BASE_URL}/product/${product.id}`}
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
