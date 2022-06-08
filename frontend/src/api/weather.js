import axios from "axios"

export function getWeather(lat, lon, units) {
  if (units == undefined) units = "metric"
  let url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${units}&appid=c6e3b6f2e6ed3e83a0db1993dd2b4b45`
  return axios.get(url)
}
