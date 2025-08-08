import SecureFetch from "../Auth/ApiConfiguration";
import mainEndPoint from "../mainEndPoint";

const deleteUserApi = async () => {
  const request = await SecureFetch(mainEndPoint + "/user/", "DELETE", {
    "content-type": "application/json",
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  });
  if (request.status == 200) {
    alert("account deleted sucessfully");
    localStorage.removeItem("token");
    localStorage.removeItem("userDetails");
    localStorage.removeItem("cart1");
    window.location.href = "/";
  } else {
    alert("Something went wrong please try again");
  }
};
export default deleteUserApi;
