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
  OBTENER_PRODUCTO_ELIMINAR,
  PRODUCTO_ELIMINADO_ERROR,
  PRODUCTO_ELIMINADO_EXITO,
  OBTENER_PRODUCTO_EDITAR,
  COMENZAR_EDICION_PRODUCTO,
  PRODUCTO_EDITADO_ERROR,
  PRODUCTO_EDITADO_EXITO,
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

// Seleccionar y eliminar producto
export const borrarProductoAction = (id) => {
  return async (dispatch) => {
    // Dispatch ejecuta las acciones hacia el reducer (Reducer actualiza state)
    dispatch(obtenerProductoEliminar(id));

    try {
      // Eliminando de la API
      await clienteAxios.delete(`/productos/${id}`);
      // Dispatch ejecuta las acciones hacia el reducer (Reducer actualiza state)
      dispatch(eliminarProductoExito());
      // Si se elimina mostramos la alerta
      Swal.fire(
        "Eliminado!",
        "El producto se elimino correctamente.",
        "success"
      );
    } catch (error) {
      // Dispatch ejecuta las acciones hacia el reducer (Reducer actualiza state)
      dispatch(eliminarProductoError());
    }
  };
};

// Funcion que envia el type y payload para actualizar el producto a eliminar dentro del reducer
const obtenerProductoEliminar = (id) => ({
  // Tipo de accion
  type: OBTENER_PRODUCTO_ELIMINAR,
  // Data que modificara el state
  payload: id,
});

// Funcion que envia el type para eliminar el producto del statate productos dentro del reducer
const eliminarProductoExito = () => ({
  // Tipo de accion
  type: PRODUCTO_ELIMINADO_EXITO,
  // Data que modificara el state (En este caso no porque ya lo tenemos en la variable productoElimiar del state)
});

// Funcion que envia el type y payload para actualizar el error dentro del reducer
const eliminarProductoError = () => ({
  // Tipo de accion
  type: PRODUCTO_ELIMINADO_ERROR,
  // Data que modificara el state
  payload: true,
});

// Obtener producto a editar
export const obtenerProductoEditarAction = (producto) => {
  return async (dispatch) => {
    // Dispatch ejecuta las acciones hacia el reducer (Reducer actualiza state)
    dispatch(obtenerProductoEditar(producto));
  };
};

// Funcion que envia el type y payload para actualizar el producto a editar dentro del reducer
const obtenerProductoEditar = (producto) => ({
  // Tipo de accion
  type: OBTENER_PRODUCTO_EDITAR,
  // Data que modificara el state
  payload: producto,
});

// Editar producto en la DB
export const editarProductoAcion = (newProducto) => {
  return async (dispatch) => {
    // Dispatch ejecuta las acciones hacia el reducer (Reducer actualiza state)
    dispatch(editarProducto());
    try {
      // Actualizando producto en la API
      await clienteAxios.put(`/productos/${newProducto.id}`, newProducto);
      // Dispatch ejecuta las acciones hacia el reducer (Reducer actualiza state)
      dispatch(editarProductoExito(newProducto));
    } catch (error) {
      // Dispatch ejecuta las acciones hacia el reducer (Reducer actualiza state)
    }
  };
};

// Funcion que envia el type y payload para actualizar el state
const editarProducto = () => ({
  // Tipo de accion
  type: COMENZAR_EDICION_PRODUCTO,
});

// Funcion que envia el type y payload para actualizar los productos con el nuevo producto editado
const editarProductoExito = (newProducto) => ({
  // Tipo de accion
  type: PRODUCTO_EDITADO_EXITO,
  // Data que modificara el state
  payload: newProducto,
});
