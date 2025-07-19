import React from "react";
import { useFetch } from "../../hooks/useFetch";
import Products from "../../components/products/Products";
import Skeleton from "../../components/products/Skeleton";

const Home = () => {
  const { data, error, loading } = useFetch("/products", {
    limit: 12,
    skip: 4,
  });
  console.log(data);
  return (
    <div>
      {error && <p>something went wrong</p>}
      {loading ? <Skeleton /> : <Products data={data} />}
    </div>
  );
};

export default Home;
