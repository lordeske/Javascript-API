let currentCity = "Belgrade";
let units = "metric"


/// selectors 
const city = document.querySelector(".weather__city");
const datetime = document.querySelector(".weather__datetime");
const weather__forecast = document.querySelector('.weather__forecast');
const weather__temperature = document.querySelector(".weather__temperature");
const weather__icon = document.querySelector(".weather__icon");
const weather__minmax = document.querySelector(".weather__minmax")
const weather__realfeel = document.querySelector('.weather__realfeel');
const weather__humidity = document.querySelector('.weather__humidity');
const weather__wind = document.querySelector('.weather__wind');
const weather__pressure = document.querySelector('.weather__pressure');
const weather__search = document.querySelector('.weather__search'); // form
const weather__input = document.querySelector('.weather__searchform');
const weather__cel = document.querySelector('.weather_unit_celsius');
const weather__far = document.querySelector(`.weather_unit_farenheit`);

weather__search.addEventListener("submit" , (e)=>{

    e.preventDefault();

    if(weather__input.value === "")
    {
        alert("Please enter Valid City Name");
        return;

    }


    


    currentCity = weather__input.value;
    getWeather();
    
    weather__input.value="";







})




/// functions
const convert = (country) => {  /// converting country code

    const regionNames = new Intl.DisplayNames(["en"],{type : "region"});
    return regionNames.of(country);
    
}


const convertTime = (time, zone) =>
{
    const convertTimeZone = zone /  3600  //sec in hr
    const date = new Date(time * 1000);

    const options = {

        weekday : "long",
        day : "numeric",
        month : "long",
        year : "numeric",
        hour : "numeric",
        minute : "numeric",
        timeZone: `Etc/GMT${convertTimeZone >= 0 ? "-" : "+"}${Math.abs(convertTimeZone)}`,
        hour12: true,
       



    }

    return date.toLocaleString("en-US", options);


}









/// API

const getWeather = async () => {

    const apiKey = '64f60853740a1ee3ba20d0fb595c97d5';
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${apiKey}&units=${units}`

    try 
    {

        const resp = await fetch(apiUrl);
        
        if(!resp.ok)
        {
            throw new Error(`HTTP error! Status: ${resp.status}`);

        }


        const data = await resp.json();

        console.log(data);
        city.innerHTML = `${data.name},${convert(data.sys.country)}`;
        datetime.innerHTML = convertTime(data.dt, data.timezone);
        weather__forecast.innerHTML = `<p>${data.weather[0].main}</p>`
        weather__temperature.innerHTML =  `${Math.round(data.main.temp)}${units==="metric" ? "&#176C" : "F"}`;
        weather__icon.innerHTML = `<img src="http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png"/>`  // getting image from inpuut
        weather__minmax.innerHTML = `<p>Min: ${Math.round(data.main.temp_min)}${units==="metric" ? "&#176C" : "F"}</p> <p>Max: ${Math.round(data.main.temp_max)}${units==="metric" ? "&#176C" : "F"} </p>`
        weather__realfeel.innerHTML = `${data.main.feels_like.toFixed(0)}${units==="metric" ? "&#176C" : "F"}`;
        weather__humidity.innerHTML = `${data.main.humidity}%`;
        weather__wind.innerHTML = `${data.wind.speed}${units==="imperial" ? "mph" : "m/s"} `;
        weather__pressure.innerHTML = `${data.main.pressure} hPa`;
        

    }
    catch (err)
    {

        alert("Location not found");


    }

   
   

}




weather__cel.addEventListener("click", ()=> {

    if(units!=="metric")
    {

        units="metric";

    }


    getWeather();





})



weather__far.addEventListener('click', () => {
    if(units !== "imperial"){
      
        units = "imperial"
    
        getWeather()
    }
})


window.onload = function () {

    getWeather();

}