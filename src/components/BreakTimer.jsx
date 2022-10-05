import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function BreakTimer() {
  const [countingDown, setCountingDown] = useState(false);
  const [time, setTime] = useState();
  const [mins, setMins] = useState();
  const [remainingTime, setRemainingTime] = useState('');

  useEffect(() => {
    if (countingDown) {
      let intervalId;
      let timeoutId;
      intervalId = setInterval(() => {
        const timeLeft = getRemainingTime();
        if (timeLeft == undefined || timeLeft == '00') {
          setRemainingTime('On Air');
          setCountingDown(false);

          timeoutId = setTimeout(() => {
            setRemainingTime('');
          }, 3000);
        } else {
          setRemainingTime(timeLeft);
        }
      }, 400);
      return () => {
        clearInterval(intervalId);
        clearTimeout(timeoutId);
      };
    }
  });

  const getRemainingTime = () => {
    const currentTime = new Date();
    let countDownTime = new Date(time);

    const difference = countDownTime.getTime() - currentTime.getTime();
    let hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((difference % (1000 * 60)) / 1000);

    if (hours > 0) return `${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
    if (minutes > 0) return `${pad(minutes)}:${pad(seconds)}`;
    if (seconds >= 0) return `${pad(minutes)}:${pad(seconds)}`;
  };

  const onSetMins = (e) => {
    setMins(e.target.value);
  };

  const onStartCountdown = (e) => {
    if (!/[0-9]+/.test(mins)) {
      alert('You need to set break time');
      return;
    }
    let countDownTime = new Date();
    countDownTime.setTime(countDownTime.getTime() + mins * 60 * 1000);
    setTime(countDownTime.getTime());
    setCountingDown(true);
  };

  const pad = (n) => {
    return n > 9 ? n : '0' + n;
  };

  return (
    <BreakContainer>
      <div className="breakTimeContainer">
        <div className="timeLeft">
          <h3 className="label">Break:</h3>
          <input className="breakeInput" type="number" placeholder="15" onChange={onSetMins} />
          <button className="breakBtn" onClick={onStartCountdown}>
            Set Break
          </button>
        </div>
        <div className="timeRight">
          <h3 className="breakTime">{remainingTime}</h3>
        </div>
      </div>
    </BreakContainer>
  );
}

export default BreakTimer;

// -----------------------------------------------------------------------------------------------------
// Style
const BreakContainer = styled.div`
  width: 100%;
  .label {
    font-weight: 400;
    font-size: 12px;
  }
  //Break time
  .breakTimeContainer {
    height: 4.6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0rem 0.5rem;
    border-bottom: 1px solid #b1b0b0b3;
  }
  .breakeInput {
    width: 2rem;
    height: 1.7rem;
    margin: 0px 5px;
    border-radius: 5px;
    text-align: center;
    font-size: 1rem;
    border: none;
  }
  .breakBtn {
    height: 1.9rem;
    border-radius: 5px;
    border: none;
    background-color: #2e2e2e;
    color: #fdc04e;
    padding: 2px 15px;
    font-size: 1rem;
    cursor: pointer;
  }
  .timeLeft {
    display: flex;
    align-items: center;
  }
  .breakTime {
    font-size: 1.5rem;
    font-family: 'Orbitron', sans-serif;
    letter-spacing: 0.1rem;
    color: #ff6a6a;
    font-weight: 100;
  }
`;
