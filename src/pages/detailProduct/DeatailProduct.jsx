import React, { useLayoutEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";

const DetailProduct = () => {
  const { id } = useParams();
  const { data, error, loading } = useFetch(`/products/${id}`);

  useLayoutEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  console.log(data);

  if (error) {
    return <p>nimadur xato</p>;
  }

  return loading ? (
    <p>Loading...</p>
  ) : (
    <div className="flex justify-center gap-[100px] pl-[100px] p-[70px] ">
      <img src={data?.image} className="h-[400px]  rounded-xl" alt="" />
      <div>
        <h2 className="text-[36px]">{data?.title}</h2>
        <h2 className="text-[24px] text-gray-600">{data?.title} is {data?.description}</h2>
        <h2 className="text-[30px]">Category : {data?.category}</h2>
        <h2 className="text-[30px] text-green-600">{data?.price}$</h2>
      </div>
    </div>
  );
};

export default DetailProduct;
