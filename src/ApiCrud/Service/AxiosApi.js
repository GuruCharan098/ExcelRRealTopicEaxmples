import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:3000/users",
});

// GET
export const getUsers = async () => (await api.get("/")).data;

// POST
export const addUsers = async (user) => (await api.post("/", user)).data;

// PUT
export const updateUsers = async (id, user) =>
  (await api.put(`/${id}`, user)).data;

// DELETE
export const deleteUsers = async (id) =>
  (await api.delete(`/${id}`)).data;