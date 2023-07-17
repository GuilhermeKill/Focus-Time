const soundRain = new Audio('./js/sound/Chuva.wav')
const soundForest = new Audio('./js/sound/Floresta.wav')
const soundBonFire = new Audio('./js/sound/Lareira.wav')
const soundCoffe = new Audio('./js/sound/Cafeteria.wav')

soundRain.loop = true
soundForest.loop = true
soundBonFire.loop = true
soundCoffe.loop = true

export default function(){
    function playSound(sound){
        const soundList = [soundRain, soundForest, soundBonFire, soundCoffe]
        for(let i = 0; i < soundList.length; i++){
            if(soundList[i] != sound){
                soundList[i].pause()
            }
        }
        
        return sound.paused ? sound.play() : sound.pause()
    }


    

    return{
        playSound
    }
}
export{
    soundRain,
    soundForest,
    soundBonFire,
    soundCoffe,
}