
import { weather_data } from './data.js';


let loadDayForecastData = (elementoCiudad) => {
    //    let [guayaquil, ambato, tena] = weather_data

    let ciudadData = getCiudad(elementoCiudad)

    let ciudad = document.getElementById("city");
    ciudad.innerHTML = ciudadData.city

    let fecha = document.getElementById("date");
    fecha.innerHTML = ciudadData.date;

    let maxtemperatureHtml = document.getElementById("maxtemperature")
    maxtemperatureHtml.innerHTML = ciudadData.maxtemperature

    let mintemperatureHtml = document.getElementById("mintemperature")
    mintemperatureHtml.innerHTML = ciudadData.mintemperature

    let cloudinessHtml = document.getElementById("cloudiness")
    cloudiness.innerHTML = ciudadData.cloudiness

    let windHtml = document.getElementById("wind")
    wind.innerHTML = ciudadData.wind

    let rainfallHtml = document.getElementById("rainfall")
    rainfall.innerHTML = ciudadData.rainfall

    let [late, night] = ciudadData.forecast_today

    //LATE
    let late_iconHtml = document.getElementById("late_icon")
    late_iconHtml.innerHTML = late.icon;

    let late_temperatureHtml = document.getElementById("late_temperature")
    late_temperatureHtml.innerHTML = late.temperature

    let late_forecastHtml = document.getElementById("late_forecast")
    late_forecastHtml.innerHTML = late.forecast

    let late_textHtml = document.getElementById("late_text")
    late_textHtml.innerHTML = late.text

    //NIGHT
    let night_iconHtml = document.getElementById("night_icon")
    night_iconHtml.innerHTML = night.icon

    let night_temperatureHtml = document.getElementById("night_temperature")
    night_temperatureHtml.innerHTML = night.temperature

    let night_forecastHtml = document.getElementById("night_forecast")
    night_forecastHtml.innerHTML = night.forecast

    let night_textHtml = document.getElementById("night_text")
    night_textHtml.innerHTML = night.text

}

function getCiudad(ciudad) {
    let ciudadData
    weather_data.forEach(function (elemento) {
        if (elemento.city === ciudad) { ciudadData = elemento }
    })
    return ciudadData;
}

let loadWeekForecastData = (ciudad) => {
    let week = document.getElementsByClassName("list-group")
    let ciudadData = getCiudad(ciudad)

    week[0].innerHTML = ""
    for (let dia of ciudadData.forecast_week) {
        week[0].innerHTML = week[0].innerHTML +
            `<li class="list-group-item border-0 d-flex justify-content-between ps-0 mb-2 border-radius-lg">
                <div class="d-flex flex-column">
                    <h6 class="mb-1 text-dark font-weight-bold text-sm">${dia.text}</h6>
                    <span class="text-xs">${dia.date}</span>
                </div>
                <div class="d-flex align-items-center ">
                    <span class="font-weight-bold te|xt-dark mx-2">${dia.temperature.max}</span> |  <span class="text-dark mx-2">${dia.temperature.min}</span>
                    <div class="ms-4"><i class="material-icons fs-2 me-1 rainy">${dia.icon}</i></div>
                </div>
            </li>`
    }

}

document.addEventListener("DOMContentLoaded", (event) => {
    let Ciudades = document.getElementById("dropdownMenuButton")

    Ciudades.addEventListener

    while (Ciudades.firstChild) {
        Ciudades.removeChild(Ciudades.firstChild);
    }

    for (let i = 0; i < weather_data.length; i++) {
        let opcion = new Option(weather_data[i].city, weather_data[i].city)
        Ciudades.add(opcion)
    }

    loadDayForecastData(Ciudades.value);

    let loadButton = document.getElementById("loadinfo");

    loadButton.addEventListener("click", function () {
        loadWeekForecastData(Ciudades.value);
    });


    Ciudades.addEventListener("change", function () {
        let ciudad = Ciudades.value;
        loadWeekForecastData(Ciudades.value);
        loadDayForecastData(Ciudades.value);
    })

});


