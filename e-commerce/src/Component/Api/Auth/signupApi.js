import mainEndPoint from "../mainEndPoint";
import SecureFetch from "./ApiConfiguration";

const signupApi = async (userDetail, navigate, setStage, setUserDetail) => {
  const request = await SecureFetch(
    mainEndPoint + "/user/signup",
    "Post",
    {
      "content-type": "application/json",
    },
    userDetail
  );
  const response = await request.json();
  if (request.status == 200) {
    localStorage.setItem("token", response.response.token);
    localStorage.setItem("userDetail", JSON.stringify(response.response));
    localStorage.setItem("prevLogin", "true");

    window.location.href = "/";
  } else {
    setUserDetail({
      userName: "",
      contactNumber: "",
      email: "",
      password: "",
      city: "",
      street: "",
      deliveryDescription: "",
    });
    setStage(0);
  }
};
export default signupApi;
