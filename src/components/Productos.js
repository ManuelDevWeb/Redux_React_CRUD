/* eslint-disable react-hooks/exhaustive-deps */
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";

// Importando Actions de Redux
import { obtenerProductosAction } from "../actions/productoActions";

// Importando Componentes
import { Producto } from "./Producto";

const Productos = () => {
  // useDispatch permite ejecutar una accion
  const dispatch = useDispatch();

  // useEffect se ejecuta al cargar componente
  useEffect(() => {
    // Consulta la api
    const cargarProductos = () => {
      dispatch(obtenerProductosAction());
    };

    cargarProductos();
  }, []);

  // useSelector permite acceder al state del store
  const productos = useSelector((state) => state.productos.productos);
  const error = useSelector((state) => state.productos.error);
  const cargando = useSelector((state) => state.productos.loading);

  return (
    <>
      <h2 className="text-center my-5">Listado de Productos</h2>

      {
        // Validando si hay error
        error ? (
          <p className="font-weight-bold alert alert-danger text-center mt-4">
            Hubo un error
          </p>
        ) : null
      }

      {
        // Validando si esta cargando
        cargando ? <p className="text-center">Cargando...</p> : null
      }

      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {
            // Validando si hay productos en el state
            productos.length === 0
              ? "No hay productos"
              : productos.map((producto) => (
                  <Producto key={producto.id} producto={producto} />
                ))
          }
        </tbody>
      </table>
    </>
  );
};

export { Productos };
