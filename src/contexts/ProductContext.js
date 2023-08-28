import React, { createContext, useState, useEffect } from "react";

// create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  return <ProductContext.Provider>{children}</ProductContext.Provider>;
};

export default ProductContext;
