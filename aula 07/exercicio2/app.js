// **************************************************************************************
//  * Objetivo: Arquivo de funções para gerar tabuadas.
//  * Data: 17/02/2023
//  * Autora: Felipe Graciano
//  * Versão: 1.0  
//  **************************************************************************************/

var matematica = require('./modulo/tabuada.js');

var readline = require('readline');

var entradaDados = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Qual a primeira tabuada? \n', function (tabuadaInicial) {
    let primeiraTabuada = tabuadaInicial

    entradaDados.question('Qual a última tabuada? \n', function (tabuadaFinal) {
        let ultimaTabuada = tabuadaFinal


        entradaDados.question('Qual o primeiro multiplicador? \n', function (contadorInicial) {
            let primeiroContador = contadorInicial


            entradaDados.question('Qual o último contador? \n', function (contadorFinal) {
                let ultimoContador = contadorFinal


                let resultado = matematica.calcularTabuada(primeiraTabuada, ultimaTabuada, primeiroContador, ultimoContador)
                console.log(resultado)
            })
        })
    })
})
