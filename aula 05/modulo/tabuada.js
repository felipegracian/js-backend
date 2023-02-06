/***************************************************************
 * Objetivo: Arquivo de funções para calcular uuma tabuada
 * Data: 06/02/2023
 * Autora: Yasmin Gonçalves
 * Versão: 1.0
 ***************************************************************/

//Função que gera uma tabuada até um contador especifico
const getTabuada = function (multiplicando, maxMultiplicador) {
    let tabuada = Number(String(multiplicando).replace(',', '.'))
    let tabuadaContador = Number(String(maxMultiplicador).replace(',', '.'))
    let status = true
    let resultado
    let contador = 0

    if (tabuada == 0 || tabuadaContador == 0) {
        status = false
    } else if (isNaN(tabuada) || isNaN(tabuadaContador)) {
        status = false
    } else {

        // while (contador <= tabuadaContador) {
        //     // 2 x 0 = 0
        //     resultado = tabuada * contador
        //     console.log(tabuada + ' x ' + contador + ' = ' + resultado)

        //     contador++ 
        // }
        for (let contador = 0; contador <= tabuadaContador; contador++) {
            resultado = tabuada * contador
            console.log(`${tabuada} x ${contador} = ${resultado}`)
        }
    }
    return status
}

getTabuada(2, 900000)

module.exports = {
    getTabuada
}