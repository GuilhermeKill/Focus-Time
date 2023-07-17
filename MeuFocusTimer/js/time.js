export default function({
    buttonPlay,
    secondsDisplay,
    minutesDisplay
}){

    let timerTimeOut

    function updateDisplay(minutes, seconds){
        minutesDisplay.textContent = String(minutes).padStart(2, 0)
        secondsDisplay.textContent = String(seconds).padStart(2, 0)
    }

    function countDown(){
        buttonPlay.disabled = true
        timerTimeOut = setTimeout(function(){
            let seconds = Number(secondsDisplay.textContent)
            let minutes = Number(minutesDisplay.textContent)
            let isFinished = seconds <=0 && minutes <= 0 
    
            --seconds
    
            if(isFinished){
                buttonPlay.disabled = false
                return
            }
    
    
            if(seconds < 0){
                seconds = 59
                --minutes
            }
    
            updateDisplay(minutes, seconds)
            
            countDown()}
    ,1000)
    }

    function reset(){
        buttonPlay.disabled = false
        updateDisplay(0, 0)
        clearTimeout(timerTimeOut)
    }

    function addMinutes(){
        let minute = Number(minutesDisplay.textContent)
        minute += 5 
    
        updateDisplay(minute, 0)
    }

    function removeMinutes(){
        let minute = Number(minutesDisplay.textContent)
        minute -= 5
    
        if(minute < 0){
            minute = 0
        }
    
        updateDisplay(minute, 0)
    }

    return {
        updateDisplay,
        countDown,
        reset,
        addMinutes,
        removeMinutes,
    }

}