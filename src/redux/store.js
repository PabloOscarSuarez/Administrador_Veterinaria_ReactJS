import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

//importo reducerPrincipal from './reducers'
import reducerPrincipal from "./reducers";

//todos los cambios que vengan al state vendran del reducer

const middleware = [thunk];

//agregar local Storage
const storageState = localStorage.getItem("citas")
  ? JSON.parse(localStorage.getItem("citas"))
  : [];

const store = createStore(
  reducerPrincipal,
  storageState,
  compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
