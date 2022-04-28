export default function(){

const buttonRain = new Audio("https://github.com/Paru369/focus-timer/blob/main/sounds/Chuva.wav?raw=true") 
const buttonNature = new Audio("https://github.com/Paru369/focus-timer/blob/main/sounds/Floresta.wav?raw=true") 
const buttonFire = new Audio("https://github.com/Paru369/focus-timer/blob/main/sounds/Lareira.wav?raw=true") 
const buttonCoffee = new Audio("https://github.com/Paru369/focus-timer/blob/main/sounds/Cafeteria.wav?raw=true") 

const buttonPressAudio = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/button-press.wav?raw=true")
const kitchenTimer = new Audio("https://github.com/maykbrito/automatic-video-creator/blob/master/audios/kichen-timer.mp3?raw=true")



function TimerEnds(){

  kitchenTimer.play()
}

function pressButton() {

  buttonPressAudio.play()
}

function pressButtonNature() {

  buttonNature.play()
}




  return {
    pressButton,
    buttonRain,
    buttonNature ,
    buttonFire,
    buttonCoffee, 
    pressButtonNature,
    TimerEnds// funcao
  
    }


}