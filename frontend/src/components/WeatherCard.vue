<script>
export default {
  name: "WeatherCard",
  props: {
    data: Object,
  },
  setup() {
    function getTypeIcon(type) {
      switch (type) {
        case "Clear":
          return "🌞"
        case "Clouds":
          return "☁️"
        case "Rain":
          return "🌧️"
        case "Snow":
          return "🌨️"
        default:
          return type
      }
    }
    return {
      getTypeIcon,
    }
  },
}
</script>

<template>
  <div class="box">
    <div class="left">
      <span class="name">{{ data.name }}</span>
      <span class="country">({{ data.country }})</span>
    </div>
    <div class="middle">
      <div class="temperature">{{ data.temperature }}</div>
      <div class="weatherType">{{ getTypeIcon(data.type) }}</div>
    </div>
    <div class="right">
      <div class="humidity">💧 {{ data.humidity }}</div>
    </div>
  </div>
</template>

<style scoped>
.box {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
.box .middle {
  display: flex;
  align-items: center;
  gap: 10px;
}

.box .middle .weatherType {
  font-size: 2rem;
}

.box .bottom {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  margin-left: auto;
  margin-right: auto;
  text-align: center;

  background-color: red;
}
</style>
