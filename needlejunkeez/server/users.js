import axios from "axios";

const API = axios.create({
  baseURL: "/api/users",
  withCredentials: true,
});

export const getUsers = () => {
  return API.get("/");
};

export const getUserById = (id) => {
  return API.get(`/${id}`);
};

export const createUser = (userData) => {
  return API.post("/", userData);
};

export const login = (userData) => {
  return API.post("/login", userData);
};

export const logout = () => {
  return API.post("/logout");
};

export const updateUser = (id, userData) => {
  return API.put(`/${id}`, userData);
};

export const deleteUser = (id) => {
  return API.delete(`/${id}`);
};
