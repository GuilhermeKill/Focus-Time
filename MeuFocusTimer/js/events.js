import {
    buttonPlay,
    buttonStop,
    buttonAdd,
    buttonRemove,
    buttonForest,
    buttonRain,
    buttonCoffee,
    buttonBonfire,
    buttonDark,
    buttonLight,
    slideFloresta,
    slideChuva,
    slideFogueira,
    slideCafeteria,
    
} from "./elements.js"
import{
    soundRain,
    soundForest,
    soundBonFire,
    soundCoffe,

} from "./sounds.js"

export default function({
    controls,
    sound,
    time
}){
    buttonForest.addEventListener('click', function(){
        controls.forest()
        sound.playSound(soundForest)
    })

    buttonRain.addEventListener('click', function(){
        controls.rain()
        sound.playSound(soundRain)
    })

    buttonCoffee.addEventListener('click', function(){
        controls.coffee()
        sound.playSound(soundCoffe)
    })

    buttonBonfire.addEventListener('click', function(){
        controls.bonfire()
        sound.playSound(soundBonFire)
    })

    buttonPlay.addEventListener('click', function(){
        time.countDown()
    })


    buttonStop.addEventListener('click', function(){
        time.reset()
    })

    buttonAdd.addEventListener('click', function(){
        time.addMinutes()
    })

    buttonRemove.addEventListener('click', function(){
        time.removeMinutes()
    })

    buttonLight.addEventListener('click', function(){
        controls.putHide()
        controls.lightMode()
    })
    
    buttonDark.addEventListener('click', function(){
        controls.putHide()
        controls.darkMode()
    })

    function setVolumeAudio(inputValue, audio){
        

        var volume = document.getElementById(inputValue).value;
        audio.volume = volume
    }

    slideCafeteria.addEventListener('input', function(){
        if(slideCafeteria === document.activeElement){
            buttonCoffee.disabled = true
            setVolumeAudio("slideCafeteria", soundCoffe)
        }
        slideCafeteria.addEventListener('blur', function(){
            buttonCoffee.disabled = false
        })
    })
    
    slideFloresta.addEventListener('input', function(){
        if(slideFloresta === document.activeElement){
            buttonForest.disabled = true
            setVolumeAudio("slideFloresta", soundForest)
        }
        slideFloresta.addEventListener('blur', function(){
            buttonForest.disabled = false
        })
        
    })

    slideChuva.addEventListener('input', function(){
        if(slideChuva === document.activeElement){
            buttonRain.disabled = true
            setVolumeAudio("slideChuva", soundRain)
        }
        slideChuva.addEventListener('blur', function(){
            buttonRain.disabled = false
        })

        
    })

    slideFogueira.addEventListener('input', function(){
        if(slideFogueira === document.activeElement){
            buttonBonfire.disabled = true
            setVolumeAudio("slideFogueira", soundBonFire)
        }
        slideFogueira.addEventListener('blur', function(){
            buttonBonfire.disabled = false
        })
    
    })

}