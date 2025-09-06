import React, { useEffect, useState } from "react";
import Card from "./component/Card";
import { FadeLoader } from "react-spinners";

const Product = ({ productData }) => {
  return (
    <div className="px-5 py-3 flex flex-wrap gap-6 justify-center">
      {productData.map((item) => (
        <Card data={item} key={item._id} />
      ))}
      {productData.length == 0 && (
        <div className=" flex flex-col text-gray-500 font-medium text-sm justify-center  items-center my-5 ">
          <FadeLoader />
          <div className="mt-5">The Product are loading Please be patient</div>
          <p className=" text-xs">The render server are cold loading...</p>
        </div>
      )}
    </div>
  );
};

export default Product;
