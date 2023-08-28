import React, { useContext } from "react";
// import product context
import { ProductContext } from "../contexts/ProductContext";

const Home = () => {
  // get products from product context
  const { products } = useContext(ProductContext);
  // get only men´s and women´s clothing category
  const filteredProducts = products.filter((item) => {
    return (
      item.category === "men's clothing" || item.category === "women's clothing"
    );
  });
  return (
    <div>
      <section className="p-16">
        <div className="container mx-auto">
          <div>
            {filteredProducts.map((product) =>{
              return <div key={product.id}>{product.title}</div>
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
