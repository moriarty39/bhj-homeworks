'use strict'


const getCounter = () => {
    const timerText = document.getElementById('timer')
    let timerValue = timerText.textContent
    let firstTimerValue = timerValue
    return setInterval(() => {
        --timerValue
        timerText.textContent = timerValue
        if (timerValue == 0) {
            timerText.textContent = timerValue
            alert('Win Win Win!')
            timerValue = firstTimerValue
        }
    }, 100)
}
getCounter()
