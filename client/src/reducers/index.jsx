import { combineReducers } from "redux";
import { authReducer } from "./authReducer";
import { recipeReducer } from "./recipeReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  recipes: recipeReducer,
});

export default rootReducer;
