import axios from "axios";

axios.defaults.withCredentials = true
axios.defaults.withXSRFToken = true

const api = axios.create({
  // baseURL: import.meta.env.VITE_BASE_URL,
  baseURL: 'https://cm2.stpmtelecom.com', // 👈 IMPORTANT
  headers: {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  },
  withCredentials: true,
  withXSRFToken: true
});
// ✅ Attach token automatically
api.interceptors.request.use(config => {
  const token = localStorage.getItem("token");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

export default api;