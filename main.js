// alert(`Os candidatos são:\n Freddie Mercury: 33 \n Cachorro Caramelo: 999 `)
let botoes = document.querySelectorAll('.botao');
let corrigir = document.querySelector('.botao__corrigir')
let confirma = document.querySelector('.botao__confirmar')
let votoBranco = document.querySelector('.botao__branco')
let valor = 0, numCandidato = ''
let fotoCandidato = document.querySelector('.fotoCandidato')

// funçoes nos botao
botoes.forEach(botao => {
    botao.addEventListener("click", (e) => {
        valor = e.target.value
        numCandidato += valor

        if (numCandidato === '24') {
            document.querySelector('.candidato').textContent = 'Caneta Azul'
            fotoCandidato.src = 'https://cdn.discordapp.com/attachments/1082704038837100544/1082715292020519093/blue_pen.jpg'
            fotoCandidato.style.display = 'block'
        }

        else if (numCandidato == '999') {
            document.querySelector('.candidato').textContent = 'Dog Caramelo'
            fotoCandidato.src = 'https://cdn.discordapp.com/attachments/1082704038837100544/1082710221845180507/dog_caramelo.jpg'
            fotoCandidato.style.display = 'block'
        }

        else if (numCandidato == '7') {
            document.querySelector('.candidato').textContent = 'The Roch Rebaixado'
            fotoCandidato.src = 'https://cdn.discordapp.com/attachments/1082704038837100544/1082711656183906416/the_rock_anao.jpg'
            fotoCandidato.style.display = 'block'
        }

        else {
            fotoCandidato.style.display = 'none'
            document.querySelector('.candidato').textContent = ''
            document.querySelector('.confirma').textContent = ''
        }
        resultado()
    })
});

// Resultado na tela
function resultado() {
    document.querySelector('.result').textContent += valor;
}

// Correção na tela
function correct() {
    document.querySelector('.result').textContent = ''
    numCandidato = ''
    fotoCandidato.style.display = 'none'
    document.querySelector('.candidato').textContent = ''
    document.querySelector('.confirma').textContent = ''
}
corrigir.addEventListener('click', correct)

// Confirma botão
function confirmar() {
    if (numCandidato === '24') {
        document.querySelector('.confirma').textContent = 'VOTO CONFIRMADO!'
        document.querySelector('.som').play()
    }

    else if (numCandidato == '999') {
        document.querySelector('.confirma').textContent = 'VOTO CONFIRMADO!'
        document.querySelector('.som').play()
    }

    else if (numCandidato == '7') {
        document.querySelector('.confirma').textContent = 'VOTO CONFIRMADO!'
        document.querySelector('.som').play()
    }

    else if( document.querySelector('.confirma').textContent == 'VOTO EM BRANCO?'){
        document.querySelector('.confirma').textContent = 'VOTO EM BRANCO CONFIRMADO!'
        
        document.querySelector('.som').play()
    }

    else {
        alert('Voto nulo confirmado!')
        document.querySelector('.som').play()
        
    }
}
confirma.addEventListener('click', confirmar)

// Voto branco
function branco() {
    document.querySelector('.confirma').textContent = 'VOTO EM BRANCO?'
}
votoBranco.addEventListener('click', branco)
