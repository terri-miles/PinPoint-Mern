import axios from "axios";

const apiRequest = axios.create({
  baseURL: "https://pinpoint-api.onrender.com/api",
  withCredentials: true,
});

export default apiRequest;