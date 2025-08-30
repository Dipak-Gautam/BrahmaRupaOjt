import React, { useEffect, useState } from "react";
import ProductInputField from "../../InputFields/ProductInputField";
import AddFeature from "./AddFeature";
import AddCategory from "./AddCategory";

const AddProductDetailComponent = ({
  setProductDetail,
  productDetail,
  setImageFile,
  imageFile,
  data,
}) => {
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImageFile(file);
    if (file) {
      const objectUrl = URL.createObjectURL(file);
      setProductDetail({ ...productDetail, image: objectUrl });
    }
  };

  return (
    <div>
      <ProductInputField
        setProductDetail={setProductDetail}
        label={"Name"}
        name={"pName"}
        productDetail={productDetail}
        message={"Provide Product name"}
      />

      <AddFeature
        productDetail={productDetail}
        setProductDetail={setProductDetail}
      />

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
      <AddCategory
        setProductDetail={setProductDetail}
        productDetail={productDetail}
      />
      <ProductInputField
        setProductDetail={setProductDetail}
        label={"Description"}
        name={"description"}
        productDetail={productDetail}
        message={"Please provide a description"}
      />
      {!data && (
        <div className="my-2">
          <input
            type="file"
            className="hidden"
            id="image-input"
            onChange={handleFileChange}
          />
          <label
            htmlFor="image-input"
            className="p-1 px-2 text-xs font-medium text-white rounded-md border border-green-700 bg-green-500 hover:bg-green-600  cursor-pointer"
          >
            Upload Image
          </label>
          <div
            className={`${
              imageFile == null
                ? "flex text-[10px] my-0.5 text-red-500"
                : "hidden"
            }`}
          >
            upload an image
          </div>
        </div>
      )}
    </div>
  );
};

export default AddProductDetailComponent;
