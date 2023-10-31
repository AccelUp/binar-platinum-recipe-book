const initialState = {
  user: {},
  access_token: null,
  refresh_token: null,
  authLoading: false,
  isError: false,
  error: null,
  showModal: false,
  modalMessage: {},
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_PENDING":
    case "REGIST_PENDING":
      console.log("loading...");
      return {
        ...state,
        authLoading: true,
      };
    case "LOGIN_SUCCESS":
      // console.log(action.payload)
      return {
        ...state,
        user: action.payload.user,
        access_token: action.payload.access_token,
        refresh_token: action.payload.refresh_token,
        authLoading: false,
      };
    case "LOGIN_FAILED":
      console.log({ error: action.error });
      return {
        ...state,
        error: action.error,
        isError: true,
        showModal: true,
        modalMessage: action.modalMessage,
        authLoading: false,
      };
    case "LOGOUT":
      // console.log({ action });
      return {
        ...state,
        user: {},
        isError: false,
        authLoading: false,
      };
    case "REGIST_SUCCESS":
      console.log(action);
      return {
        ...state,
        user: action.payload.user,
        access_token: action.payload.access_token,
        refresh_token: action.payload.refresh_token,
        showModal: true,
        modalMessage: action.modalMessage,
        authLoading: false,
      };
    case "REGIST_FAILED":
      // console.log(action.modalMessage,action.error)
      return {
        ...state,
        error: action.error,
        isError: true,
        user: null,
        authLoading: false,
        showModal: true,
        modalMessage: action.modalMessage,
      };
    case "ACTIVATION_SUCCESS":
      return {
        ...state,
        showModal: true,
        modalMessage: action.modalMessage,
        authLoading: false,
      };
    case "UPDATE_USER_SUCCESS":
      // console.log(action.payload)
      console.log("update success");
      return {
        ...state,
        user: action.payload,
        authLoading: false,
      };
    case "UPDATE_USER_FAILED":
      // console.log(action.error)
      return {
        ...state,
        error: action.error,
        isError: true,
        showModal: true,
        modalMessage: action.modalMessage,
        authLoading: false,
      };
    case "SHOW_MODAL":
      console.log(action.modalMessage);
      return {
        ...state,
        showModal: true,
        modalMessage: action.modalMessage,
      };
    case "CLOSE_MODAL":
      return {
        ...state,
        showModal: false,
      };
    default:
      return state;
  }
};
