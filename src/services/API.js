import axios from "axios";

export const BASE_URL = "http://localhost:4000";
export let page = 1;
export const limit = 8;

const instance = axios.create({
  baseURL: BASE_URL,
});

instance.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    limit: limit,
  };
  return config;
});

export const fetchAPI = async (page) => {
  const response = await instance.get("/", {
    params: {
      page: page,
    },
  });
  return response.data;
};

instance.interceptors.request.use((config) => {
  config.headers.Authorization = window.localStorage.getItem('token');
  return config;
})

export default instance;