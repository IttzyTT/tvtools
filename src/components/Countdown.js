import React, { useState, useEffect } from 'react';

function Countdown() {
    const [countingDown, setCountingDown] = useState(false)
    const [time, setTime] = useState()
    const [remainingTime, setRemainingTime] = useState('0:00:00')

    useEffect(() => {
        if(countingDown){
            let intervalId = setInterval(() => {
                const timeLeft = getRemainingTime(time)
                if(timeLeft == undefined){
                    setRemainingTime('On Air')
                    setCountingDown(false)
                }else{
                    setRemainingTime(timeLeft)
                }
            }, 1000)
            return () => {
                clearInterval(intervalId);
            };
        }
    });

    const getRemainingTime = () => {
        if(time === undefined) return

        const timeStringParts = time.split(':')
        
        // making sure that we got atleast hours and minutes
        if(timeStringParts.length < 2){
            return
        }

        let countDownTime = new Date()
        countDownTime.setHours(parseInt(timeStringParts[0], 10))
        countDownTime.setMinutes(parseInt(timeStringParts[1], 10))
        // set the seconds if they were specified, otherwise set them to 0
        if(timeStringParts[2]){
            countDownTime.setSeconds(parseInt(timeStringParts[2], 10))
        }else{
            countDownTime.setSeconds(0)
        }
        
        const currentTime = new Date();

        if(countDownTime.getDate() <= currentTime.getDate()){
            countDownTime.setDate(countDownTime.getDate() + 1) 
        }

        const difference = countDownTime.getTime() - currentTime.getTime()

        let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
        let seconds = Math.floor((difference % (1000 * 60)) / 1000);

        if(hours > 0) return hours+':'+minutes+':'+seconds;            
        if(minutes > 0) return minutes+':'+seconds;            
        if(seconds >= 0) return seconds;            
    }

    const onTimeChanged = (e) => {
        setTime(e.target.value)
        setCountingDown(true)
    }

    return (
        <div id="countdown-timee">
            <input type="time" onChange={onTimeChanged} step="3" />
            <h1>{remainingTime}</h1>
        </div>
    )

}

export default Countdown