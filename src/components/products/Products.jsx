import React from "react";
import { useNavigate } from "react-router-dom";

const Products = ({ data }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-[#e1e4e7] pt-[20px] mt-[20px]">
      <h1 className="text-center text-[26px] ">Products</h1>
      <div className="p-[70px] grid grid-cols-4 gap-10">
        {data?.map((product) => (
          <div
            key={product.id}
            className="p-[12px] bg-white shadow-xl  rounded-xl "
          >
            <img
              className="h-[250px] object-contain w-full"
              onClick={() => navigate(`/products/${product.id}`)}
              src={product.image}
            />
            <h3>{product.title}</h3>
            <strong>{product.price} USD</strong>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
