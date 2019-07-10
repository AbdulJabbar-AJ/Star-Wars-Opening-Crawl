import { form } from './data.js'

// BUG: Opening font size doesn't scale correctly on all window sizes

// On load
window.onload = function () {
  init()
}

window.onanimationiteration = console.log;

export function startAnimation (el) {
  el.classList.add('start')
}

export function restartAnimation (el) {
  el.classList.remove('start')
}


// Variables
let x = window.innerWidth
let y = window.innerHeight
// Some of thse have to be getEle.... becuase when startAnimation runs, the selector changes
export const opening = document.getElementsByClassName('opening')[0]
export const logo = document.querySelector('.logo')
const heading = document.querySelector('.heading')
const main = document.querySelector('.main')
export const crawl = document.getElementsByClassName('crawl')[0]
const story = document.querySelector('.storyline')
export const replay = document.querySelector('.replay')
const replayIcon = replay.querySelector('img')



// CSS Sizes
function cssSizes () {
  opening.style.fontSize = `${roundDecimals(x * 0.0025, 1)}rem`
  heading.style.fontSize = `${roundDecimals(x * 0.005, 1)}rem`
  story.style.fontSize = `${roundDecimals(x * 0.004, 1)}rem`
  // story.style.wordSpacing = `${Math.round(x*0.0128)}px`
  main.style.transform = `perspective(150px) rotateX(${
    roundDecimals(calcDeg(y), 1)
  }deg)`
}


function init () {
  x = window.innerWidth
  y = window.innerHeight
  cssSizes()
}

function onOrientation () {
  switch (window.orientation) {
    case -90 || 90 || 0:
      init()
      break
    default:
      init()
  }
}

// Replay
function action () {
  if (replayIcon.classList.contains('reverse')) {
    replayIcon.classList.remove('reverse')
  }
  replayIcon.classList.add('action')
}

function reverseAction () {
  replayIcon.classList.remove('action')
  replayIcon.classList.add('reverse')
}

function restart () {
  restartAnimation(opening)
  restartAnimation(logo)
  restartAnimation(crawl)
  restartAnimation(replay)
  form.style.display = 'block'
}


// Event Listeners
window.addEventListener('resize', init, false)
window.addEventListener('orientationchange', onOrientation, false)
replay.addEventListener('mouseover', action, false)
replay.addEventListener('mouseout', reverseAction, false)
replay.addEventListener('click', restart, false)

// Utility Functions

function roundDecimals (math, precision) {
  let x

  if (precision < 0) {
    return false
  } else if (precision === 0) {
    x = Number(String(math).split('.')[0])
  } else if (precision > 0) {
    let a = String(math).split('.')

    let b
    let c

    if (a[1]) {
      b = [ a[1].slice(0, precision), a[1].slice(precision, precision + 1) ]
      if (b[1][0] < 5) {
        c = b[0]
      } else c = Number(b[0]) + 1
    } else x = Number(a[0])

    x = Number(`${a[0]}.${c}`)
  }

  return x
}


// y = 5E-05x^2 - 0.0929x + 58
// UPTO 700
//   -18.03*LN(H15)+129.63
// 700 +
//   5.601ln(x) + 47.101

function calcDeg (y) {
  let x

  if (y > 700) {
    x = -5.601 * Math.log(y) + 47.101
  } else x = -18.03 * Math.log(y) + 129.63

  return x
}
