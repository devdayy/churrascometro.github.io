

let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

let resultado = document.getElementById("resultado");

function calcular(){
    console.log("Calculando...");

    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qdtTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    console.log(qdtTotalCarne);

    let qdtTotalCerveja = cervejaPP(duracao) * adultos;
    console.log(qdtTotalCarne);

    let qdtTotalBebidas = bebidasPP(duracao) * adultos + (bebidasPP(duracao) / 2 * criancas);
    console.log(qdtTotalCarne);

    resultado.innerHTML = `<p>${qdtTotalCarne/1000}kg de carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalCerveja / 355)} latas de cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(qdtTotalBebidas / 2000)} garrafas de bebidas</p>`
}

function carnePP(duracao){
    if (duracao >= 6) {
        return 650;
    }
    else{
        return 400;
    }
}

function cervejaPP(duracao){
    if (duracao >= 6) {
        return 2000;
    }
    else{
        return 1200;
    }
}

function bebidasPP(duracao){
    if (duracao >= 6) {
        return 1500;
    }
    else{
        return 1000;
    }
}