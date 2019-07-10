const canvas = document.querySelector('canvas')

canvas.width = window.innerWidth
canvas.height = window.innerHeight

const c = canvas.getContext('2d')

function randomIntFromRange (min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min)
}

function Star (x, y, rad, color) {
  this.x = x
  this.y = y
  this.rad = rad
  this.color = color
}

Star.prototype.draw = function () {
  c.beginPath(),
  c.arc(this.x, this.y, this.rad, 0, Math.PI * 2)
  c.strokeStyle = '#D3D7DA'
  c.fillStyle = this.color
  c.fill()
  c.stroke()
}

window.addEventListener('resize', function () {
  canvas.width = window.innerWidth
  canvas.height = window.innerHeight
  // crawl.setAttribute('style', `font-size: ${canvas.width*0.002}rem`)
  // story.setAttribute('style', `word-spacing: ${canvas.width*0.03}px`)
// 	pre.setAttribute('style', `font-size: ${canvas.width*0.003}rem`)
  init()
})

// Event Listener
// window.addEventListener('mousemove',
//   function(event){
//     mouse.x = event.x
//     mouse.y = event.y
//   })

let n

let stars = []

function init () {
  n = Math.floor(innerWidth * 0.1)
  for (let i = 0; i < n; i++) {
    const radius = randomIntFromRange(1, 10) * 0.05
    const x = randomIntFromRange(radius, innerWidth - radius)
    const y = randomIntFromRange(2 * radius, innerHeight - radius)
    const color = '#D3D7DA'
    const star = new Star(x, y, radius, color)
    stars.push(star)
  }
}

function a () {
  for (var i = 0; i < stars.length; i++) {
    stars[i].draw()
  }
}

init()
a()


// const crawl = document.querySelector('.crawl')
// crawl.setAttribute('style', `font-size: ${canvas.width*0.003}rem`)
//
// const story = crawl.querySelector('.story')
// story.setAttribute('style', `word-spacing: ${canvas.width*0.02}px`)

// const pre = document.querySelector('.pre')
// pre.setAttribute('style', `font-size: ${canvas.width*0.003}rem`)
console.log(canvas.width)
console.log(canvas.height)
