import cancelOrderData from "../../CoustomFunction/cancelOrderData";
import updateOrderData from "../../CoustomFunction/updateOrderData";
import SecureFetch from "../Auth/ApiConfiguration";
import mainEndPoint from "../mainEndPoint";

const cancelOrderApi = async (id, orderData, setOrderData) => {
  try {
    const data = { id: id };
    const request = await SecureFetch(
      mainEndPoint + "/order",
      "DELETE",
      {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data
    );
    if (request.status == 200) {
      cancelOrderData(id, setOrderData, orderData);
      alert("The Order Has been cancelled");
    } else {
      alert("Something Went wrong!, please try again");
    }
  } catch (error) {
    console.log(error);
  }
};
export default cancelOrderApi;
