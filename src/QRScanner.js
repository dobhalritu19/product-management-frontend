import React, { useState, useEffect } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import axios from "axios";

const QRScanner = () => {
  const [scanResult, setScanResult] = useState(null);
  const [product, setProduct] = useState(null);

  const fetchProductDetails = async (productId) => {
    try {
      const response = await axios.get(`http://localhost:5000/api/product/${productId}`);
      setProduct(response.data);
    } catch (error) {
      console.error("Error fetching product:", error);
      setProduct(null);
    }
  };

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });

    scanner.render(
      (decodedText) => {
        setScanResult(decodedText);
        fetchProductDetails(decodedText);
        scanner.clear();
      },
      (error) => console.log("Scan error:", error)
    );

    return () => scanner.clear();
  }, []);

  return (
    <div style={{ textAlign: "center", padding: "20px" }}>
      <h2>Scan QR Code</h2>
      {!scanResult ? <div id="reader"></div> : <h3>Scanned ID: {scanResult}</h3>}
      {product ? (
        <div style={{ marginTop: "20px" }}>
          <h2>{product.name}</h2>
          <p>{product.description}</p>
          <h3>Price: ${product.price}</h3>
        </div>
      ) : (
        <p>No product found</p>
      )}
    </div>
  );
};

export default QRScanner;
