function createCounterApp() {
    
    const app = document.getElementById("counter-app")

    // Counter variable
    let counterValue = 0

    // Function to create a button element
    function createButton(text, className, onClickHandler) {
        const button = document.createElement("button")
        button.textContent = text
        button.classList.add(className)
        button.addEventListener("click", onClickHandler)
        return button
    }

    // Function to update the counter
    function updateCounter() {
        counterDisplay.textContent = counterValue
        if (counterValue < 0) {
            counterDisplay.style.color = "#8C001A"
        } else if (counterValue > 0) {
            counterDisplay.style.color = "#347235"
        } else {
            counterDisplay.style.color = "black"
        }
    }

    // Function to increment
    function increment() {
        counterValue++
        updateCounter()
    }

    // Function to decrement
    function decrement() {
        counterValue--
        updateCounter()
    }

    // Function to reset
    function reset() {
        let decrementInterval = setInterval(function () {
            if (counterValue > 0) {
                counterValue--
                updateCounter()
            } else if (counterValue < 0) {
                counterValue++
                updateCounter()
            } else {
                clearInterval(decrementInterval)
            }
        }, 50)
    }

    // Create the app elements
    const counterDisplay = document.createElement("div")
    counterDisplay.id = "counter"
    counterDisplay.textContent = counterValue
    
    const incrementButton = createButton("Increase", "incrementbutton", increment)
    const decrementButton = createButton("Decrease", "decrementbutton", decrement)
    const resetButton = createButton("Reset", "resetbutton", reset)

    // Elements to the DOM
    app.appendChild(counterDisplay)
    app.appendChild(decrementButton)
    app.appendChild(resetButton)
    app.appendChild(incrementButton)
}

window.onload = createCounterApp