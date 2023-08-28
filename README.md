# Ecommerce Ropa

### **Armado del proyecto**

El primer paso de este proyecto es importar en App ReactRouter, Pages y Components.

 ``` JavaScript
import React from "react";
// import react router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
// import pages
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
// import components
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Footer from "./components/Footer";
```

Luego utilizar esto dentro de App para fomar nuestras rutas (esto como estado inicial, luego se añadiran mas rutas). 

``` JavaScript
const App = () => {
  return (
    <div className="overflow-hidden">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="product/:id" element={<ProductDetails />}/>
        </Routes>
        <Sidebar />
        <Footer />
      </Router>
    </div>
  );
};
```

### **Product context**

``` JavaScript
// create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  return <ProductContext.Provider>{children}</ProductContext.Provider>;
};

export default ProductContext;
```

Primero creamos el context, este sera el encargado de contener el estado de los productos, estos estados se podran utilziar en otros componentes sin la necesidad de tener que anidar por props.
Luego el componente ProductProvider actúa como el proveedor del contexto ProductContext. El proveedor es responsable de suministrar los datos y funciones relacionados con los productos a los componentes que están dentro de su ámbito.

#### **Como utilizarlo**

``` JavaScript
import React, { useContext } from "react";
import { ProductContext } from "./Product"; // Asegúrate de importar correctamente el contexto

const ProductList = () => {
  const productContext = useContext(ProductContext);

  return (
    <div>
      <h2>Product List</h2>
      <ul>
        {productContext.products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
```

Luego, para utilizar este contexto en otro componente, deberíamos importar ProductContext. Luego, con la constante productContext, indicaremos que queremos utilizar ese contexto. Para esto, lo definiremos con useContext (una herramienta de React). Por último, usaremos esta constante para acceder a los datos (estados) de los productos.

