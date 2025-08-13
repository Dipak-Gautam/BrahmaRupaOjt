import SecureFetch from "../Auth/ApiConfiguration";
import mainEndPoint from "../../Api/mainEndPoint";
import updateOrderData from "../../CoustomFunction/updateOrderData";

const updateOrderApi = async (id, orderData, setOrderData) => {
  try {
    const data = { id: id, status: "Delivered" };
    const request = await SecureFetch(
      mainEndPoint + "/order",
      "PATCH",
      {
        "content-type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data
    );
    const response = await request.json();
    if (request.status == 200) {
      updateOrderData(response.response, orderData, setOrderData);
    } else {
      alert("SOmething went wrong!, please try again");
    }
  } catch (error) {
    console.log("error", error);
  }
};
export default updateOrderApi;
