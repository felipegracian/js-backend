/************************************************************************************************
 * Objetivo: Exercício para calcular a média dos alunos 
 * Data: 10/02/2023
 * Autora: Felipe Graciano
 * Versão: 1.0
*************************************************************************************************/

var calculoMedia = require('./modulo/calculoMedia.js')

var readLine = require('readline')
const { calcularMediaExame, tratamentoDoAluno } = require('./modulo/calculoMedia.js')

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

                if(sexoProfessor == ''){
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

                                        resultado = calculoMedia.calcularMedia(valor1, valor2, valor3, valor4)

                                        console.log(calculoMedia.tratamentoDoAluno(sexoAluno) +
                                         'lun' +
                                         calculoMedia.tratamentoDoAluno(sexoAluno) +
                                         ' ' +
                                          nomeAluno +
                                          ' está ' +
                                            resultado +
                                            ' na matéria ' +
                                             calculoMedia.tratamentoDoProfessor(sexoProfessor) +
                                              ' ' +
                                               nomeProfessor)

                                        if (status = 'dependente da nota no Exame Final') {
                                            entradaDados.question('Digite a nota do exame:\n', function (exame) {
                                                let notaExame = exame
                                                let exameNecessario
                                                exameNecessario = calculoMedia.calcularMediaExame(valor1, valor2, valor3, valor4, notaExame)
                                                console.log(exameNecessario)
                                                if(exameNecessario == false){
                                                    console.log('Reprovado')
                                                } else{
                                                    console.log('Mike Tyson')
                                                }
                                            })
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





