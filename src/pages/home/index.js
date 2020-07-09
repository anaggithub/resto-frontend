import React, { useState, useEffect } from "react";
import DefaultLayout from "../../components/layout";
import getProducts from "../../services/products"

const Home = () => {

  const [products, setProducts] = useState([])

  useEffect(() => {
    async function getProductsToRender() {
      const data = await getProducts()
      setProducts(data)
    }
    getProductsToRender()
  }, [])

  return (
    <DefaultLayout>
      <div>HOME</div>
      <div>
        {products.length > 0 && products.map(
          (product) => (
            <div key={product.id}>{product.product}</div>
          )
        )}
      </div>
    </DefaultLayout>
  );
};

export default Home;