import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

// Sweet alert
import Swal from "sweetalert2";

// Importando Actions de Reducer
import {
  borrarProductoAction,
  obtenerProductoEditarAction,
} from "../actions/productoActions";

const Producto = ({ producto }) => {
  const { nombre, precio, id } = producto;

  // useDispatch permite ejecutar una accion
  const dispatch = useDispatch();

  // Instanciando useNavigate para redireccionar a otras rutas
  const navigate = useNavigate();

  // Funcion para eliminar producto y llamar el action
  const confirmarEliminarProducto = (id) => {
    // Preguntar al usuario
    Swal.fire({
      title: "Estas seguro?",
      text: "Un producto que se elimina no se puede recuperar",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        // Llamamos action
        dispatch(borrarProductoAction(id));
      }
    });
  };

  // Funcion que redirige de forma programada
  const redireccionarEdicion = (producto) => {
    // Llamamos action
    dispatch(obtenerProductoEditarAction(producto));
    navigate(`/productos/editar/${producto.id}`);
  };

  return (
    <tr>
      <td>{nombre}</td>
      <td>
        <span className="font-weight-bold">$ {precio}</span>
      </td>
      <td className="acciones">
        <button
          type="button"
          className="btn btn-primary mr-2"
          onClick={() => redireccionarEdicion(producto)}
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => confirmarEliminarProducto(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};

export { Producto };
