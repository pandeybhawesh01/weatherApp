

async function getCityName(){
    let searchbox = document.getElementById("search-box");
    let searchBtn = document.getElementById("searchBtn");
    searchBtn.addEventListener('click' ,async function(){
    let cityname = await searchbox.value;
    console.log(cityname);
    let url = "https://api.openweathermap.org/data/2.5/weather?q="+cityname+"&appid=1c6786fa7907747adb65dc05bce23199";

    weather(url);
})
}
getCityName();



async function weather(url){
    try{
        let res =await fetch(url);
        let obj = await res.json();
        let temp= obj.main.temp;
        let desc = obj.weather[0].description;
        let fellsLike =obj.main.feels_like;
        let tempMin = obj.main.temp_min;
        let tempMax = obj.main.temp_max;
        let pressure = obj.main.pressure;
        let humidity = obj.main.humidity;
        let visibility = obj.visibility;
        let windspeed =obj.wind.speed;
        let sunrise = convertUnixTimestamp(obj.sys.sunrise);
        let sunset = convertUnixTimestamp(obj.sys.sunset);
        let cityname = obj.name;
        fellsLike =(fellsLike-273).toFixed(2);
        temp =(temp).toFixed(2);

        console.log(temp);
        console.log(desc);
        console.log(fellsLike);
        console.log(tempMin);
        console.log(tempMax);
        console.log(pressure);
        console.log(humidity);
        console.log(visibility);
        console.log(windspeed);
        console.log(sunrise);
        console.log(sunset);
        console.log(cityname);

        document.querySelector('.temp').innerText = temp -273 + "°C";
        document.querySelector('.feelslike').innerText = "Feels Like: " + fellsLike + "°C";
        document.querySelector('.description').innerText = desc;
        document.querySelector('.city').innerText = cityname;

        document.querySelector('.wind-value').innerText = windspeed + " km/h";
        document.querySelector('.humidity').innerText = "Humidity: " + humidity + "%";
        document.querySelector('.sunrise').innerText = "Sunrise: " + sunrise;
        document.querySelector('.sunset').innerText = "Sunset: " + sunset;

        let imageSrc;
    switch (desc) {
        case "clear sky":
            imageSrc = "./assets/sunny.jpeg";
            break;
        case "few clouds":
            imageSrc = "./assets/cloudy.png";
            break;
        case "scattered clouds":
            imageSrc = "./assets/cloudy.png";
            break;
        case "broken clouds":
            imageSrc = "./assets/cloudy.png";
            break;
        case "shower rain":
            imageSrc = "./assets/rainy.png";
            break;
        case "rain":
            imageSrc = "./assets/rainy.png";
            break;
        case "thunderstorm":
            imageSrc = "./assets/rainy.png";
            break;
        case "snow":
            imageSrc = "./assets/rainy.png";
            break;
        case "mist":
            imageSrc = "./assets/mist.png";
            break;
        default:
            imageSrc = "./assets/sunny.png";
            break;
    }
    document.getElementById('img').querySelector('img').src = imageSrc;
        
    }
    catch(e){
        console.log("kuch to gadbad hai daya",e);
    }
    console.log("ye to chanla chaiye");
}

function convertUnixTimestamp(timestamp) {
    let date = new Date(timestamp * 1000); // Convert to milliseconds
    let hours = date.getHours();
    let minutes = "0" + date.getMinutes();
    let formattedTime = hours + ':' + minutes.substr(-2);
    return formattedTime;
}

weather();





