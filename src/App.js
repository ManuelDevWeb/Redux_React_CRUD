// React Router
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Components
import { Header } from "./components/Header";
import { Productos } from "./components/Productos";
import { NuevoProducto } from "./components/NuevoProducto";
import { EditarProducto } from "./components/EditarProducto";

// Redux
import { Provider } from "react-redux";
// Store
import store from "./store";

function App() {
  return (
    <Router>
      {/* Permitiendo el acceso de los componentes a Redux */}
      <Provider store={store}>
        {/* Header estara disponible en todas las paginas puesto esta fuera de Switch */}
        <Header />

        <div className="container">
          <Routes>
            {/* Pagina principal, carga componente Productos */}
            <Route exact path="/" element={<Productos />} />
            {/* Pagina nuevo producto, carga componente NuevoProducto */}
            <Route exact path="/productos/nuevo" element={<NuevoProducto />} />
            {/* Pagina editar producto, carga componente EditarProducto */}
            <Route
              exact
              path="/productos/editar/:id"
              element={<EditarProducto />}
            />
          </Routes>
        </div>
      </Provider>
    </Router>
  );
}

export default App;
