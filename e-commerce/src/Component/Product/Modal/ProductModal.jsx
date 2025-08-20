import React from "react";
import StarCalc from "../component/StarCalc";
import { LuDot } from "react-icons/lu";
import AddToCart from "../../Button/AddToCart";
import { IoMdArrowRoundBack } from "react-icons/io";
import OrangeButton from "../../Button/OrangeButton";
import { useNavigate } from "react-router-dom";

const ProductModal = ({
  data,
  setShowModal,
  cartBoolean,
  setCartBoolean,
  addItemToCart,
}) => {
  const navigate = useNavigate();
  const userData = JSON.parse(localStorage.getItem("userDetail"));

  const navigateFunction = () => {
    navigate("/product", { state: data });
  };

  return (
    <div
      className="fixed inset-0 bg-gray-100/80 flex justify-center items-center z-50"
      onClick={() => setShowModal(false)}
    >
      <div
        className=" m-3 bg-white rounded-xl w-full md:w-[65%] md:h-[60%] overflow-hidden md:flex shadow-xl shadow-black/50"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="md:w-[40%] h-full relative flex justify-center items-center">
          <div className="absolute p-1 bg-orange-500 rounded-full top-2 left-2 ">
            <IoMdArrowRoundBack
              color="white"
              onClick={() => setShowModal(false)}
            />
          </div>
          <img src={data.image} className="bg-cover w-full h-60 md:h-full" />
        </div>
        <div className=" flex-1 p-3 md:p-5 flex flex-col  justify-center gap-1 md:gap-3 ">
          <div className="md:flex items-center justify-between ">
            <div className=" font-bold md:w-[60%] text-2xl text-gray-700">
              {data.pName}
            </div>
            <div>
              <StarCalc rating={Math.floor(Number(data.rating))} />
            </div>
          </div>
          <div className=" text-xs md:text-sm font-medium text-gray-500">
            {data.description}
          </div>
          <div className="overflow-auto flex-1">
            <div className="font-medium text-lg md:text-xl text-gray-700 md:mb-3 ">
              Ingredients:
            </div>
            <ul type="circle">
              {data.features.map((item) => (
                <div
                  className="flex md:gap-3 text-xs md:text-sm text-gray-600 items-center"
                  key={item}
                >
                  <LuDot />
                  <li>{item}</li>
                </div>
              ))}
            </ul>
          </div>
          <div className="flex justify-between items-center ">
            <div className="font-bold text-orange-500 text-xl md:text-2xl">
              $ {data.price}
            </div>
            {userData.role == "admin" ? (
              <OrangeButton
                title={"Update"}
                onClick={() => navigateFunction()}
              />
            ) : (
              <AddToCart
                cartBoolean={cartBoolean}
                onClick={() => {
                  setCartBoolean(true), addItemToCart();
                }}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
