// Global Variables
var searchHistory = [];
var weatherApiUrl = "https://home.openweathermap.org/";
var weatherApiKey = "f57ff237a3c5f5b8987e966208f9746b";
var now = new Date();
var date = now.getFullYear() + '-' + (now.getMonth()+1) + '-' +now.getDate();
vartime=now.getHours()+":" + now.getMinutes() + ":" + now.getSeconds();
vardateTime=date + ' ' +vartime;
document.write("CURRENT DATE & TIME:   "+vardateTime);
document.write("The city is:");
document.write("The temperature is:");
document.write("Humidity is:");
// Html elements references
// Reference search form
var searchForm = document.querySelector("#search-value")
var todayContainer = document.querySelector("#today")
var forecastConainer = document.querySelector("#forecast")
// entListener("load", function() {
//     console.log("hello")
// })
// Going to need timezone pluggin. Either moment or day.js
// Function for display current weather data from open weather

// Store response data from fetch into variables
var tempF;
var windMph;
var humidity;
var uvi;
var input=document.querySelector("#search-value");
var city=document.querySelector(".cityName");
var temp=document.querySelector(".temp");
var windMph=querySelector(".windSpeed");
var humidity=document.querySelector(".humidity");
var uvi=document.querySelector(".uvi");
var button=document.querySelector("#search-button");
/**button.addEventListener ("clickon", function() {
    fetch('api.openweathermap.org/data/2.5/weather?q='+input.value+'&appid="weatherApiKey"')
    .then(response=>response.json())}
    .then(data=> {
        var tempValue=data['main']['temp'];
        var cityValue=data['name'];
        var windMphValue=data['speed'];
        var humidityValue=data['main']['humidity'];

        city.innerHTML="weather:" +cityValue;
        temp.innerHTML="temp:" +tempValue;
        humidity.innerHTML="humidity:"+humidityValue;
    };**/