const perguntas = [
    {
        pergunta: 'Qual é a forma correta de declarar uma variável em JavaScript?',
        respostas: [
            'let x = 5;',
            'const y = 10;',
            'var z = 15;',
        ],
        correta: 1
    },
    {
        pergunta: 'Qual é o operador usado para concatenar strings em JavaScript?',
        respostas: [
            '&',
            '+',
            '|',
        ],
        correta: 1
    },
    {
        pergunta: 'Como você converte uma string em minúsculas em JavaScript?',
        respostas: [
            'toLowerCase()',
            'toUpperCase()',
            'convertLowerCase()',
        ],
        correta: 0
    },
    {
        pergunta: 'Qual função é usada para imprimir algo no console em JavaScript?',
        respostas: [
            'console.print()',
            'console.log()',
            'print()',
        ],
        correta: 1
    },
    {
        pergunta: 'Qual é a sintaxe correta para um loop "for" em JavaScript?',
        respostas: [
            'for (i <= 5; i++)',
            'for (let i = 0; i < 5; i++)',
            'for (i = 0; i < 5; i+2)',
        ],
        correta: 1
    },
    {
        pergunta: 'Qual é o valor de "x" após a execução do código: let x = 5; x++; console.log(x);?',
        respostas: [
            '4',
            '5',
            '6',
        ],
        correta: 2
    },
    {
        pergunta: 'Qual é o resultado da expressão: 5 + "5" em JavaScript?',
        respostas: [
            '10',
            '55',
            'Error',
        ],
        correta: 1
    },
    {
        pergunta: 'Qual é a função utilizada para obter o comprimento de uma string em JavaScript?',
        respostas: [
            'count()',
            'length()',
            'size()',
        ],
        correta: 1
    },
    {
        pergunta: 'Qual é o operador de igualdade estrita em JavaScript?',
        respostas: [
            '==',
            '===',
            '=',
        ],
        correta: 1
    },
    {
        pergunta: 'Como você verifica se uma variável tem um valor indefinido em JavaScript?',
        respostas: [
            'if (x === undefined)',
            'if (x == null)',
            'if (x == undefined)',
        ],
        correta: 0
    },
]

const quiz = document.querySelector('#quiz')
const template = document.querySelector('template')

const corretas = new Set()
const totalDePerguntas = perguntas.length
const mostrarTotal = document.querySelector('#acertos span')
mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas

//looping ou laço de repetição
for (const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta

    for (let resposta of item.respostas) {
        const dt = quizItem.querySelector('dl dt').cloneNode(true)
        dt.querySelector('span').textContent = resposta
        dt.querySelector('input').setAttribute('name', 'pergunta-' + perguntas.indexOf(item))
        dt.querySelector('input').value = item.respostas.indexOf(resposta)
        dt.querySelector('input').onchange = (event) => {
            const estaCorreta = event.target.value == item.correta

            corretas.delete(item)
            if (estaCorreta) {
                corretas.add(item)
            }
            mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
        }


        quizItem.querySelector('dl').appendChild(dt)
    }

    quizItem.querySelector('dl dt').remove()

    //coloca a pergunta na tela
    quiz.appendChild(quizItem)
}
