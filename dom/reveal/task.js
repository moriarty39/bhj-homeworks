const reveal = document.querySelectorAll('.reveal')

window.addEventListener('scroll', () => {
    reveal.forEach(arr => {

        if (arr.getBoundingClientRect().top * 0.8 < window.innerHeight) {
            arr.classList.add('reveal_active')
        }
        if ((arr.getBoundingClientRect().top * 0.8 < 0) || (arr.getBoundingClientRect().top * 1.2 > window.innerHeight)) {
            arr.classList.remove('reveal_active')
        }
    })

})
