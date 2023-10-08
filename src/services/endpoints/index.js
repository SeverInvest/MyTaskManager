import api from "../api";

const endpoints = {
  getTasks: async () => await api.get("/tasks"),
  getMe: async () => await api.get("/users/me"),
  registerUser: async (name, email, password) => await api.post("/signup", { name, email, password }),
  loginUser: async (email, password) => await api.post("/signin", { email, password }),
  patchUser: async (name, email) => await api.patch("users/me", { name, email }),
  setTask: async task => await api.post("/tasks", { task }),
  updateTask: async taskId => await api.patch(`/tasks/${taskId}`),
  deleteTask: async taskId => await api.delete(`/tasks/${taskId}`),
};

export default endpoints;
