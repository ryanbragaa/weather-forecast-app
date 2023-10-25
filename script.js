let data = new Date();

const mesesDoAno = [
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

const diasDaSemana = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado"
];

let ano = data.getFullYear();

let diaMes = data.getDate();

let mesEscrito = mesesDoAno[data.getMonth()];

let diaSemanaEscrito = diasDaSemana[data.getDay()];


const key = "56aa5617ec6ff9c66775c95cd158c21a";


function colocarDadosNaTela(dados) {

    document.querySelector(".info-body").style.display = "flex"
    document.querySelector(".caixa-media").style.display = "flex"

    document.querySelector(".cidade").innerHTML ="Tempo em " + dados.name
    document.querySelector(".temp").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
    document.querySelector(".umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
    document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

    
    document.querySelector(".cidadeDois").innerHTML = dados.name
    document.querySelector(".tempDois").innerHTML = Math.floor(dados.main.temp) + "°C"
    document.querySelector(".img-previsaoDois").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`
    document.querySelector(".texto-previsaoDois").innerHTML = dados.weather[0].description

    document.querySelector(".dataDeHoje").innerHTML =  diaSemanaEscrito + ", " + diaMes+ ", " +  mesEscrito+ ", " + ano;


}


async function buscarCidade(cidade) {
    const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())

    colocarDadosNaTela(dados);
}


const input = document.querySelector(".input-cidade");

input.addEventListener("keyup", function(event){
    if(event.keyCode === 13) {
        const cidade = document.querySelector(".input-cidade").value;
        buscarCidade(cidade);
    }
}) 

function cliqueiNoBotao() {
    const cidade = document.querySelector(".input-cidade").value;

    buscarCidade(cidade);

}

