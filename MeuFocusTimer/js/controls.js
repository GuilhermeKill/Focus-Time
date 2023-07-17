import {
    buttonForest,
    buttonRain,
    buttonCoffee,
    buttonBonfire,
    buttonDark,
    buttonLight,
    backGround,
    controlsDisplay
} from "./elements.js"

let darkModeOn = false

export default function(){ 
    function rain(){
    if(!darkModeOn){
        buttonRain.classList.toggle('fill')
        buttonCoffee.classList.remove('fill')
        buttonBonfire.classList.remove('fill')
        buttonForest.classList.remove('fill')
    }else{
        buttonRain.classList.toggle('fillDark')
        buttonCoffee.classList.remove('fillDark')
        buttonBonfire.classList.remove('fillDark')
        buttonForest.classList.remove('fillDark')
    }

    }

    function forest(){
    if(!darkModeOn){
        buttonForest.classList.toggle('fill')
        buttonCoffee.classList.remove('fill')
        buttonBonfire.classList.remove('fill')
        buttonRain.classList.remove('fill')
    }else{
        buttonForest.classList.toggle('fillDark')
        buttonCoffee.classList.remove('fillDark')
        buttonBonfire.classList.remove('fillDark')
        buttonRain.classList.remove('fillDark')
    }
    }

    function coffee(){
    if(!darkModeOn){
        buttonCoffee.classList.toggle('fill')
        buttonRain.classList.remove('fill')
        buttonBonfire.classList.remove('fill')
        buttonForest.classList.remove('fill')
    }else{
        buttonCoffee.classList.toggle('fillDark')
        buttonRain.classList.remove('fillDark')
        buttonBonfire.classList.remove('fillDark')
        buttonForest.classList.remove('fillDark')
    }
    }

    function bonfire(){
    if(!darkModeOn){
        buttonBonfire.classList.toggle('fill')
        buttonCoffee.classList.remove('fill')
        buttonRain.classList.remove('fill')
        buttonForest.classList.remove('fill')
    }else{
        buttonBonfire.classList.toggle('fillDark')
        buttonCoffee.classList.remove('fillDark')
        buttonRain.classList.remove('fillDark')
        buttonForest.classList.remove('fillDark')
    }
    }

    function putHide(){
        buttonDark.classList.toggle('hide')
        buttonLight.classList.toggle('hide')
    }

    function darkMode(){
        darkModeOn = false

        backGround.classList.toggle('screanTwo')
        buttonForest.classList.toggle('buttonScreanTwo')
        buttonRain.classList.toggle('buttonScreanTwo')
        buttonCoffee.classList.toggle('buttonScreanTwo')
        buttonBonfire.classList.toggle('buttonScreanTwo')
        controlsDisplay.classList.toggle('buttonScreanTwo')
    }

    function lightMode(){
        darkModeOn = true

        backGround.classList.toggle('screanTwo')
        buttonForest.classList.toggle('buttonScreanTwo')
        buttonRain.classList.toggle('buttonScreanTwo')
        buttonCoffee.classList.toggle('buttonScreanTwo')
        buttonBonfire.classList.toggle('buttonScreanTwo')
        controlsDisplay.classList.toggle('buttonScreanTwo')
    }


    return{
        rain,
        forest,
        coffee,
        bonfire,
        putHide,
        darkMode,
        lightMode
    }

}