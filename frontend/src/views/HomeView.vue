<script>
import { onMounted, ref } from "vue"

import { getCoords } from "@/api/location"
import { getWeather } from "@/api/weather"

import WeatherCard from "@/components/WeatherCard"

export default {
  name: "HomeView",
  components: {
    WeatherCard,
  },
  setup() {
    const newCity = ref("")
    const cityWeatherList = ref([])

    async function addNewCity(city) {
      // Location
      let locationRes = await getCoords(city)
      if (locationRes.data.length == 0) return // return if city doesnt exist
      let locationData = locationRes.data[0]

      let name = locationData.name
      let country = locationData.country

      // Weather
      let weatherRes = await getWeather(locationData.lat, locationData.lon)
      let weatherData = weatherRes.data

      let temperature = weatherData.main.temp.toFixed(1) + "°c"
      let humidity = weatherData.main.humidity + "%"
      let type = weatherData.weather[0].main

      // Add Weather
      cityWeatherList.value.push({
        name: name,
        country: country,
        temperature: temperature,
        humidity: humidity,
        type: type,
      })
    }

    onMounted(addNewCity("Amsterdam"))

    return {
      // ref
      newCity,
      cityWeatherList,
      // functions
      addNewCity,
    }
  },
}
</script>

<template>
  <div style="padding: 5px 10px">
    <div
      style="
        display: flex;
        flex-direction: column;
        align-items: center;
        height: 100%;
      "
    >
      <div>
        <br />

        <h1 style="text-align: center">Weather App</h1>

        <br />

        <form @submit.prevent="addNewCity(newCity)">
          <!-- Input -->
          <div class="input-group">
            <span class="input-group-text">City:</span>
            <input
              class="form-control"
              v-model="newCity"
              type="text"
              name="addCity"
            />
            <button type="submit" class="btn btn-primary">Add</button>
          </div>
        </form>

        <br />

        <div style="display: flex; flex-direction: column">
          <h5 style="text-align: center">Locations:</h5>
          <ul class="list-group">
            <li
              v-for="cityWeather in cityWeatherList"
              :key="cityWeather.name"
              class="list-group-item"
            >
              <WeatherCard :data="cityWeather" />
            </li>
          </ul>
        </div>
      </div>
    </div>

    <footer
      style="
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        margin-left: auto;
        margin-right: auto;
        text-align: center;
        padding: 10px 0;
      "
    >
      <div>Made with ❤️ & ☕ by Marcell</div>
    </footer>
  </div>
</template>

<style scoped>
.form-control:focus {
  box-shadow: none;
}
</style>
