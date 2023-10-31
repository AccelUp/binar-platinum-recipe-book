import axios from "axios";
const serverLogin = import.meta.env.VITE_SERVER_AUTH;
const serverRegister = import.meta.env.VITE_SERVER_USER;

export const login = (inputData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING" });
    const response = await axios.post(serverLogin + `/login`, inputData);

    const access_token = response.data.data.access_token;
    const refresh_token = response.data.data.refresh_token;

    if (access_token && refresh_token) {
      localStorage.setItem("access_token", access_token);
      localStorage.setItem("refresh_token", refresh_token);
      console.log("Login Success");
    } else {
      console.error("Access token or refresh token missing in the response.");
    }

    dispatch({
      type: "LOGIN_SUCCESS",
      payload: { ...response.data, access_token, refresh_token },
    });
    navigate("/dashboard");
    return response;
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
    throw error;
  }
};

export const register = (inputData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: "LOADING" });
    const response = await axios.post(serverRegister + `/register`, inputData);
    localStorage.setItem("access_token", response.data.access_token);
    console.log("Register Success");
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
export const logout = () => (dispatch) => {
  localStorage.removeItem("access_token");
  localStorage.removeItem("refresh_token");
  // localStorage.removeItem("access_refresh");

  dispatch({ type: "LOGOUT" });
};
