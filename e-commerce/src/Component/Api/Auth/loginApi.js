import mainEndPoint from "../mainEndPoint";
import SecureFetch from "./ApiConfiguration";

const loginApi = async (userInfo, navigate, setErr) => {
  const request = await SecureFetch(
    mainEndPoint + "/user/login",
    "Post",
    {
      "content-type": "application/json",
    },
    userInfo
  );
  const response = await request.json();
  if (request.status == 200) {
    localStorage.setItem("token", response.response.token);
    localStorage.setItem("userDetail", JSON.stringify(response.response));
    localStorage.setItem("prevLogin", "true");
    window.location.href = "/";
  } else {
    setErr(3);
  }
};
export default loginApi;
