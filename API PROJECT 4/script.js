let currentCity = "Belgrade";
const units = "metric"


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




const getWeather = () => {

    const apiKey = '64f60853740a1ee3ba20d0fb595c97d5';

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${currentCity}&appid=${apiKey}&units=${units}`).then((resp)=> resp.json()).then(data => {


        console.log(data);
        city.innerHTML = `${data.name},${convert(data.sys.country)}`;
        datetime.innerHTML = convertTime(data.dt, data.timezone);






    }
    );
   

}


getWeather()

