function formate(timestamp) {
  let date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = date.getDay();
  return `${day} ${hours}:${minutes}`;
}

function displayTmperature(response) {
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let dateElement = document.querySelector("#date");
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  cityElement.innerHTML = response.data.name;
  descriptionElement.innerHTML = response.data.weather[0].description;
  humidityElement.innerHTML = response.data.main.humidity;
  windElement.innerHTML = math.round(response.data.wind.speed);
  dateElement.innerHTML = formateDate(response.data.dt * 1000);
}
let apiKey = `7b0780809e5c473181bf677b7b7a1c69`;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;
