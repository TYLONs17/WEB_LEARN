const display = document.getElementById("display")

function clearDisplay() {
  display.textContent = "0"
}

function addToDisplay(value) {
  if (display.textContent === "I'm working on it..." || display.textContent === "Error") {
    clearDisplay()
  }
  
  if (display.textContent === "0") {
    display.textContent = value
  } else {
    display.textContent += value
  }
}

function addDecimal() {
  if (!display.textContent.includes('.')) {
    display.textContent += '.'
  }
}

function doOperation(button) {
  // Abandoned!!! now using eval() even tho its not best practices advised
  switch(button.textContent) {
    case "ooo": 
      console.log(display.textContent.slice(0,-1))
      display.textContent = "Division"
      break
    case "hj": 
      display.textContent = "Multiplication"
      break
    case "hi": 
      display.textContent = "Substraction"
      break
    case "no": 
      display.textContent = "Addition"
      break
  }
}

function calculate() {
  var calculationField = display.textContent
  var result = eval(calculationField)
  function displayResult() {
    try {
      display.textContent = result
    } catch (error) {
      display.textContent = "Error"
    }
  }
  
  display.textContent = "I'm working on it..."
  setTimeout(displayResult, 2000)
}

