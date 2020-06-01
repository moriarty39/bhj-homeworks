'use strict'
function getHole(index) {
    return document.getElementById('hole' + index)
}

let win = 0
let fail = 0

function newList() {
    document.getElementById('dead').textContent = 0
    document.getElementById('lost').textContent = 0
}

for (let i = 1; i < 10; i++) {

    getHole(i).onclick = function () {
        if (getHole(i).classList.contains('hole_has-mole')) {
            ++win
            document.getElementById('dead').textContent = win
        } else {
            ++fail
            document.getElementById('lost').textContent = fail
        }
        if (fail >= 5) {
            alert('YOU LOST!')
            win = 0
            fail = 0
            newList()
        }
        if (win == 10) {
            alert('YOU WON!')
            win = 0
            fail = 0
            newList()
        }
    }
}
