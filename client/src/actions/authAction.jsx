import axios from "axios";
const serverLogin = import.meta.env.VITE_SERVER_URL;
const serverRegister = import.meta.env.VITE_SERVER_USER;

export const login = (inputData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING" });
    const response = await axios.post(serverLogin + `/login`, inputData);
    localStorage.setItem("token", response.data.token);
    console.log("login success");
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
    navigate("/");
  } catch (erorr) {
    console.log("erorr", inputData, erorr);
    dispatch({
      type: "LOGIN_FAIL",
      erorr: erorr,
      modalMessage: {
        header: "Login Failed",
        text: erorr.response.data.message,
      },
    });
  }
};

export const register = (inputData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING" });
    const response = await axios.post(serverRegister + `/register`, inputData);
    localStorage.setItem("token", response.data.token);
    console.log("register success");
    dispatch({
      type: "REGISTER_SUCCESS",
      payload: response.data,
      modalMessage: {
        header: "Register Success",
        text: erorr.response.data,
      },
    });
    navigate("/");
  } catch (erorr) {
    console.log("erorr", inputData, erorr);
    dispatch({
      type: "REGISTER_FAIL",
      erorr: erorr,
      modalMessage: {
        header: "Register Failed",
        text: erorr.response.data.message,
      },
    });
  }
};
