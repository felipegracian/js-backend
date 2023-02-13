/**************************************************************************************
 * Objetivo: Arquivo de funções para cálculo de média.
 * Data: 10/02/2023
 * Autora: Felipe Graciano
 * Versão: 1.0  
 **************************************************************************************/


const tratamentoDoAluno = function (studentSex) {
    let sexoAluno = studentSex;

    if(sexoAluno == 'FEMININO' || sexoAluno == '1'){
        sexoAluno = 'a';
        return sexoAluno;
    } else if(sexoAluno == 'MASCULINO' || sexoAluno == '2'){
        sexoAluno = 'o';
        return sexoAluno;
    } else if  (sexoAluno == ''){
        console.log('ERRO: Por favor digite o seu gênero')
        return false
    } else{
        console.log('ERRO: por favor escolha uma opção válidaMikeTyson')
        return false
    } 
}

const tratamentoDoProfessor = function (teacherSex){
    let sexoDoProfessor = teacherSex;

    if(sexoDoProfessor == 'FEMININO' || sexoDoProfessor == '1'){
        sexoDoProfessor = 'da Professora';
        return sexoDoProfessor;
    } else if (sexoDoProfessor == 'MASCULINO' || sexoDoProfessor == '2'){
        sexoDoProfessor = 'do Professor';
        return sexoDoProfessor;
    } else if(sexoDoProfessor == ''){
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
    let status;


    if (nota1 < 0 || nota2 < 0 || nota3 < 0 || nota4 < 0 || nota1 > 100 || nota2 > 100 || nota3 > 100 || nota4 > 100) {
        console.log('ERRO: Digite uma nota válida (entre 0 e 100).')
    } else if (nota1 === '' || nota2 === '' || nota3 === '' || nota4 === '') {
        console.log('ERRO: Digite um valor. snfajfhhj')
    } else if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || isNaN(nota4)) {
        console.log('ERRO: Digite um valor válido')
    } else {
        let resultado = (nota1 + nota2 + nota3 + nota4) / 4

        if (resultado >= 70) {
            status = 'Aprovado';
            return status;
        } else if (resultado >= 50 && resultado <= 69) {
            status = 'dependente da nota no Exame Final';
            return status;
        } else {
            status = 'reprovado';
            return status;
        }
    }
}

const calcularMediaExame = function (primeiraNota, segundaNota, terceiraNota, quartaNota, exame) {
    let nota1 = Number(primeiraNota)
    let nota2 = Number(segundaNota)
    let nota3 = Number(terceiraNota)
    let nota4 = Number(quartaNota)
    let notaExame = Number(exame)
    let status;


    let mediaComExame

    mediaComExame = (nota1 + nota2 + nota3 + nota4 + notaExame) / 5

    
    if (notaExame > 100 || notaExame < 0) {
        console.log('ERRO: Digite um valor válido')
    } else if (notaExame === '') {
        console.log('ERRO: Digite uma nota válida.')
    } else if (isNaN(notaExame)) {
        console.log('ERRO: Digite um valor válido.')
    } else {
        if (mediaComExame < 60) {
            status = false
        } else {
            status = true
        }
    }


    return status
}

module.exports = {
    calcularMedia,
    calcularMediaExame,
    tratamentoDoAluno,
    tratamentoDoProfessor
}
