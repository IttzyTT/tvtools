import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

function OnAirTimer() {
  const [countingDown, setCountingDown] = useState(false);
  const [time, setTime] = useState();
  const [remainingTime, setRemainingTime] = useState('0:00:00');

  useEffect(() => {
    if (countingDown) {
      let intervalId = setInterval(() => {
        const timeLeft = getRemainingTime(time);
        if (timeLeft == undefined) {
          setRemainingTime('On Air');
          setCountingDown(false);
        } else {
          setRemainingTime(timeLeft);
        }
      }, 1000);
      return () => {
        clearInterval(intervalId);
      };
    }
  });

  const getRemainingTime = () => {
    if (time === undefined) return;

    const timeStringParts = time.split(':');

    // making sure that we got atleast hours and minutes
    if (timeStringParts.length < 2) {
      return;
    }

    let countDownTime = new Date();
    countDownTime.setHours(parseInt(timeStringParts[0], 10));
    countDownTime.setMinutes(parseInt(timeStringParts[1], 10));
    // set the seconds if they were specified, otherwise set them to 0
    if (timeStringParts[2]) {
      countDownTime.setSeconds(parseInt(timeStringParts[2], 10));
    } else {
      countDownTime.setSeconds(0);
    }

    const currentTime = new Date();

    if (countDownTime.getDate() <= currentTime.getDate()) {
      countDownTime.setDate(countDownTime.getDate() + 1);
    }

    const difference = countDownTime.getTime() - currentTime.getTime();

    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    if (hours > 0) return hours + ':' + minutes + ':' + seconds;
    if (minutes > 0) return minutes + ':' + seconds;
    if (seconds >= 0) return seconds;
  };

  const onTimeChanged = (e) => {
    setTime(e.target.value);
    setCountingDown(true);
  };
  return (
    <TimerContainer>
      <div className="onAirContainer">
        <div className="timeLeft">
          <h3 className="label">On Air:</h3>
          <input type="time" onChange={onTimeChanged} step="3" />
        </div>
        <div className="timeRight">
          <h3 className="onAirTime">{remainingTime}</h3>
        </div>
      </div>
    </TimerContainer>
  );
}

export default OnAirTimer;
// Styleing
const TimerContainer = styled.div`
  width: 100%;
  .label {
    font-weight: 400;
    font-size: 12px;
  }

  // On air time
  .onAirContainer {
    display: flex;
    justify-content: space-between;
    padding: 0rem 0.5rem;
    border-bottom: 1px solid #b1b0b0b3;
  }
  .timeLeft {
    display: flex;
    align-items: center;
  }
  input {
    height: 1.7rem;
    border-radius: 5px;
    border: none;
    padding-left: 5px;
    font-size: 1rem;
    margin-left: 5px;
  }
  .onAirTime {
    font-size: 1.5rem;
    font-family: 'Orbitron', sans-serif;
    letter-spacing: 0.1rem;
    color: #6dfd6d;
    font-weight: 100;
  }
`;
