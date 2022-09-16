// Axios
import axios from "axios";

// Config Axios
const clienteAxios = axios.create({
  baseURL: " http://localhost:4000",
});

export { clienteAxios };
