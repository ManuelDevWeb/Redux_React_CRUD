// Los reducers son funciones que saben que hacer con las acciones y el payload

import { combineReducers } from "redux";

// Importando Reducers
import productosReducer from "./productosReducer";

export default combineReducers({
  productos: productosReducer,
});
