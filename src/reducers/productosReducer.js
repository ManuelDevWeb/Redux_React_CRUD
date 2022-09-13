// Importando los types
import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
} from "../types";

// Cada Reducer tiene su propio state
const initialState = {
  productos: [],
  error: null,
  loading: false,
};

// Si el store envia el state toma ese, sino toma el definido en este reducer
export default function (state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}
