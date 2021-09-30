const video = document.getElementById('playerVideo')
const lista = Array.from(document.getElementsByTagName('li'))
const botaoPlay = document.querySelector('[w-play]')
const imgBtPause = '<img src="./imgs/pause.svg" width="35" alt="pause" id="pause">'
const imgBtPlay = '<img src="./imgs/play.svg" width="35" alt="play" id="play">'
const timer = document.getElementById('timer')
const timerBarra = document.getElementById('timer-barra')
const timerDuracao = document.getElementById('timer-duracao')
const barraProgresso = document.getElementById('barra-progresso')

const videos = document.getElementsByTagName( "li" )
const videos_url = []
for(var i = 0; i < videos.length; i++)
    videos_url[i] = (videos[i].getAttribute('url'))


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
    const iconeBars = document.querySelector('#' + id + ' .musica > .icone-bars')
    
    source.setAttribute('src', url)
    video.load()
    video.play()
    botaoPlay.innerHTML = imgBtPause
}

video.addEventListener('play', () => {
    const urlSource = source.getAttribute('src')

    lista.forEach(element => {
        const id = element.getAttribute('id')
        const url = element.getAttribute('url')
        const iconeBars = document.querySelector('#' + id + ' .musica > #icone-bars > lottie-player')
        if (urlSource == url && video.paused == false) {
            element.className = "musica-selecionada"
            iconeBars.className = "lottie-bars-show"
        } else {
            element.className= "lista-descelecionada"
            iconeBars.className = "lottie-bars-none"
        }
    })
})

video.addEventListener('pause', () => {
    const urlSource = source.getAttribute('src')

    lista.forEach(element => {
        const id = element.getAttribute('id')
        const url = element.getAttribute('url')
        const iconeBars = document.querySelector('#' + id + ' .musica > #icone-bars > lottie-player')
        if (urlSource == url && video.paused) {
            iconeBars.className = "lottie-bars-none"
        }
    })
})

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
    timerBarra.style.width = larguraBarra + '%'
}

// Barra de Progresso alterável pelo clique
barraProgresso.addEventListener('click', (e) => {
    const tempoProgresso = (e.offsetX / barraProgresso.offsetWidth) * video.duration
    video.currentTime = tempoProgresso
})

function autostart() {
    const source = document.getElementById('source')
    const url = document.getElementById('source').getAttribute('src')
    let videoatual_index = videos_url.indexOf(url)
    
    if (videoatual_index >= 0 && videoatual_index < videos_url.length ) {
	    source.setAttribute('src',videos_url[videoatual_index+1])
	    video.load()
	    video.play()
    }
}