const video = document.getElementById('playerVideo')
const botaoPlay = document.querySelector('[w-play]')
const imgBtPause = '<img src="./imgs/pause.svg" width="35" alt="pause" id="pause">'
const imgBtPlay = '<img src="./imgs/play.svg" width="35" alt="play" id="play">'

configurarVideo()

function configurarVideo() {
    botaoPlay.onclick = function playPause() {
        if(video.paused) {
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