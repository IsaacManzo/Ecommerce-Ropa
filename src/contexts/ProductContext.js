import React, { createContext, useState, useEffect } from "react";

// create context
export const ProductContext = createContext();
// products state
const [products, setProducts] = useState([])
// fetch products
useEffect(()=>{
  const fetchProducts = async () => {
    const response = await fetch("https://fakestoreapi.com/products")
    const data = response.json()
    setProducts(data)
  }
  fetchProducts()
}, [])

const ProductProvider = ({ children }) => {
  return <ProductContext.Provider value={{ products }}>{children}</ProductContext.Provider>;
};

export default ProductProvider;
