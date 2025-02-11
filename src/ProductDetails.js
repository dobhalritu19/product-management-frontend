import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

const ProductDetails = () => {
    const API_BASE_URL = process.env.REACT_APP_API_BASE_URL

    const { productId } = useParams();  // Extract productId from the URL
    const [product, setProduct] = useState(null);

    // Fetch product details using the productId from URL
    useEffect(() => {
        const fetchProductDetails = async () => {
            try {
                const response = await axios.get(`${API_BASE_URL}/api/product/${productId}`);
                setProduct(response.data);
            } catch (error) {
                console.error("Error fetching product:", error);
            }
        };

        fetchProductDetails();
    }, [productId]);

    return (
        <div style={{ textAlign: "center", padding: "20px" }}>
            {product ? (
                <>
                    <h2>{product.name}</h2>
                    <p>{product.description}</p>
                    <h3>Price: ${product.price}</h3>
                </>
            ) : (
                <p>Loading product details...</p>
            )}
        </div>
    );
};

export default ProductDetails;
