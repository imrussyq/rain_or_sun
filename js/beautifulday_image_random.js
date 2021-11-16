//產生min到max之間的亂數
function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
};

//會產生1~5之間的隨機亂數
// getRandom(1,8);

document.getElementById("beautiful_day_random_image").src = './img/beautifulday_random_image/'+'random' + getRandom(1,8) + '.jpg';