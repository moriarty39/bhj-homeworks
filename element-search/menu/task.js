const menuLink = document.querySelectorAll('.menu__link')
menuSub = document.querySelectorAll('.menu_sub')

menuLink.forEach(value => {

    value.onclick = (event) => {

        if (value.parentElement.children.length > 1) {
            event.preventDefault()
            if (value.nextElementSibling.getAttribute('class').includes('menu_active')) {
                value.nextElementSibling.classList.remove('menu_active')
                return
            } else {
                menuSub.forEach(valueMenuSub => {
                    valueMenuSub.classList.remove('menu_active')
                })
                value.parentElement.querySelector('.menu_sub').classList.add('menu_active')
            }
        }
    }
})
