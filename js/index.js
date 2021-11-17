// function reqListener() {
//   console.log(this.responseText);
// }

/**
 * get weather
 */

var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
oReq.open("GET", "https://api.openweathermap.org/data/2.5/weather?q=Taipei&appid=0c441714fc50c1192aed587ecd4829cb&units=metric", true);
// oReq.open("GET", "./js/weather.json", true);

oReq.onload = function () {
  let jsonResponse = JSON.parse(oReq.responseText);
  let weather = jsonResponse.weather[0].main.toLowerCase();
  let temp = jsonResponse.main.temp;

  let weather_status = document.getElementById("weather_status");
  console.log(weather);

  switch (weather) {
    case "clouds":
      weather_status.innerHTML = '<i class="fas fa-cloud fa-4x"></i>';
      break;
    case "sun":
      weather_status.innerHTML = '<i class="fas fas fa-sun fa-4x"></i>';
      break;
    case "rain":
      weather_status.innerHTML = '<i class="fas fa-cloud-rain fa-4x"></i>';
      break;
    default:
      weather_status.innerHTML = '<i class="fas fa-cloud fa-4x"></i>';
      break;
  }

  let weather_temp = document.getElementById("weather_temp");
  weather_temp.innerText = "°" + temp.toFixed(0);
};
oReq.send();
