import React from "react";
import totalAmount from "../../CoustomFunction/totalAmount";
import OrangeButton from "../../Button/OrangeButton";
import { LuDot } from "react-icons/lu";
import generateCartItem from "../../CoustomFunction/generateCartItem";
import { useNavigate } from "react-router-dom";
import addOrderApi from "../../Api/order/addOrderApi";

const CheckOutModal = ({ visible, setVisible, cartData }) => {
  const navigate = useNavigate();
  const handelOrder = () => {
    const tempData = {
      totalAmount: totalAmount(cartData),
      items: generateCartItem(cartData),
    };
    addOrderApi(tempData, navigate);
  };

  return (
    <div
      className={`${
        visible ? "flex" : "hidden"
      } fixed inset-0 backdrop-blur-sm justify-center items-center`}
      onClick={() => setVisible(false)}
    >
      <div
        className="w-96 max-h-[80vh] p-5 rounded-md border border-gray-400 bg-white overflow-auto flex flex-col shadow-xl shadow-black/50"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="text-center font-semibold text-xl text-orange-500">
          Checkout
        </div>
        <div>
          <div className="text-lg text-gray-600 font-medium">Items:</div>
          {cartData.map((item) => (
            <div
              className="flex justify-between text-sm text-gray-700 mt-0.5"
              key={item._id}
            >
              <div className="flex-1 flex items-center font-medium">
                <LuDot size={20} /> {item.pName}
              </div>
              <div className="w-14">{item.quantity}</div>
              <div className="w-16 text-end">{item.price}</div>
            </div>
          ))}
          <div className="flex justify-between font-medium text-gray-800">
            <div>Total</div>
            <div className="w-16 text-end">${totalAmount(cartData)}</div>
          </div>
        </div>
        <div className="flex justify-center border-t border-black my-2 pt-4">
          <OrangeButton
            title={"Proceed Checkout"}
            onClick={() => handelOrder()}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckOutModal;
