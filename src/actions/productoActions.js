/* Un action es un objeto js, tienen un tipo y payload (datos). Estos se llaman 
   desde los componentes y se disparan con un dispatch() hacia el reducer
*/

// Importando los types
import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
} from "../types";

// Crear nuevos productos
export const crearNuevoProductoAction = (producto) => {
  // Dispatch ejecuta las acciones
  return (dispatch) => {
    dispatch(agregarProducto());

    try {
      dispatch(agregarProductoExito(producto));
    } catch (error) {
      dispatch(agregarProductoError(true));
    }
  };
};

// Funcion que envia el type y payload para actualizar el loading dentro del reducer
const agregarProducto = () => ({
  // Tipo de accion
  type: AGREGAR_PRODUCTO,
  // Data que modificara el state
  payload: true,
});

// Funcion que envia el type y payload para actualizar los productos dentro del reducer
const agregarProductoExito = (producto) => ({
  // Tipo de accion
  type: AGREGAR_PRODUCTO_EXITO,
  // Data que modificara el state
  payload: producto,
});

// Funcion que envia el type y payload para actualizar el error dentro del reducer
const agregarProductoError = (estado) => ({
  // Tipo de accion
  type: AGREGAR_PRODUCTO_ERROR,
  // Data que modificara el state
  payload: estado,
});
