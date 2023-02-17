/**************************************************************************************
 * Objetivo: Arquivo de funções para cálculo de média.
 * Data: 10/02/2023
 * Autora: Felipe Graciano
 * Versão: 1.0  
 **************************************************************************************/


const tratamentoDoAluno = function (studentSex) {
    let sexoAluno = studentSex;

    if (sexoAluno == 'FEMININO' || sexoAluno == '1') {
        sexoAluno = 'a';
        return sexoAluno;
    } else if (sexoAluno == 'MASCULINO' || sexoAluno == '2') {
        sexoAluno = 'o';
        return sexoAluno;
    } else if (sexoAluno == '') {
        console.log('ERRO: Por favor digite o seu gênero')
        return false
    } else {
        console.log('ERRO: por favor escolha uma opção válidaMikeTyson')
        return false
    }
}

const tratamentoDoProfessor = function (teacherSex) {
    let sexoDoProfessor = teacherSex;

    if (sexoDoProfessor == 'FEMININO' || sexoDoProfessor == '1') {
        sexoDoProfessor = 'da Professora';
        return sexoDoProfessor;
    } else if (sexoDoProfessor == 'MASCULINO' || sexoDoProfessor == '2') {
        sexoDoProfessor = 'do Professor';
        return sexoDoProfessor;
    } else if (sexoDoProfessor == '') {
        console.log('ERRO: Por favor digite o gênero do seu professor')
        return false
    } else {
        console.log('ERRO: por favor escolha uma opção válidaOHWTH')
        return false
    }
}


const calcularMedia = function (primeiraNota, segundaNota, terceiraNota, quartaNota) {
    let nota1 = Number(String(primeiraNota))
    let nota2 = Number(String(segundaNota))
    let nota3 = Number(String(terceiraNota))
    let nota4 = Number(String(quartaNota))
    let resultado = (nota1 + nota2 + nota3 + nota4) / 4


    return resultado;
}

const calcularMediaExame = function (primeiraNota, segundaNota, terceiraNota, quartaNota, exame) {
    let nota1 = Number(primeiraNota)
    let nota2 = Number(segundaNota)
    let nota3 = Number(terceiraNota)
    let nota4 = Number(quartaNota)
    let notaExame = Number(exame)


    let mediaComExame

    mediaComExame = (nota1 + nota2 + nota3 + nota4 + notaExame) / 5



    return mediaComExame
}

module.exports = {
    calcularMedia,
    calcularMediaExame,
    tratamentoDoAluno,
    tratamentoDoProfessor
}
