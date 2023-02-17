/************************************************************************************************
 * Objetivo: Exercício para calcular a média dos alunos 
 * Data: 10/02/2023
 * Autora: Felipe Graciano
 * Versão: 1.0
*************************************************************************************************/

var calculoMedia = require('./modulo/calculoMedia.js')

var readLine = require('readline')
const { calcularMedia, calcularMediaExame, tratamentoDoAluno } = require('./modulo/calculoMedia.js')

var entradaDados = readLine.createInterface({
    input: process.stdin,
    output: process.stdout
})

entradaDados.question('Nome do aluno (a):\n', function (studentName) {
    let nomeAluno = studentName

    entradaDados.question('Digite seu genero: 1-feminino 2-masculino \n', function (studentSex) {
        let sexoAluno = studentSex.toUpperCase();

        entradaDados.question('Nome do (a) professor (a):\n', function (teacherName) {
            let nomeProfessor = teacherName

            entradaDados.question('Digite o genero do (a) professor (a) 1-feminino 2-masculino\n', function (teacherSex) {
                let sexoProfessor = teacherSex.toUpperCase();

                if (sexoProfessor == '') {
                    console.log('ERRO: Por favor digite o gênero do seu Professor(a)')
                }


                entradaDados.question('Digite o nome do curso:\n', function (curso) {
                    let nomeCurso = curso

                    entradaDados.question('Digite a disciplina do curso:\n', function (disciplina) {
                        let nomeDisciplina = disciplina


                        //Entrada de notas
                        entradaDados.question('Digite a primeira nota:\n', function (primeiraNota) {
                            let valor1 = primeiraNota

                            entradaDados.question('Digite a segunda nota:\n', function (segundaNota) {
                                let valor2 = segundaNota

                                entradaDados.question('Digite a terceira nota:\n', function (terceiraNota) {
                                    let valor3 = terceiraNota

                                    entradaDados.question('Digite a quarta nota:\n', function (quartaNota) {
                                        let valor4 = quartaNota
                                        let resultado

                                        //resultado = calculoMedia.calcularMedia(valor1, valor2, valor3, valor4)


                                        if (valor1 < 0 || valor2 < 0 || valor3 < 0 || valor4 < 0 || valor1 > 100 || valor2 > 100 || valor3 > 100 || valor4 > 100) {
                                            console.log('ERRO: Digite uma nota válida (entre 0 e 100).')
                                        } else if (valor1 === '' || valor2 === '' || valor3 === '' || valor4 === '') {
                                            console.log('ERRO: Digite um valor. snfajfhhj');
                                        } else if (isNaN(valor1) || isNaN(valor2) || isNaN(valor3) || isNaN(valor4)) {
                                            console.log('ERRO: Digite um valor válido');
                                        } else {
                                            let media = calculoMedia.calcularMedia(valor1, valor2, valor3, valor4)
                                            if (media < 60) {
                                                entradaDados.question('Sua média final está dependente da sua nota do exame. Qual foi sua nota no exame? \n', function (exame) {
                                                    let notaExame = exame
                                                    let mediaComExame = calculoMedia.calcularMediaExame(valor1, valor2, valor3, valor4, notaExame)
                                                    if (mediaComExame >= 60) {
                                                        console.log(calculoMedia.tratamentoDoAluno(sexoAluno) +
                                                            ' alun' +
                                                            calculoMedia.tratamentoDoAluno(sexoAluno) +
                                                            ' ' +
                                                            nomeAluno +
                                                            ' está ' +
                                                            'Aprovad' +
                                                            calculoMedia.tratamentoDoAluno(sexoAluno) +
                                                            ' na matéria ' +
                                                            nomeDisciplina +
                                                            '\n' +
                                                            'Curso: ' + nomeCurso +
                                                            '' +
                                                            calculoMedia.tratamentoDoProfessor + '' + nomeProfessor +
                                                            '\n Notas do Aluno: ' + valor1 + ',' + valor2 + ',' + valor3 + ',' + valor4 + notaExame +
                                                            '\n Média final: ' + mediaComExame)
                                                    } else {
                                                        console.log(calculoMedia.tratamentoDoAluno(sexoAluno) +
                                                            ' alun' +
                                                            calculoMedia.tratamentoDoAluno(sexoAluno) +
                                                            ' ' +
                                                            nomeAluno +
                                                            ' está ' +
                                                            'Reprovad' +
                                                            calculoMedia.tratamentoDoAluno(sexoAluno) +
                                                            ' na matéria ' +
                                                            nomeDisciplina +
                                                            '\n' +
                                                            'Curso: ' + nomeCurso +
                                                            '' +
                                                            calculoMedia.tratamentoDoProfessor + '' + nomeProfessor +
                                                            '\n Notas do Aluno: ' + valor1 + ',' + valor2 + ',' + valor3 + ',' + valor4 + ',' + notaExame +
                                                            '\n Média final: ' + mediaComExame)
                                                    }
                                                }
                                                )
                                            } else if(media < 50) {
                                                console.log(calculoMedia.tratamentoDoAluno(sexoAluno) +
                                                    ' alun' +
                                                    calculoMedia.tratamentoDoAluno(sexoAluno) +
                                                    ' ' +
                                                    nomeAluno +
                                                    ' está ' +
                                                    'Reprovad' +
                                                    calculoMedia.tratamentoDoAluno(sexoAluno) +
                                                    ' na matéria ' +
                                                    '' +
                                                    nomeDisciplina +
                                                    '\n' +
                                                    'Curso: ' + nomeCurso +
                                                    '' +
                                                    calculoMedia.tratamentoDoProfessor + '' + nomeProfessor +
                                                    '\n Notas do Aluno: ' + valor1 + ',' + valor2 + ',' + valor3 + ',' + valor4 +
                                                    '\n Média final: ' + media)
                                            } else{
                                                console.log(calculoMedia.tratamentoDoAluno(sexoAluno) +
                                                    ' alun' +
                                                    calculoMedia.tratamentoDoAluno(sexoAluno) +
                                                    ' ' +
                                                    nomeAluno +
                                                    ' está ' +
                                                    'Aprovad' +
                                                    calculoMedia.tratamentoDoAluno(sexoAluno) +
                                                    ' na matéria ' +
                                                    '' +
                                                    nomeDisciplina +
                                                    '\n' +
                                                    'Curso: ' + nomeCurso +
                                                    '' +
                                                    calculoMedia.tratamentoDoProfessor + '' + nomeProfessor +
                                                    '\n Notas do Aluno: ' + valor1 + ',' + valor2 + ',' + valor3 + ',' + valor4 +
                                                    '\n Média final: ' + media)
                                            }
                                        }









                                    })
                                })
                            })
                        })
                    })
                })
            })
        })
    })
})





