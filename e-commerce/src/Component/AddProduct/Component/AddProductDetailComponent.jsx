import React, { useState } from "react";
import ProductInputField from "../../InputFields/ProductInputField";
import OrangeButton from "../../Button/OrangeButton";

const AddProductDetailComponent = ({ setProductDetail, productDetail }) => {
  const [features, setFeatures] = useState("");

  const handleAddFeature = () => {
    if (!features.trim()) return;

    setProductDetail({
      ...productDetail,
      features: [...productDetail.features, features.trim()],
    });
    setFeatures(""); // clear input after adding
  };

  return (
    <div>
      <ProductInputField
        setProductDetail={setProductDetail}
        label={"Name"}
        name={"name"}
        productDetail={productDetail}
      />

      <div className="my-2 space-y-1">
        <div className="text-sm font-medium text-gray-700">Features:</div>

        <div className="text-sm">
          Data:{" "}
          {productDetail.features.map((item, index) => (
            <span key={index}>{item}, </span>
          ))}
        </div>

        <input
          type="text"
          value={features}
          onChange={(e) => setFeatures(e.target.value)}
          className="border outline-none rounded-md p-1 w-full"
        />

        <OrangeButton title="Add +" onClick={handleAddFeature} />
      </div>
      <ProductInputField
        setProductDetail={setProductDetail}
        label={"Rating"}
        name={"rating"}
        productDetail={productDetail}
      />
      <ProductInputField
        setProductDetail={setProductDetail}
        label={"Price"}
        name={"price"}
        productDetail={productDetail}
      />
      <ProductInputField
        setProductDetail={setProductDetail}
        label={"Category"}
        name={"category"}
        productDetail={productDetail}
      />
      <ProductInputField
        setProductDetail={setProductDetail}
        label={"Image"}
        name={"image"}
        productDetail={productDetail}
      />
    </div>
  );
};

export default AddProductDetailComponent;
