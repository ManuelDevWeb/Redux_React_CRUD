import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

// Importando Actions de Redux
import { editarProductoAcion } from "../actions/productoActions";

const EditarProducto = () => {
  // State de producto
  const [producto, setProducto] = useState({
    nombre: "",
    precio: 0,
  });

  // useDispatch permite ejecutar una accion
  const dispatch = useDispatch();

  // useSelector permite acceder al state del store
  const productoEditar = useSelector((state) => state.productos.productoEditar);

  // Instanciando useNavigate para redireccionar a otras rutas
  const navigate = useNavigate();

  // useEffect que actualiza el state de producto cada que cambia el producto a editar
  useEffect(() => {
    setProducto(productoEditar);
  }, [productoEditar]);

  // Leer los datos del formulario cada que escriban en el formulario
  const onChangeFormulario = (e) => {
    setProducto({
      ...producto,
      [e.target.name]: e.target.value,
    });
  };

  const { nombre, precio } = producto;

  // Funcion para enviar producto editado
  const submitProductoEditar = (e) => {
    e.preventDefault();

    dispatch(editarProductoAcion(producto));
    navigate("/");
  };

  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar Producto
            </h2>

            <form
              // Funcion que se ejecuta al enviar el formulario
              onSubmit={submitProductoEditar}
            >
              {/* Campo nombre producto */}
              <div className="form-group">
                <label>Nombre Producto</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="nombre"
                  value={nombre}
                  onChange={onChangeFormulario}
                />
              </div>

              {/* Campo precio producto */}
              <div className="form-group">
                <label>Precio Producto</label>
                <input
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="precio"
                  value={precio}
                  onChange={onChangeFormulario}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Guardar Cambios
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export { EditarProducto };
