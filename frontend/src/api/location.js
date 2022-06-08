import axios from "axios"

export function getCoords(cityName) {
  let url = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=c6e3b6f2e6ed3e83a0db1993dd2b4b45`
  return axios.get(url)
}
