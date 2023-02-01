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
    num ++
    firstScore.innerText = num
}
firstOne.addEventListener('click', incOne)

function incTwo() {
    num += 2
    firstScore.innerText = num
}
firstTwo.addEventListener('click', incTwo)

function incThree() {
    num += 3
    firstScore.innerText = num
}
firstThree.addEventListener('click', incThree)

//Second Score 
let num1 = 0
function decOne() {
    num1 ++
    secScore.innerText = num1
}
secOne.addEventListener('click', decOne)

function decTwo() {
    num1 += 2
    secScore.innerText = num1
}
secTwo.addEventListener('click', decTwo)

function decThree() {
    num1 += 3
    secScore.innerText = num1
}
secThree.addEventListener('click', decThree)

// New Game Button
function newGame() {
    num = 0
    secScore.innerText = num;
    firstScore.innerText = num;
    
}
btn.addEventListener('click', newGame)






