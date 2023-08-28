# Ecommerce Ropa

## **Armado del proyecto**

El primer paso de este proyecto es importar en App las bibliotecas ReactRouter, Pages y Components.

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

Luego, podemos utilizar esto dentro del componente App para formar nuestras rutas. Esto servirá como un estado inicial, y posteriormente se podrán añadir más rutas según sea necesario.

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

## **Product context**

``` JavaScript
// create context
export const ProductContext = createContext();

const ProductProvider = ({ children }) => {
  return <ProductContext.Provider>{children}</ProductContext.Provider>;
};

export default ProductProvider;
```

Primero creamos el contexto, el cual será el encargado de contener el estado de los productos. Estos estados podrán ser utilizados en otros componentes sin la necesidad de tener que pasarlos anidados por medio de props.

Luego, el componente ProductProvider actúa como el proveedor del contexto ProductContext. Este proveedor es responsable de suministrar los datos y funciones relacionados con los productos a los componentes que se encuentran dentro de su alcance.

#### **Seteamos el estado**

Para esto, vamos a utilizar una página llamada "Fake Store API". Desde aquí obtendremos los datos de los productos.

``` JavaScript
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
```

Primero, definimos el estado "products" usando **useState**. Luego, realizamos un fetch para traer los productos de la fake API. Seteamos el estado de **products** con **setProducts** y, por último, le pasamos el valor de "products" al contexto que está dentro del proveedor.

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

Luego, para utilizar este contexto en otro componente, deberíamos importar ProductContext. Después, con la constante productContext, indicaremos que deseamos utilizar ese contexto. Para lograrlo, lo definiremos mediante el uso de useContext (una herramienta de React). Finalmente, utilizaremos esta constante para acceder a los datos (estados) de los productos.

#### **Importar en index**

``` JavaScript
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
// import provider
import ProductProvider from "./contexts/ProductContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <ProductProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </ProductProvider>
);
```

Por último, importamos el proveedor en index.js.