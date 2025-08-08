import SecureFetch from "../Auth/ApiConfiguration";
import mainEndPoint from "../mainEndPoint";

const changePassword = async (tempData) => {
  const request = await SecureFetch(
    mainEndPoint + "/user/",
    "PATCH",
    {
      "content-type": "application/json",
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    },
    tempData
  );
  if (request.status == 200) {
    alert("Password Changed sucessfully");
  } else {
    alert("something went wrong please try again");
  }
};
export default changePassword;
