import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';

function BreakTimer() {
  const [count, setCount] = useState(''); // Input number converted to seconds
  const [input, setinput] = useState('');
  const [minute, setMinute] = useState('');
  const [second, setSecond] = useState('');
  const Myswal = withReactContent(Swal);

  // takes the input value and sets the state
  const onChange = (e) => {
    setinput(e.target.value);
  };

  // looks for input value and sets the timer
  const handleOnClick = () => {
    if (input === '') {
      Myswal.fire({
        title: 'Break time',
        text: 'You need to set a break time!',
        icon: 'warning',
        confirmButtonText: 'oh, okey',
      });
    }
    setCount(input * 60);
  };

  // seconds converter
  function secondsToTime(secs) {
    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);
    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.ceil(divisor_for_seconds);

    // Adds zero infront of seconds
    minutes = minutes < 10 ? '0' + minutes : minutes;
    seconds = seconds < 10 ? '0' + seconds : seconds;

    return {
      m: minutes,
      s: seconds,
    };
  }

  // Timer logic counts down, and resets everything
  useEffect(() => {
    if (count >= 0) {
      const secondsLeft = setInterval(() => {
        setCount(count - 1);
        let timeLeft = secondsToTime(count);
        setMinute(timeLeft.m);
        setSecond(timeLeft.s);
      }, 1000);

      return () => clearInterval(secondsLeft);
    }
    if (count < 0) {
      setMinute('');
      setSecond('');

      setTimeout(() => {
        setinput('');
        setMinute('');
        setSecond('');
      }, 4000);
    }
  }, [count]);

  const timer = `${minute}:${second}`;

  return (
    <BreakContainer>
      <div className="breakTimeContainer">
        <div className="timeLeft">
          <h3 className="label">Break:</h3>
          <input className="breakeInput" type="number" placeholder="15" onChange={onChange} value={input} />
          <button className="breakBtn" onClick={handleOnClick}>
            Set Break
          </button>
        </div>
        <div className="timeRight">
          <h3 className="breakTime">{timer}</h3>
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
