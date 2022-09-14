// Encargado del state de la aplicacion completa, lo comparte con los demas componentes

import { configureStore } from "@reduxjs/toolkit";
// import { applyMiddleware, compose } from "redux";
// import thunk from "redux-thunk";

// Importando Reducer
import reducer from "./reducers";

// Creando el store
const store = configureStore({ reducer });

export default store;
