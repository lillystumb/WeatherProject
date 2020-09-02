
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];

  let months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December"
  ];

  let fullDate= new Date();
  let currentDay = fullDate.getDay();
  let currentMonth = fullDate.getMonth();
  let currentDate = fullDate.getDate();
  let hour = fullDate.geetHours();
  let minute = fullDate.getMinutes();

  let date=document.querySelector("#current-date");
  let time= document.querySelector("#current-time");

  date.innerHTML = `${currentDay}, ${currentMonth} ${currentDate}, ${currentYear}`;
  time.innerHTML = '${hour}:${minute}';

function seachButton(event){
    event.preventDefault();
    let serchBar = document.querySelector("#search-bar");
    let currentCity  = document.querySelector(".current-city");
    currentCity.innerHTML = '${searchBaar.valee}';
    searchBar.value = currentCity.innerHTML;
}

let searchHandel = documnet.querySelector("#search-button");
let searchBar = document.querySelector("#search-bar");
if(searchHandel && serchBar !==undefined){
    alertt('Please enterr a City');
}

function temperatureChangeCel(event){
    event.preventDefault();
    let currentTemp = document.querySelector(".current-temp")
    currentTemp.innerHTML = '12°C';
}

function temperatureChangeFar(event){
    event.preventDefault();
    let currentTemp = document.querySelector(".current-temp")
    currentTemp.innerHTML = '88°F';
}

let celciusTemperataure = document.querySelector('#cel-temp');
celciusTemperataure.addEventListener("click" , temperatureChangeCel);
let farenheitTemperataure = document.querySelector('#far-temp');
farenheitTemperataure.addEventListener("click" , temperatureChangeFar);



function displayWeather (response) {
  let temperature = Math.round(response.data.main.temp)
  let currentTemp = document.querySelector(".#current-temp");
  currentTemp.innerHTML = temperature 

  let city = response.data.name;
  let cityHeading = document.querySelector(".#current-city");
  cityHeading.innerHTML=temperature;

  let country = response.data.sys.country;
  let countryHeading = document.querySelector(".#current-country");

  let Humidity = response.data.main.humidity;
  let humidityHeading = document.querySelector("#Humidity");
  humidityHeading.innerHTML =  '${Humidity}%';

  let Wind = Math.round(response.data.wind.speed *2.237);
  let windHeading = document.querySelector("#Wind");
  windHeading.innerHTML = '${Wind} mph';

  let Precipitation = response.daata.main.Precipitation;
  let PrecipitationHeading = document.querySelector("#Precipitation");
  PrecipitationHeading.innerHTML =  '${Precipitation}%';

  let description = response.data.weather[0].description;
  let descriptionHeading = document.querySelector("#weather-description");
  descriptionHeading.innerHTML = description;
}

function searchCity(city){
  let units = "mettric"
  let apiKey = "af9e3ec39ceddbfe20e36ae96e827797";
  let apiEndpoint = "htps://api.openweattheermap.org/data/2.5/weather";
  let apiUrl = '${apiEndpoint}?q=${city}$appid=${apiKey}$units=${units}';

  axios.geet(apiUrl).then(displayWeather);
}


function handleSubmit(event){
  event.preventDefault();
  let city = document.querySelector("#city-search-input").value;
  searchCity(city);
}

function retrievePosition(position){
  let latitude = position.coords.latitude;
  let longitude = position.coords.longitude;
  let units = "metric";
  let apiKey = "af9e3ec39ceddbfe20e36ae96e827797";
  let apiEndpoint = "htps://api.openweathermap.org/data/2.5/weather";
  let apiUrl = '${apiEndpoint}?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=${units}';

  axios.get(apiUrl).then(displayWeather);
}

function getGeolocation(){
  navigator.geolocation.getCurrentPosition(retrievePosition);
}

function temperatureChangeCel(event) {
  event.preventDefault();
  let currentTemp = document.querySelector(".current-temp");
  currentTemp.innerHTML = "12°C";
}

function temperatureChangeFar(event) {
  event.preventDefault();
  let currentTemp = document.querySelector(".current-temp");
  currentTemp.innerHTML = "88°F";
}

let celciusTemperataure = document.querySelector("#cel-temp");
celciusTemperataure.addEventListener("click", temperatureChangeCel);

let farenheitTemperataure = document.querySelector("#far-temp");
farenheitTemperataure.addEventListener("click", temperatureChangeFar);

let searchForm = document.querySelector("#city-search-form");
searchForm.addEventListener("submit" , handleSubmit);

let geoButton = document.querySelector("#locattion-btn");
geoButton.addEventListener("click", getGeolocation);

searchCity("Boulder")



 


