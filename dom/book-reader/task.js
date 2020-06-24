const fontsize = document.querySelectorAll('.font-size')
const text = document.querySelectorAll('.book__content p')
const controlFontsize = Array.from(document.querySelector('.book__control_font-size').children)

fontsize.forEach((value) => {
    value.onclick = ((event) => {
        event.preventDefault()
        text.forEach((value) => {
            value.classList.remove('book_fs-small')
            value.classList.remove('book_fs-big')
        })
        controlFontsize.forEach((indexcontrol) => {
            indexcontrol.classList.remove('font-size_active')
        })
        value.classList.add('font-size_active')
        if ((value.className).includes('font-size_small')) {
            text.forEach((value) => {
                value.classList.add('book_fs-small')
            })
        } else if ((value.className).includes('font-size_big')) {
            text.forEach((value) => {
                value.classList.add('book_fs-big')
            })
        }
    })
})
