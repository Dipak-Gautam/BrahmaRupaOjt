import React, { useState } from "react";
import Card from "../Product/component/Card";
import AddProductDetailComponent from "./Component/AddProductDetailComponent";
import { useLocation, useNavigate } from "react-router-dom";
import OrangeButton from "../Button/OrangeButton";
import addProductApi from "../Api/product/AddProductApi";
import { MdKeyboardBackspace } from "react-icons/md";
import updateProductApi from "../Api/product/updateProductApi";
import { DotLoader, PulseLoader } from "react-spinners";

const AddProduct = () => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userDetail"));
  if (!userData || userData.role != "admin") {
    window.location.href = "/";
    return;
  }
  const [imageFile, setImageFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const data = location.state;
  const temp = {
    pName: "",
    features: [],
    price: 0,
    image: "",
    rating: 0,
    category: "",
    description: "",
  };

  const [productDetail, setProductDetail] = useState(data ? data : temp);
  const handelAddProduct = () => {
    if (imageFile == null || imageFile == undefined) return;
    if (temp.pName == "" || temp.image == "") return;
    setLoading(true);
    addProductApi(productDetail, setProductDetail, imageFile, setLoading);
  };

  const handelUpdateProduct = () => {
    const tempData = productDetail;
    tempData.id = productDetail._id;
    updateProductApi(tempData);
  };

  return (
    <>
      <div className="h-[100xh] p-2 md:p-5 flex flex-col  md:px-20">
        <div
          className="text-white p-1 md:px-2 bg-gray-500 hover:bg-gray-600 rounded-md w-fit font-medium flex items-center gap-2 text-sm cursor-pointer"
          onClick={() => navigate(-1)}
        >
          <MdKeyboardBackspace className="md:text-3xl" /> <span>Go Back</span>
        </div>
        <div>
          <h1 className="md:text-3xl font-bold text-center my-2 italic">
            {data ? "Update Product" : "Add Product"}
          </h1>
        </div>

        <div className="flex-1  md:flex gap-10 justify-center items-center">
          <div className="flex flex-col gap-4 justify-center items-center w-[]  md:w-[40%]">
            <Card data={productDetail} />

            <div className=" hidden md:flex  mx-5 font-medium text-gray-500">
              Add a new product or update existing details here to keep your
              catalog accurate and up to date. Make sure to fill in all required
              fields for the best results.
            </div>
          </div>
          <div className="flex-1 ">
            <div className="text-center text-gray-500 font-semibold italic text-2xl">
              Product Detail
            </div>
            <AddProductDetailComponent
              setProductDetail={setProductDetail}
              productDetail={productDetail}
              setImageFile={setImageFile}
              imageFile={imageFile}
            />
          </div>
        </div>
        <div>
          {data ? (
            <OrangeButton
              title={"Update Product"}
              onClick={() => handelUpdateProduct()}
            />
          ) : (
            <OrangeButton
              title={"Add Product"}
              onClick={() => handelAddProduct()}
            />
          )}
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-slate-100/50 backdrop-blur-[1px] ${
          loading ? "flex" : "hidden"
        } justify-center items-center flex-col gap-3`}
      >
        <DotLoader color="#10edde" />
        <div className="flex text-gray-900 font-medium text-sm items-end">
          Loading <PulseLoader size={4} />
        </div>
        <div className=" text-gray-700 font-medium text-sm ">
          Uploading your product please be patient
        </div>
      </div>
    </>
  );
};

export default AddProduct;
