import axios from "axios";

export const api = axios.create({
  baseURL: "https://api.openweathermap.org/data/2.5",
  params: {
    lang: "pt_br",
    units: "metric",
    appid: process.env.WEATHER_APP_ID,
  },
});
