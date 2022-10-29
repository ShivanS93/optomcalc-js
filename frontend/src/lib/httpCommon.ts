import axios from "axios";

export const apiClient = axios.create({
  baseURL: "http://0.0.0.0:8123",
  headers: {
    "Content-type": "application/json",
  },
});
