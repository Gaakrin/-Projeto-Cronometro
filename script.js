
const display = document.getElementById("display");
const botaoIniciar = document.getElementById("iniciar");
const botaoPausar = document.getElementById("pausar");
const botaoZerar = document.getElementById("zerar");

let ms = 95;
let segundo = 56;
let minuto = 59;
let hora = 0;

function contagem(){
    display.innerText = `${hora.toString().padStart(2, '0')}:${minuto.toString().padStart(2, '0')}:${segundo.toString().padStart(2, '0')}:${ms.toString().padStart(2, '0')}`;
    
    if(ms === 99){
        segundo += 1
        ms = -1;
    }

    if(segundo === 60){
        minuto += 1;
        segundo = 0;
    }

    if(minuto === 60){
        hora += 1;
        minuto = 0;
    }

    ms += 1;
}

botaoIniciar.onclick = function iniciar(){
    botaoIniciar.disabled = true;
    return intervalo = setInterval(contagem, 10);
}

botaoPausar.onclick = function pausar(){
    clearInterval(intervalo);
    botaoIniciar.disabled = false;
}

botaoZerar.onclick = function zerar(){
    ms = 0;
    minuto = 0;
    hora = 0;
    segundo = 0;
    clearInterval(intervalo);
    botaoIniciar.disabled = false;
    display.innerText = "00:00:00:00";
}