import '../scss/styles.scss'

const elemRoot = document.getElementById('root')
elemRoot.classList.add('container')


const video = document.querySelector('#video')
const button = document.querySelector('#btn-play')
document.querySelector('.fa-pause').style.display = 'none'


const play = (event) => {
    if(video.paused){
        document.querySelector('.fa-play').style.display = 'none'
        document.querySelector('.fa-pause').style.display = 'block'
        video.play()
    } else {
        document.querySelector('.fa-play').style.display = 'block'
        document.querySelector('.fa-pause').style.display = 'none'
        video.pause()
    }
}

button.addEventListener('click', (event) => {
    play(event)
})
video.addEventListener('click', (event) => {
    play(event)
})

video.addEventListener('timeupdate', () => {
    let current = (video.currentTime / video.duration) * 100
    if(video.ended) {
        document.querySelector('.fa-play').style.display = 'block'
        document.querySelector('.fa-pause').style.display = 'none'
    }
    document.querySelector('.inner').style.width = `${current}%`
})



var onda1 = document.querySelector('#onda1')
var onda2 = document.querySelector('#onda2')
var onda3 = document.querySelector('#onda3')
var onda4 = document.querySelector('#onda4')


window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY
    onda1.style.backgroundPositionX = 400 + scrollPosition * 3 + 'px'
    onda2.style.backgroundPositionX = 300 + scrollPosition * -3 + 'px'
    onda3.style.backgroundPositionX = 200 + scrollPosition * 2 + 'px'
    onda4.style.backgroundPositionX = 100 + scrollPosition * -2 + 'px'
})



const target = document.querySelectorAll('[data-anime]')
const animationClass = 'animate'

function scrollAnime() {
    const windowTop = window.pageYOffset + ((window.innerHeight * 3) / 4)
    target.forEach(function(element){
        if((windowTop) > element.offsetTop){
            element.classList.add(animationClass)
        } else{
            element.classList.remove(animationClass)
        }

        console.log(element.offsetTop)
    })
}

window.addEventListener('scroll', function() {
    scrollAnime()
})