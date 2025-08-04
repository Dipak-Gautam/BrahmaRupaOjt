import React, { useState } from "react";
import Card from "../Product/component/Card";
import AddProductDetailComponent from "./Component/AddProductDetailComponent";

const AddProduct = () => {
  const [productDetail, setProductDetail] = useState({
    id: 1,
    name: "",
    features: [],
    caloriesPerServing: 0,
    image: "",
    rating: 0,
    mealType: [],
  });
  return (
    <div className="h-[100xh] p-5 flex flex-col px-20">
      <div>
        <h1 className="text-3xl font-bold text-center my-2 italic">
          Add Product
        </h1>
      </div>

      <div className="flex-1 flex gap-10">
        <div className="flex justify-center items-center w-[40%]">
          <Card data={productDetail} />
        </div>
        <div className="flex-1 ">
          <div className="text-center text-gray-500 font-semibold italic text-2xl">
            Product Detail
          </div>
          <AddProductDetailComponent
            setProductDetail={setProductDetail}
            productDetail={productDetail}
          />
        </div>
      </div>
    </div>
  );
};

export default AddProduct;
