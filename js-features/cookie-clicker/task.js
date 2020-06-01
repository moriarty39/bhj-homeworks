'use strict'
function getCounter() {
    const yummy = document.getElementById('cookie')
    const clicker = document.getElementById('clicker__counter')
    let counter = 0

    yummy.onclick = function () {
        yummy.animate([
            { width: '230px' },
            { width: '200px' }
        ], {
            duration: 100,
            iterations: 1
        })

        ++counter
        clicker.textContent = counter
    }
}

getCounter()