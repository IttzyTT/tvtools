import React from 'react';
import styled from 'styled-components';
import BreakTimer from './BreakTimer';
import StopWatch from './StopWatch';

function Timer() {
  return (
    <TimerContainer>
      <div className="onAirContainer">
        <div className="timeLeft">
          <h3 className="label">On Air:</h3>
          <input type="time" step="3" />
        </div>
        <div className="timeRight">
          <h3 className="onAirTime">02:00:30</h3>
        </div>
      </div>
      <BreakTimer />
      <StopWatch />
    </TimerContainer>
  );
}

export default Timer;

// Styleing
const TimerContainer = styled.div`
  width: 100%;
  .label {
    font-weight: 400;
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
