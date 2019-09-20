const btn = document.querySelector('.btn')
const content = document.querySelector('.content')

const greetings = [
    'У меня всё хорошо', 
    'Ничего нового', 
    'оставь меня в покое'
]
const weather = [
    'Погода такая себе',
    'В душе пэйн, на улице рэйн',
    'Солнечно, прекрасно'
]

const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition
const recognition = new SpeechRecognition()
recognition.lang = 'ru'

recognition.onstart = function() {
    console.log('voice is activated')
}

recognition.onresult = function(event) {
    const current = event.resultIndex
    const transcript = event.results[current][0].transcript
    console.log(transcript)
    //content.textContent = transcript
    readOutLoud(transcript)
}

//add listener

btn.addEventListener('click', () =>{
    recognition.start()
})

function readOutLoud(message){
    const speech = new SpeechSynthesisUtterance()

    speech.text = 'Я не понимаю, о чем ты говоришь'

    if(message.includes('дела')){
        const finalText = greetings[Math.floor(Math.random() * greetings.length)]
        speech.text = finalText  
    }
    if(message.includes('погода')){
        const finalText = weather[Math.floor(Math.random() * greetings.length)]
        speech.text = finalText  
    }
    
    speech.volume = 1
    speech.rate = 1
    speech.pitch = 1

    window.speechSynthesis.speak(speech)
}


