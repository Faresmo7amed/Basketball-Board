let homeScore = document.getElementById("num-home")
let guestScore = document.getElementById("num-guest")
let timer = document.getElementById("timer")

let homeScoreCount = 0 
let guestScoreCount = 0 

function addOneHome() {
  homeScoreCount += 1;
  homeScore.textContent = homeScoreCount;
}

function addTwoHome() {
  homeScoreCount += 2;
  homeScore.textContent = homeScoreCount;
}

function addThreeHome() {
  homeScoreCount += 3;
  homeScore.textContent = homeScoreCount;
}

function addOneGuest() {
  guestScoreCount += 1;
  guestScore.textContent = guestScoreCount;
}

function addTwoGuest() {
  guestScoreCount += 2;
  guestScore.textContent = guestScoreCount;
}

function addThreeGuest() {
  guestScoreCount += 3;
  guestScore.textContent = guestScoreCount;
}

function reset() {
  homeScore.textContent = 0
  guestScore.textContent = 0
  timer.textContent = "00:00"
}