/* eslint-disable import/no-anonymous-default-export */
// Importando los types
import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTO_EXITO,
  DESCARGA_PRODUCTO_ERROR,
  OBTENER_PRODUCTO_ELIMINAR,
  PRODUCTO_ELIMINADO_ERROR,
  PRODUCTO_ELIMINADO_EXITO,
  OBTENER_PRODUCTO_EDITAR,
  PRODUCTO_EDITADO_EXITO,
} from "../types";

// Cada Reducer tiene su propio state
const initialState = {
  productos: [],
  error: null,
  loading: false,
  productoEliminar: null,
  productoEditar: null,
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
    case AGREGAR_PRODUCTO_ERROR:
    case PRODUCTO_ELIMINADO_ERROR: {
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
    case OBTENER_PRODUCTO_ELIMINAR: {
      return {
        ...state,
        productoEliminar: action.payload,
      };
    }
    case PRODUCTO_ELIMINADO_EXITO: {
      return {
        ...state,
        productos: state.productos.filter(
          (producto) => producto.id !== state.productoEliminar
        ),
        productoEliminar: null,
      };
    }
    case OBTENER_PRODUCTO_EDITAR: {
      return {
        ...state,
        productoEditar: action.payload,
      };
    }
    case PRODUCTO_EDITADO_EXITO: {
      return {
        ...state,
        productoEditar: null,
        productos: state.productos.map((producto) =>
          producto.id === action.payload.id ? action.payload : producto
        ),
      };
    }
    default:
      return state;
  }
}
