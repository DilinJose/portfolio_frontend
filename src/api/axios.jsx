import axios from "axios";



export const instance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 10000,
  withCredentials: true, // Ensure cookies are included in requests
  headers: { "Content-Type": "application/json" },
});

