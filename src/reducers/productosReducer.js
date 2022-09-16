/* eslint-disable import/no-anonymous-default-export */
// Importando los types
import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTO_EXITO,
  DESCARGA_PRODUCTO_ERROR,
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
    case COMENZAR_DESCARGA_PRODUCTOS:
    case AGREGAR_PRODUCTO:
      return {
        ...state,
        loading: action.payload,
      };
    case AGREGAR_PRODUCTO_EXITO: {
      return {
        ...state,
        loading: false,
        productos: [...state.productos, action.payload],
      };
    }
    case DESCARGA_PRODUCTO_ERROR:
    case AGREGAR_PRODUCTO_ERROR: {
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    }
    case DESCARGA_PRODUCTO_EXITO: {
      return {
        ...state,
        loading: false,
        error: null,
        productos: action.payload,
      };
    }
    default:
      return state;
  }
}
