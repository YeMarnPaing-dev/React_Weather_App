import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5"
});

export const apiKey = "5c2067f12edcc48c1fa33fcd96c62511"
