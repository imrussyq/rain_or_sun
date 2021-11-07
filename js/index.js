// function reqListener() {
//   console.log(this.responseText);
// }

/**
 * get weather
 */

var oReq = new XMLHttpRequest();
// oReq.addEventListener("load", reqListener);
oReq.open("GET", "./js/weather.json", true);

oReq.onload = function () {
  let jsonResponse = JSON.parse(oReq.responseText);
  let weather = jsonResponse.weather[0].main;
  let temp = jsonResponse.main.temp;

  let weather_status = document.getElementById("weather_status");

  switch (weather) {
    case "Clouds":
      weather_status.innerHTML = '<i class="fas fa-cloud"></i>';
      break;
    case "Sun":
      weather_status.innerHTML = '<i class="fas fa-cloud-rain fa-4x"></i>';
      break;
    default:
      weather_status.innerHTML = "no";
      break;
  }

  let weather_temp = document.getElementById("weather_temp");
  weather_temp.innerText = '°'+temp.toFixed(0);

};
oReq.send();
