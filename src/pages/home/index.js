import React, { useState, useEffect } from "react";
import DefaultLayout from "../../components/layout";
//import Spinner from "../../components/loading-spinner"
import { useDispatch, useSelector } from "react-redux";
import { getItems } from "../../actions/items";

const Home = () => {
  const dispatch = useDispatch();
  const products = useSelector(state => state.items.items);
  //const [isLoading, setLoading] = useState(false);

  useEffect(() => {
    dispatch(getItems());
  }, [getItems])

  return (
    <DefaultLayout>
      <div>HOME</div>
      <div>
        {products.length > 0 && products.map(
          (product) => (
            <div key={product.id}>
              <h3>{product.product}</h3>
              <img src={product.picture} />
            </div>
          )
        )}
      </div>
    </DefaultLayout>
  );
};

export default Home;