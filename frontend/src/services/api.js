import axios from "axios";
import { logout } from "./authService";

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

function refresh() {
  const user = JSON.parse(localStorage.getItem("user"));
  return user ? user.refresh : null;
}

api.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("user"))?.access;
    if (token) {
      config.headers["Authorization"] = "JWT " + token;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (res) => {
    return res;
  },
  async (err) => {
    const originalConfig = err.config;
    console.log(err.response);
    if (
      originalConfig.url === "/auth/jwt/verify/" &&
      err.response.status === 401
    ) {
      logout();
    } else if (originalConfig.url !== "/auth/jwt/create/" && err.response) {
      // if access Token is expired
      if (err.response.status === 401 && !originalConfig._retry) {
        originalConfig._retry = true;
        try {
          const rs = await api.post("/auth/jwt/refresh/", {
            refresh: refresh(),
          });

          let user = JSON.parse(localStorage.getItem("user"));
          user.access = rs.data.access;
          localStorage.setItem("user", JSON.stringify(user));

          return api(originalConfig);
        } catch (_error) {
          return Promise.reject(_error);
        }
      }
    }
    return Promise.reject(err);
  }
);

export default api;
