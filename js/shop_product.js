let btn_hot = document.getElementById("btn_hot");
let btn_rain = document.getElementById("btn_rain");
let btn_sun = document.getElementById("btn_sun");
let img_product = document.getElementsByClassName("img_product");
btn_hot.addEventListener("click", function () {
  for (let i = 1; i < 7; i++) {
    i + 1;
    img_product[i-1].src = "./img/hot_product/product" + i + ".jpg";
  }
});

btn_rain.addEventListener("click", function () {
  for (let i = 1; i < 7; i++) {
    i + 1;
    img_product[i-1].src = "./img/rain_product/product" + i + ".jpg";
  }
});

btn_sun.addEventListener("click", function () {
  for (let i = 1; i < 7; i++) {
    i + 1;
    img_product[i-1].src = "./img/sun_product/product" + i + ".jpg";
  }
});
