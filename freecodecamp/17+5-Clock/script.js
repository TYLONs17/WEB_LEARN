function reset() {
  document.getElementById("break-length").textContent = "7"
  document.getElementById("session-length").textContent = "17"
  document.getElementById("time-left").textContent = "17:00"
  
  var audio = document.getElementById("beep")
  audio.pause()
  audio.currentTime = 0
}

document.getElementById("reset").addEventListener("click", function () {
  reset()
})


////// + -
function decrementLength(elementId) {
  var currentValue = parseInt(document.getElementById(elementId).textContent)
  if (currentValue > 1) {
    document.getElementById(elementId).textContent = (currentValue - 1).toString()
  }
}

function incrementLength(elementId) {
  var currentValue = parseInt(document.getElementById(elementId).textContent)
  if (currentValue < 60) {
    document.getElementById(elementId).textContent = (currentValue + 1).toString()
  }
}

document.getElementById("break-decrement").addEventListener("click", function() {
  decrementLength("break-length")
})

document.getElementById("break-increment").addEventListener("click", function() {
  incrementLength("break-length")
})

document.getElementById("session-decrement").addEventListener("click", function() {
  decrementLength("session-length")
})

document.getElementById("session-increment").addEventListener("click", function() {
  incrementLength("session-length")
})
//// end + -


//timer, pause, resume
let timer

function startStopTimer() {
  if (timer) {
    clearInterval(timer)
    timer = null
  } else {
    timer = setInterval(updateTimer, 1000)
  }
}

document.getElementById("start_stop").addEventListener("click", function() {
  startStopTimer()
})




function switchTimerLabel() {
  let timerLabel = document.getElementById("timer-label").textContent

  document.getElementById("timer-label").textContent =
    timerLabel === "Session" ? "Break" : "Session"
}

function startNewCountdown() {
  let timerLabel = document.getElementById("timer-label").textContent

  let countdownLength =
    timerLabel === "Session"
      ? parseInt(document.getElementById("session-length").textContent)
      : parseInt(document.getElementById("break-length").textContent)

  document.getElementById("time-left").textContent = formatTime(countdownLength, 0)

  clearInterval(timer)

  timer = setInterval(updateTimer, 1000)
}

function handleTimerCompletion() {
  playBeep()

  switchTimerLabel()

  startNewCountdown()
}

function updateTimer() {
  let timeLeft = document.getElementById("time-left").textContent
  let [minutes, seconds] = timeLeft.split(":").map(Number)
  
  let totalSeconds = minutes * 60 + seconds
  
  if (totalSeconds <= 0) {
    playBeep()
    
    switchTimerLabel()
    
    startNewCountdown()
    
    handleTimerCompletion()
  } else {
    totalSeconds--
    
    minutes = Math.floor(totalSeconds / 60)
    seconds = totalSeconds % 60
    
    document.getElementById("time-left").textContent = formatTime(minutes, seconds)
  }
}

function formatTime(minutes, seconds) {
  return `${minutes < 10 ? "0" : ""}${minutes}:${seconds < 10 ? "0" : ""}${seconds}`
}

function playBeep() {
  let audio = document.getElementById("beep")
  audio.play()
}







