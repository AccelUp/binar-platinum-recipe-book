import axios from "axios";
const serverLogin = import.meta.env.VITE_SERVER_AUTH;
const serverRegister = import.meta.env.VITE_SERVER_USER;

export const login = (inputData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING" });
    const response = await axios.post(serverLogin + `/login`, inputData);
    localStorage.setItem("token", response.data.token);
    console.log("login success");
    dispatch({ type: "LOGIN_SUCCESS", payload: response.data });
    navigate("/");
    return response; // Return the response to the caller
  } catch (error) {
    console.error("error", inputData, error);
    dispatch({
      type: "LOGIN_FAIL",
      error: error,
      modalMessage: {
        header: "Login Failed",
        text: error.response.data.message,
      },
    });
    throw error; // Throw the error to the caller
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
        text: "Registration successful. You can now log in.",
      },
    });
    navigate("/");
    return response; // Return the response to the caller
  } catch (error) {
    console.error("error", inputData, error);
    dispatch({
      type: "REGISTER_FAIL",
      error: error,
      modalMessage: {
        header: "Register Failed",
        text: error.response.data.message,
      },
    });
    throw error; // Throw the error to the caller
  }
};
