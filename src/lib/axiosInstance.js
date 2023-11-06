import axios from "axios";

export const client = axios.create({
  baseURL: 'http://localhost:8000',
  withCredentials: true,
  timeout: 3000,
  xsrfHeaderName: "X-XSRF-TOKEN"
})
