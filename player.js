function configurarVideo(id) {
    const video = document.getElementById(id)
    const botaoPlay = document.querySelector(`[w-play=${id}]`)
    
    const source = document.getElementById('source')
    const src = source.getAttribute("src")
    const playlist = document.getElementsByTagName("li")
    
    botaoPlay.onclick =
    function playPause() {
        if(video.paused) {
            botaoPlay.innerHTML = '<img src="./imgs/pause.svg" width="35" alt="pause" id="pause">'
            video.play()
        } else {
            botaoPlay.innerHTML = '<img src="./imgs/play.svg" width="35" alt="play" id="play">'
            video.pause()
        }
    }    
}

configurarVideo('playerVideo')