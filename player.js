const video = document.getElementById('playerVideo')

const botaoPlay = document.querySelector('[w-play]')
const imgBtPause = '<img src="./imgs/pause.svg" width="35" alt="pause" id="pause">'
const imgBtPlay = '<img src="./imgs/play.svg" width="35" alt="play" id="play">'

const timer = document.getElementById('timer')
const timerBarra = document.getElementById('timer-barra')
const timerDuracao = document.getElementById('timer-duracao')
const barraProgresso = document.getElementById('barra-progresso')

configurarVideo()

function configurarVideo() {
    botaoPlay.onclick = function playPause() {
        if (video.paused) {
            botaoPlay.innerHTML = imgBtPause
            video.play()
        } else {
            botaoPlay.innerHTML = imgBtPlay
            video.pause()
        }
    }
}

function selecionarVideo(id) {
    const elemento = document.getElementById(id)
    const url = elemento.getAttribute('url')
    const source = document.getElementById('source')
    source.setAttribute('src', url)
    video.load()
    video.play()
    botaoPlay.innerHTML = imgBtPause
}

video.addEventListener('timeupdate', progressoVideo)

function progressoVideo() {
    let minutos = Math.floor(video.currentTime / 60)
    let segundos = Math.floor(video.currentTime - minutos * 60)
    let valorMinuto
    let valorSegundo

    let minutosDuracao = Math.floor(video.duration / 60)
    let segundosDuracao = Math.floor(video.duration - minutosDuracao * 60)
    let valorMinutoDuracao
    let valorSegundoDuracao

    // Fomatação de tempo do progresso do vídeo
    if (minutos < 10) {
        valorMinuto = '0' + minutos
    } else {
        valorMinuto = minutos
    }

    if (segundos < 10) {
        valorSegundo = '0' + segundos
    } else {
        valorSegundo = segundos
    }

    let tempoVideo = valorMinuto + ":" + valorSegundo
    timer.textContent = tempoVideo

    // Formatação de tempo da duração do vídeo
    if (minutosDuracao < 10) {
        valorMinutoDuracao = '0' + minutosDuracao
    } else {
        valorMinutoDuracao = minutosDuracao
    }

    if (segundosDuracao < 10) {
        valorSegundoDuracao = '0' + segundosDuracao
    } else {
        valorSegundoDuracao = segundosDuracao
    }

    let duracaoVideo = valorMinutoDuracao + ':' + valorSegundoDuracao
    timerDuracao.textContent = duracaoVideo

    let larguraBarra = 100 * (video.currentTime / video.duration)
    console.log(larguraBarra)
    timerBarra.style.width = larguraBarra + '%'
}