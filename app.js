const firstScore = document.querySelector('#first-score')
const secScore = document.querySelector('#sec-score')
const firstOne = document.querySelector('#first-one')
const firstTwo = document.querySelector('#first-two')
const firstThree = document.querySelector('#first-three')
const secOne = document.querySelector('#sec-one')
const secTwo = document.querySelector('#sec-two')
const secThree = document.querySelector('#sec-three')
const btn = document.querySelector('.btn')


//First Score
let num = 0
function incOne() {
    let firstOne = num += 1
    firstScore.innerText = firstOne
}
firstOne.addEventListener('click', incOne)

function incTwo() {
    let firstTwo = num += 2
    firstScore.innerText = firstTwo
}
firstTwo.addEventListener('click', incTwo)

function incThree() {
    let firstThree = num += 3
    firstScore.innerText = firstThree
}
firstThree.addEventListener('click', incThree)

//Second Score 
let num1 = 0
function decOne() {
    let secOne = num += 1
    secScore.innerText = secOne
}
secOne.addEventListener('click', decOne)

function decTwo() {
    let secTwo = num += 2
    secScore.innerText = secTwo
}
secTwo.addEventListener('click', decTwo)

function decThree() {
    let secThree = num += 3
    secScore.innerText = secThree
}
secThree.addEventListener('click', decThree)

// New Game Button
function newGame() {
    num = 0
    secScore.innerText = num;
    firstScore.innerText = num;
    
}
btn.addEventListener('click', newGame)






