import axios from "axios";

const api = axios.create({
  baseURL: "https://api.themoviedb.org/3",
});

api.interceptors.request.use(
  async (config) => {
    const api_key = "&api_key=27495bf0d364fe0cc23f7fe9118b89e4&language=pt-br";
    config.url += api_key;
    return config;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default api;
