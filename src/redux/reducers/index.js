import { combineReducers } from "redux";
import citasReducer from "./citasReducer";

//MIS REDUCER ME DEVUELVEN MI SIGUIENTE ESTADO
export default combineReducers({
  citas: citasReducer
});
