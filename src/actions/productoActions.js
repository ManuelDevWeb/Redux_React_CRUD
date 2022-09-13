// Un action es un objeto js, tienen un tipo y payload (datos). Ejecuta un dispatch con la accion al store

// Importando los types
import {
  AGREGAR_PRODUCTO,
  AGREGAR_PRODUCTO_EXITO,
  AGREGAR_PRODUCTO_ERROR,
} from "../types";

// Crear nuevos productos
export const crearNuevoProductoAction = (producto) => {
  return () => {
    console.log(producto);
  };
};
