import React from "react";

const Skeleton = () => {
  return (
    <div className="bg-[#e1e4e7]">
      <h1 className="text-center text-[26px] mt-[20px]">Products</h1>
      <div className="p-[70px] grid grid-cols-4 gap-10">
        {Array(12)
          .fill()
          .map((_, inx) => (
            <div key={inx} className="p-[12px] flex flex-col gap-1 bg-white shadow-xl h-[346px] rounded-xl ">
              <div className="h-[250px] bg-gray-400"></div>
              <div className="h-[22px] bg-gray-400"></div>
              <div className="h-[22px] w-[150px] bg-gray-400"></div>
              <div className="h-[22px] w-[90px] bg-gray-400"></div>
            </div>
          ))}
      </div>
    </div>
  );
};

export default Skeleton;
