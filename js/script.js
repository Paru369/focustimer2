import Sound from "./sounds.js"
const sound = Sound()

// sound.pressButtonNature()
//sound.pressButton()

    // pressButton,   sound.pressButtonNature()
    // buttonRain, sound.buttonRain.play()
    // buttonNature , sound.buttonNature.play()
    // buttonFire, sound.buttonFire.play()
    // buttonStarbucks,  sound.buttonStarbucks.play()
    // pressButtonNature,    



// cria variavel para os botoes por seletor

const buttonPlay = document.querySelector('.play')
const buttonPause  = document.querySelector('.pause')
const buttonStop  = document.querySelector('.stop')
const buttonMoreTime  = document.querySelector('.moretime')
const buttonLessTime  = document.querySelector('.lesstime')
const buttonNature = document.querySelector('.nature')
const buttonRain = document.querySelector('.rain')
const buttonCoffee = document.querySelector('.coffee')
const buttonFire = document.querySelector('.fire')

const blinkerStop = document.querySelector('.fillstop')

// Modificadores de SVG
const fillModifyNature  = document.querySelector('.fillModifyNature')
const fillModifyRain  = document.querySelector('.fillModifyRain')
const fillModifyCoffee  = document.querySelector('.fillModifyCoffee')
const fillModifyFire  = document.querySelector('.fillModifyFire')

//Modificadores de BG

const bgModifyNature  = document.querySelector('.nature')
const bgModifyRain  = document.querySelector('.rain')
const bgModifyCoffee  = document.querySelector('.coffee')
const bgModifyFire  = document.querySelector('.fire')

// variaveis para os minutos e segundos

const minutesDisplay = document.querySelector('.minutes')
const secondsDisplay = document.querySelector('.seconds')
const twoPointsDisplay = document.querySelector('.twopoints')

// Variveis pro darkMode

const makeDark = document.querySelector('.light')
const makeDark1 = document.querySelector('.fillPlay')
const makeDark2 = document.querySelector('.fillPause')
const makeDark3 = document.querySelector('.fillStop')
const makeDark4 = document.querySelector('.fillMore')
const makeDark5 = document.querySelector('.fillLess')
const buttonSun = document.querySelector('.day')
const buttonMoon = document.querySelector('.dark')

const volumeNature = document.getElementById('nature');
const volumeRain = document.getElementById('rain');
const volumeCoffee = document.getElementById('coffee');
const volumeFire = document.getElementById('fire');

// variaveis do timmer

// let minutesString = textContent.querySelector('.minutes')
// let twoPointsString = textContent.querySelector('.seconds')
// let secondsStrig = textContent.querySelector('.twopoints')

let minutes = 25
let seconds = 0
let timerTimerOut
let soundON =  false

// FUNCOES


function updateTimerDisplay(min, sec){

  secondsDisplay.textContent = String(sec).padStart(2, "0")
  minutesDisplay.textContent = String(min).padStart(2, "0")

}

function MoreTime(){

  minutes = Number(minutesDisplay.textContent)
  seconds = Number(secondsDisplay.textContent)

  minutes = minutes + 5
  updateTimerDisplay(minutes, seconds)
  

}

function LessTime(){

  minutes = Number(minutesDisplay.textContent)
  seconds = Number(secondsDisplay.textContent)

  if (minutes >= 5){
    minutes = minutes - 5

    updateTimerDisplay(minutes, seconds)
    
  } else if(minutes <= 5) {
    minutes = 0
    updateTimerDisplay(minutes, seconds)
  }

  

}

function resetControls(){

buttonPlay.classList.remove('hide')
buttonPause.classList.add('hide')
updateTimerDisplay(25, 0)



}

function PressPlay(){

  buttonPlay.classList.add('hide')
  buttonPause.classList.remove('hide')

  
}

function PressPause(){

  buttonPlay.classList.remove('hide')
  buttonPause.classList.add('hide')
}

function Blinker(){

  twoPointsDisplay.classList.toggle('putColor')

}

function StopBlinker(){

  minutes = Number(minutesDisplay.textContent)

 

  setTimeout(function() {

    blinkerStop.classList.toggle('putStopColor')    

    if (minutes == 25){
      blinkerStop.classList.remove('putStopColor') 
      return
    }
    
    StopBlinker()

   

    

    


    

  }, 500)
}


function Countdown(){

  timerTimerOut = setTimeout(function() {

    let seconds = Number(secondsDisplay.textContent)
    let minutes = Number(minutesDisplay.textContent)

    if (seconds <=0) {

      if (minutes <=0 ){

        StopBlinker()
        sound.TimerEnds()
        return
      }

      seconds = 60
      minutes = minutes -1


    }



    updateTimerDisplay(minutes, (seconds-1))

    
    
    Blinker()
    Countdown()
    

  }, 1000)

}


// Controles do darkmode


buttonSun.addEventListener('click', function(){

  buttonSun.classList.add('hide')
  buttonMoon.classList.remove('hide')
  makeDark.classList.toggle('darkMode')
  makeDark1.classList.toggle('darkMode')
  makeDark2.classList.toggle('darkMode')
  makeDark3.classList.toggle('darkMode')
  makeDark4.classList.toggle('darkMode')
  makeDark5.classList.toggle('darkMode')
  
})

buttonMoon.addEventListener('click', function(){

  buttonSun.classList.remove('hide')
  buttonMoon.classList.add('hide')
  makeDark.classList.toggle('darkMode')
  makeDark1.classList.toggle('darkMode')
  makeDark2.classList.toggle('darkMode')
  makeDark3.classList.toggle('darkMode')
  makeDark4.classList.toggle('darkMode')
  makeDark5.classList.toggle('darkMode')
    
    
})

// Eventos dos botoes

buttonPlay.addEventListener('click', function(){


sound.pressButton()
PressPlay()
Countdown()




})

buttonPause.addEventListener('click', function(){

  sound.pressButton()
  clearTimeout(timerTimerOut)
  PressPause()
  
  
})

buttonStop.addEventListener('click', function(){
  sound.pressButton()

  clearTimeout(timerTimerOut)
 resetControls()
  
})

buttonMoreTime.addEventListener('click', function(){
  sound.pressButton()

  MoreTime()
  
 })

buttonLessTime.addEventListener('click', function(){
  sound.pressButton()

  LessTime()
   
 
})
 


volumeNature.addEventListener('click', function () {
  
  sound.buttonNature.volume = this.value
})

volumeRain.addEventListener('click', function () {

  sound.buttonRain.volume = this.value

})

volumeCoffee.addEventListener('click', function () {

  sound.buttonCoffee.volume = this.value
})

volumeFire.addEventListener('click', function () {

  sound.buttonFire.volume = this.value
})


function ClickNature() {
  
  fillModifyNature.classList.toggle('selected') 
  bgModifyNature.classList.toggle('selected')  
}  

 function ClickRain(){
    fillModifyRain.classList.toggle('selected') 
    bgModifyRain.classList.toggle('selected') 
}

function ClickCoffee(){
      fillModifyCoffee.classList.toggle('selected')  
      bgModifyCoffee.classList.toggle('selected')
}

function ClickFire(){
  fillModifyFire.classList.toggle('selected') 
  bgModifyFire.classList.toggle('selected')  
}

function CleanButtons(){
    fillModifyNature.classList.remove('selected') 
    bgModifyNature.classList.remove('selected')  
    fillModifyRain.classList.remove('selected') 
    bgModifyRain.classList.remove('selected') 
    fillModifyCoffee.classList.remove('selected')  
    bgModifyCoffee.classList.remove('selected')
    fillModifyFire.classList.remove('selected') 
    bgModifyFire.classList.remove('selected')  
}

function PauseSounds(){

  sound.buttonRain.pause()
  sound.buttonNature.pause()
  sound.buttonFire.pause()
  sound.buttonCoffee.pause()

}

function PlayNature(){

  if (soundON == false){
    soundON = true
    PauseSounds()
    sound.buttonNature.play()
   
    
  } else{
    soundON = false
    PauseSounds()
    CleanButtons()
  }
}

function PlayRain(){

  if (soundON == false){
    soundON = true
    PauseSounds()
    sound.buttonRain.play()
  } else{
    soundON = false
    PauseSounds()
    CleanButtons()
  }
}

function PlayCoffee(){

  if (soundON == false){
    soundON = true
    PauseSounds()
    sound.buttonCoffee.play()
  } else{
    soundON = false
    PauseSounds()
    CleanButtons()
  }
}

function PlayFire(){

  if (soundON == false){
    soundON = true
    PauseSounds()
    sound.buttonFire.play()
  } else{
    soundON = false
    PauseSounds()
    CleanButtons()
  }
}



  

buttonNature.addEventListener('click', function(){

  
  ClickNature()
  PlayNature()


})

buttonRain.addEventListener('click', function(){

  ClickRain()
  PlayRain()
  


})
buttonCoffee.addEventListener('click', function(){
  
  ClickCoffee()
  PlayCoffee()
  
  
})
buttonFire.addEventListener('click', function(){

  
  ClickFire()
  PlayFire()



})
