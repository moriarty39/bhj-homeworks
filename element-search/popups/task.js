'use strict'

window.onload = () => {
    const modalMain = document.getElementById('modal_main')
    const modalSuccess = document.getElementById('modal_success')
    modalMain.classList.add('modal_active')
    document.onmousedown = (event) => {

        if ((event.target.localName === 'div') && (event.target.className.includes('modal__close'))) {
            modalMain.classList.remove('modal_active')
            modalSuccess.classList.remove('modal_active')
        }
        if (event.target.className.includes('btn')) {
            modalMain.classList.remove('modal_active')
            modalSuccess.classList.add('modal_active')
        }

    }

}
