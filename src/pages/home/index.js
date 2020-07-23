import React, { useState, useEffect } from "react";
import DefaultLayout from "../../components/layout";
import ItemBox from "../../components/item-box";
import Typography from "../../components/typography";
import { layoutStyles } from "./styles"
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
    <DefaultLayout childrenStyles={layoutStyles}>
      <Typography component="h2">Nuestros platos</Typography>
      <React.Fragment>
        {products.length > 0 && products.map(
          (product) => (
            <ItemBox key={product.product_id + 1}
              name={product.product}
              price={product.price}
              picture={product.picture} />
          )
        )}
      </React.Fragment>
    </DefaultLayout>
  );
};

export default Home;