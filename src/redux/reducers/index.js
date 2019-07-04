import { combineReducers } from "redux";
import citasReducer from "./citasReducer";
import { errorReducer } from "./errorReducer";

//MIS REDUCER ME DEVUELVEN MI SIGUIENTE ESTADO
export default combineReducers({
  citas: citasReducer,
  error: errorReducer
});
