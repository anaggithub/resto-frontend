import React, { useState, useEffect } from "react";
import DefaultLayout from "../../components/layout";
import ItemBox from "../../components/item-box";
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
      <section>
        <h1>Home</h1>
        <div>
          {products.length > 0 && products.map(
            (product) => (
              <ItemBox key={product.product_id + 1}
                name={product.product}
                picture={product.picture} />
            )
          )}
        </div>
      </section>
    </DefaultLayout>
  );
};

export default Home;