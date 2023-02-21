// **************************************************************************************
//  * Objetivo: Arquivo de funções para gerar tabuadas.
//  * Data: 17/02/2023
//  * Autora: Felipe Graciano
//  * Versão: 1.0  
//  **************************************************************************************/


const calcularTabuada = function(tabuadaInicial, tabuadaFinal, contadorInicial, contadorFinal){
    let primeiraTabuada = Number(tabuadaInicial)
    let ultimaTabuada = Number(tabuadaFinal)
    let primeiroMultiplicador = Number(contadorInicial)
    let segundoMultiplicador = Number(contadorFinal)
    let resultado
    let contador = 0;

    if(primeiraTabuada < 2 || ultimaTabuada > 100){
        console.log('ERRO: As tabuadas variam apenas entre 2 e 100')
    } else if (isNaN(primeiraTabuada) || isNaN(ultimaTabuada) || isNaN(primeiroMultiplicador) || isNaN(segundoMultiplicador)){
        console.log('ERRO: Por favor digite apenas números')
    } else if(primeiraTabuada == 0 || ultimaTabuada == 0 || primeiroMultiplicador == 0 || segundoMultiplicador == 0){
        console.log('ERRO: Não é possível realizar operações com o número 0')
    } else if(primeiroMultiplicador < 1 || segundoMultiplicador > 50){
        console.log('ERRO: Aos multiplicadores variam apenas entre 1 e 50')
    } else if (primeiraTabuada >= ultimaTabuada){
        console.log('ERRO: Não foi possível realizar a operação: A tabuada inicial deve ser inferior a tabuada final')
    } else if(primeiroMultiplicador > segundoMultiplicador){
        console.log('ERRO: Não foi possível realizar a operação: O contador inicial deve ser inferior ao contador final')
    }
    else{
        for (contador = primeiraTabuada; contador <= tabuadaFinal; contador++){
            console.log('Tabuada do : \n' + contador)

            for(let contador2 = primeiroMultiplicador; contador2 < segundoMultiplicador; contador2++){
                resultado = contador2 * contador
                console.log(`${contador2} X ${contador} = ${resultado}`);
            }
        }
    }

}

module.exports = {
    calcularTabuada
}
