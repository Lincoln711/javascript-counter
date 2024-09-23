function createCounterApp() {

    const app = document.getElementById("counter-app")
    const counterDisplay = document.createElement("div")
    counterDisplay.id = "counter"
    counterDisplay.textContent = 0

    // Increment Button
    const incrementButton = document.createElement("button")
    incrementButton.textContent = "Increase"
    incrementButton.classList.add("incrementbutton")

    // Decrement Button
    const decrementButton = document.createElement("button")
    decrementButton.textContent = "Decrease"
    decrementButton.classList.add("decrementbutton")

    // Reset Button
    const resetButton = document.createElement("button")
    resetButton.textContent = "Reset"
    resetButton.classList.add("resetbutton")

    // Counter and Buttons to the DOM
    app.appendChild(counterDisplay)
    app.appendChild(decrementButton)
    app.appendChild(resetButton)
    app.appendChild(incrementButton)

    // Counter Variable
    let counterValue = 0

    // Update Counter
    function updateCounter() {
        counterDisplay.textContent = counterValue

        if (counterValue < 0) {
            counterDisplay.style.color = "#8C001A"
        } else if (counterValue > 0) {
            counterDisplay.style.color = "#347235"
        }
        else {
            counterDisplay.style.color = "black"
        }
    }

    // Increment Event
    incrementButton.addEventListener("click", function () {
        counterValue++
        updateCounter()
    })

    // Decrement Event
    decrementButton.addEventListener("click", function () {
        counterValue--
        updateCounter()
    })

    // Reset Event
    resetButton.addEventListener("click", function () {
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
    })
}

window.onload = createCounterApp