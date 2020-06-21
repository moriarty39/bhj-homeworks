const chatWidget = document.querySelector('.chat-widget')
const messages = document.querySelector('.chat-widget__messages')
let chatInput = document.querySelector('.chat-widget__input')


chatWidget.addEventListener('click', event => {
    chatWidget.classList.add('chat-widget_active');
})


document.addEventListener('keypress', event => {

    if (event.keyCode === 13) {
        let date = new Date()
        if (chatInput.value !== '') {
            messages.innerHTML += `
              <div class="message message_client">
                <div class="message__time"></div>
                <div class="message__text"></div>
              </div>`
            
            let newMessages = document.querySelectorAll('.message_client')
            let message = newMessages[newMessages.length - 1]
            message.querySelector('.message__text').textContent = chatInput.value
            message.querySelector('.message__time').textContent = date.getHours() + ':' + date.getMinutes()
            chatInput.value = ''
        } else {
            event.preventDefault()
        }
        messages.innerHTML += `
              <div class="message">
                <div class="message__time"></div>
                <div class="message__text"></div>
              </div>`
            
        let BotText = ['Добрый день!', 'Вы не купили ни одного товара, чтобы так с нами разговаривать!', 'Кто тут?', 'К сожалению все операторы сейчас заняты, не пишите больше', 'До свидания!', 'Мы ничего не будем Вам продавать!', 'Где ваша совесть?']
        const randomElement = BotText[Math.floor(Math.random() * BotText.length)]
        let newMessagesBot = document.querySelectorAll('.message')
        let messageBot = newMessagesBot[newMessagesBot.length - 1]
        messageBot.querySelector('.message__text').textContent = randomElement
        messageBot.querySelector('.message__time').textContent = date.getHours() + ':' + date.getMinutes()
    }
})

