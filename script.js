let date = new Date();

const monthsOfTheYear = [
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro"
];

const daysOfTheWeek = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
];

let year = date.getFullYear();

let dayMonth = date.getDate();

let writtenMonth = monthsOfTheYear[date.getMonth()];

let dayWeekWritten = daysOfTheWeek[date.getDay()];


const key = "56aa5617ec6ff9c66775c95cd158c21a";


function putDataOnScreen(data) {

    document.querySelector(".info-body").style.display = "flex"
    document.querySelector(".medium-box").style.display = "flex"

    document.querySelector(".city").innerHTML ="Tempo em " + data.name
    document.querySelector(".temp").innerHTML = Math.floor(data.main.temp) + "°C"
    document.querySelector(".predictive-text").innerHTML = data.weather[0].description
    document.querySelector(".moisture").innerHTML = "Umidade: " + data.main.humidity + "%"
    document.querySelector(".img-prediction").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`

    
    document.querySelector(".city-one").innerHTML = data.name
    document.querySelector(".temp-one").innerHTML = Math.floor(data.main.temp) + "°C"
    document.querySelector(".img-prediction-one").src = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`
    document.querySelector(".prediction-text-one").innerHTML = data.weather[0].description

    document.querySelector(".current-date").innerHTML =  dayWeekWritten + ", " + dayMonth + ", " +  writtenMonth + ", " + year;


}


async function searchCity(city) {
    const data = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&lang=pt_br&units=metric`).then( response => response.json())

    putDataOnScreen(data);
}


const input = document.querySelector(".search-city");

input.addEventListener("keyup", function(event){
    if(event.keyCode === 13) {
        const city = document.querySelector(".search-city").value;
        searchCity(city);
    }
}) 

function iClickedSearch() {
    const city = document.querySelector(".search-city").value;

    searchCity(city);

}

