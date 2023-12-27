import axios from "axios";

const BASE_API_URL = "http://localhost:8008/";

const instanceAxios = axios.create({
  baseURL: BASE_API_URL,
  timeout: 5000,
});
export default instanceAxios;
