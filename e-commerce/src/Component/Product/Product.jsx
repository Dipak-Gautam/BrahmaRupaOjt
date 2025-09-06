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
        <div className="">
          <FadeLoader />
          <div>The Product are loading Please Be patient</div>
        </div>
      )}
    </div>
  );
};

export default Product;
