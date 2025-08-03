import SecureFetch from "./ApiConfiguration";

const loginApi = async (userInfo, navigate, setErr) => {
  const request = await SecureFetch(
    "http://localhost:3000/user/login",
    "Post",
    {
      "content-type": "application/json",
    },
    userInfo
  );
  const response = await request.json();
  if (request.status == 200) {
    console.log("response", response);
    localStorage.setItem("token", response.response.token);
    localStorage.setItem("userDetail", JSON.stringify(response.response));
    navigate("/");
  } else {
    setErr(3);
  }
};
export default loginApi;
