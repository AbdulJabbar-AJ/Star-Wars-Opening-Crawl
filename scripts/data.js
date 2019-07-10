import { startAnimation, opening, logo, crawl, replay } from './index.js'
// import { Sound } from './music.js'

export const form = document.querySelector('.form')
const Form = form.querySelector('form')
const submit = form.querySelector('button')
const episode = document.querySelector('.episode')
const title = document.querySelector('.title')
const story = document.querySelector('.storyline')
const musicSW = new Audio('media/sound/Star_Wars_original_opening_crawl_1977.mp3')

// Select and play Crawl moview
function play () {
  let movie = (Form.movie.value)
  episode.innerText = data[movie].episode
  title.innerText = data[movie].title
  story.innerHTML = data[movie].story
  form.style.display = 'none'
  startAnimation(opening)
  startAnimation(logo)
  startAnimation(crawl)
  startAnimation(replay)
  musicSW.play()
}

submit.addEventListener('click', play)
submit.addEventListener('keypress', e => {
  if (e.keyCode === 13 || e.which === 13) {
    play()
  }
})


const data = [
  {
    episode: 'Episode IV',
    title: 'A NEW HOPE',
    story: "<p class='section'>It is a period of civil war. Rebel spaceships, striking from a hidden base, have won their first victory against the evil Galactic Empire.</p><p class='section'>During the battle, Rebel spies managed to steal secret plans to the Empire’s ultimate weapon, the DEATH STAR, an armored space station with enough power to destroy an entire planet.</p><p class='section'>Pursued by the Empire’s sinister agents, Princess Leia races home aboard her starship, custodian of the stolen plans that can save her people and restore freedom to the galaxy....</p>"
  },
  {
    episode: 'Episode V',
    title: 'THE EMPIRE STRIKES BACK',
    story: "<p class='section'>It is a dark time for the Rebellion. Although the Death Star has been destroyed, Imperial troops have driven the Rebel forces from their hidden base and pursued them across the galaxy.</p><p class='section'>Evading the dreaded Imperial Starfleet, a group of freedom fighters led by Luke Skywalker has established a new secret base on the remote ice world of Hoth.</p><p class='section'>The evil lord Darth Vader, obsessed with finding young Skywalker, has dispatched thousands of remote probes into the far reaches of space....</p>"
  },
  {
    episode: 'Episode VI',
    title: 'Return of the Jedi',
    story: "<p class='section'>Luke Skywalker has returned to his home planet of Tatooine in an attempt to rescue his friend Han Solo from the clutches of the vile gangster Jabba the Hutt.</p><p class='section'>Little does Luke know that the GALACTIC EMPIRE has secretly begun construction on a new armored space station even more powerful than the first dreaded Death Star.</p><p class='section'>When completed, this ultimate weapon will spell certain doom for the small band of rebels struggling to restore freedom to the galaxy...</p>"
  },
  {
    episode: 'Episode I',
    title: 'THE PHANTOM MENACE',
    story: "<p class='section'>Turmoil has engulfed the Galactic Republic. The taxation of trade routes to outlying star systems is in dispute.</p><p class='section'>Hoping to resolve the matter with a blockade of deadly battleships, the greedy Trade Federation has stopped all shipping to the small planet of Naboo.</p><p class='section'>While the Congress of the Republic endlessly debates this alarming chain of events, the Supreme Chancellor has secretly dispatched two Jedi Knights, the guardians of peace and justice in the galaxy, to settle the conflict....</p>"
  },
  {
    episode: 'Episode II',
    title: 'ATTACK OF THE CLONES',
    story: "<p class='section'>There is unrest in the Galactic Senate. Several thousand solar systems have declared their intentions to leave the Republic.</p><p class='section'>This separatist movement, under the leadership of the mysterious Count Dooku, has made it difficult for the limited number of Jedi Knights to maintain  peace and order in the galaxy.</p><p class='section'>Senator Amidala, the former Queen of Naboo, is returning to the Galactic Senate to vote on the critical issue of creating an ARMY OF THE REPUBLIC to assist the overwhelmed Jedi....</p>"
  },
  {
    episode: 'Episode III',
    title: 'REVENGE OF THE SITH',
    story: "<p class='section'>War! The Republic is crumbling under attacks by the ruthless Sith Lord, Count Dooku. There are heroes on both sides. Evil is everywhere.</p><p class='section'>In a stunning move, the fiendish droid leader, General Grievous, has swept into the Republic capital and kidnapped Chancellor Palpatine, leader of the Galactic Senate.</p><p class='section'>As the Separatist Droid Army attempts to flee the besieged capital with their valuable hostage, two Jedi Knights lead a desperate mission to rescue the captive Chancellor....</p>"
  },
  {
    episode: 'Episode VII',
    title: 'THE FORCE AWAKENS',
    story: "<p class='section'>Luke Skywalker has vanished. In his absence, the sinister FIRST ORDER has risen from the ashes of the Empire and will not rest until Skywalker, the last Jedi, has been destroyed.</p><p class='section'>With the support of the REPUBLIC, General Leia Organa leads a brave RESISTANCE. She is desperate to find her brother Luke and gain his help in restoring peace and justice to the galaxy.</p><p class='section'>Leia has sent her most daring pilot on a secret mission to Jakku, where an old ally has discovered a clue to Luke's whereabouts....</p>"
  },
  {
    episode: 'Episode VIII',
    title: 'THE LAST JEDI',
    story: "<p class='section'>The FIRST ORDER reigns. Having decimated the peaceful Republic, Supreme Leader Snoke now deploys the merciless legions to seize military control of the galaxy.</p><p class='section'>Only General Leia Organa's band of RESISTANCE fighters stand against the rising tyranny, certain that Jedi Master Luke Skywalker will return and restore a spark of hope to the fight.</p><p class='section'>But the Resistance has been exposed. As the First Order speeds toward the rebel base, the brave heroes mount a desperate escape....</p>"
  },
  {
    episode: 'Episode Custom',
    title: 'COMING SOON',
    story: `<p class='section'>The year is ${new Date().getFullYear()} and Person X has come to this very site to preview the Star Wars Opening Crawl app. Person X was unfortunately let down when they found out that the custom crawl feature is not yet available.</p><p class='section'>In search of answers, Person X meticulously searched every inch of the reachable universe in order to find the CRAWL CREATOR, until he was found living in a dark cold corner of the Milky Way Galaxy</p><p class='section'>Enraged, Person X question the creator's choice to ship the app without a custom crawl feature. The Crawl Creator then revealed that desired feature will become available in a future update....</p>`
  }
]
