const CitySearch = document.querySelector("#search-city");

const temp = document.querySelector(".temperature");
const City = document.querySelector(".city");
const Humidity = document.querySelector(".humidity");
const Wind = document.querySelector(".wind-speed");
const SearchBtn = document.getElementById("search-btn");
const imageupadate = document.querySelector(".icons");

// ========================== key
const key = "&APPID=b6bdb80e9d03ad3dc958d6eaed3df552";
const APIKey = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=`;

// ===================================
var IconsUpdate;

async function UpdatesWeatherComponent(){

    let apicitykey = CitySearch.value;
    CitySearch.value="";
    // City.innerText=apicitykey;

    // console.log(APIKey+apicitykey+key)

    let response = await fetch(APIKey+apicitykey+key);

    let  data = await response.json();

    IconsUpdate = data.weather[0].main;
    // console.log(IconsUpdate)

    // console.log(data);

    let windspeed = data.wind.speed;
    let humidityOfCity = data.main.humidity;
    let cityName = data.name;
    // console.log(humidityOfCity)

    City.innerText = cityName;
    temp.innerText= data.main.temp + "°C";
    Humidity.innerText= humidityOfCity + "% Humidity";
    Wind.innerText = windspeed + "km/hr";



};

function updateImagesbackground(){
    // if(imageupadate.classList.contains("bx-cloud-light-rain")){
    //     imageupadate.classList.remove("bx-cloud-light-rain");
    //     imageupadate.classList.add("bx-cloud-lightning");
    // }
};


SearchBtn.addEventListener("click",()=>{
    UpdatesWeatherComponent(); 
    // updateImagesbackground();
});