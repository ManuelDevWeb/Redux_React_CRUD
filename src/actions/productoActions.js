/* Un action es un objeto js, tienen un tipo y payload (datos). Estos se llaman 
   desde los componentes y se disparan con un dispatch() hacia el reducer
*/

// Importando los types
import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
  COMENZAR_DESCARGA_PRODUCTOS,
  DESCARGA_PRODUCTO_EXITO,
  DESCARGA_PRODUCTO_ERROR,
} from "../types";

// Importando cliente Axios
import { clienteAxios } from "../config/axios";

// Sweet alert
import Swal from "sweetalert2";

// Crear nuevos productos
export const crearNuevoProductoAction = (producto) => {
  return async (dispatch) => {
    // Dispatch ejecuta las acciones hacia el reducer (Reducer actualiza state)
    dispatch(agregarProducto());
    try {
      // Insertar en la API o DB
      await clienteAxios.post("/productos", producto);

      // Dispatch ejecuta las acciones hacia el reducer (Reducer actualiza state)
      dispatch(agregarProductoExito(producto));

      // Alerta de exito
      Swal.fire("Correcto", "El producto se agrego correctamente", "success");
    } catch (error) {
      console.log(error);
      // Dispatch ejecuta las acciones hacia el reducer (Reducer actualiza state)
      dispatch(agregarProductoError(true));

      // Alerta de error
      Swal.fire({
        icon: "error",
        title: "Hubo un error",
        text: "Hubo un error, intenta de nuevo",
      });
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

// Descargar productos de la DB
export const obtenerProductosAction = () => {
  return async (dispatch) => {
    // Dispatch ejecuta las acciones hacia el reducer (Reducer actualiza state)
    dispatch(descargarProductos());

    try {
      // Consulta a la API
      const { data } = await clienteAxios.get("/productos");
      // Dispatch ejecuta las acciones hacia el reducer (Reducer actualiza state)
      dispatch(descargaProductosExitosa(data));
    } catch (error) {
      console.log(error);
      // Dispatch ejecuta las acciones hacia el reducer (Reducer actualiza state)
      dispatch(descargaProductosError());
    }
  };
};

// Funcion que envia el type y payload para actualizar el loading dentro del reducer
const descargarProductos = () => ({
  // Tipo de accion
  type: COMENZAR_DESCARGA_PRODUCTOS,
  // Data que modificara el state
  payload: true,
});

// Funcion que envia el type y payload para actualizar los productos dentro del reducer
const descargaProductosExitosa = (productos) => ({
  // Tipo de accion
  type: DESCARGA_PRODUCTO_EXITO,
  // Data que modificara el state
  payload: productos,
});

// Funcion que envia el type y payload para actualizar el error dentro del reducer
const descargaProductosError = () => ({
  // Tipo de accion
  type: DESCARGA_PRODUCTO_ERROR,
  // Data que modificara el state
  payload: true,
});
