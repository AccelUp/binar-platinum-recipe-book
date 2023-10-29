import axios from "axios";
const url = import.meta.env.VITE_SERVER_URL;

export const login = (inputData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING" });
    const response = await axios.post(url + `/login`, inputData);
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
    const response = await axios.post(url + `/register`, inputData);
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
