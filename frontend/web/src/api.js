import axios from "axios";

export const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});

// ✅ Request interceptor
api.interceptors.request.use((config) => {
  const token = localStorage.getItem("access");

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

// ✅ Response interceptor (refresh token)
api.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalRequest = err.config;

    if (err.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refresh = localStorage.getItem("refresh");

        const res = await axios.post(
          "http://127.0.0.1:8000/api/user/token/refresh/",
          { refresh }
        );

        localStorage.setItem("access", res.data.access);

        originalRequest.headers.Authorization = `Bearer ${res.data.access}`;
        return api(originalRequest);

      } catch (error) {
        localStorage.clear();
        window.location.href = "/login";
      }
    }

    return Promise.reject(err);
  }
);