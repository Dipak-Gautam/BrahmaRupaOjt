import React from "react";

const AddCategory = ({ setProductDetail, productDetail }) => {
  const handleCategoryChange = (e) => {
    setProductDetail({
      ...productDetail,
      category: e.target.value,
    });
  };

  return (
    <div className="flex flex-col my-3 gap-1">
      <div className="font-medium text-sm text-gray-500">Category:</div>
      <select
        className="border rounded-md p-1 text-xs"
        value={productDetail.category || ""}
        onChange={handleCategoryChange}
      >
        <option value="">Select Category</option>
        <option value="Lunch">Lunch</option>
        <option value="Snack">Snack</option>
        <option value="Dinner">Dinner</option>
        <option value="Beverage">Beverage</option>
      </select>
      <div
        className={`my-q text-[10px] text-red-500 ${
          productDetail.category == "" ? "flex" : "hidden"
        } `}
      >
        Please select a category
      </div>
    </div>
  );
};

export default AddCategory;
