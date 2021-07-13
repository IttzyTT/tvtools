import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import ControlButtons from './ControlButtons';
import StopWatchTimer from './StopWatchTimer';

export default function StopWatch() {
  const [isActive, setisActive] = useState(false);
  const [isPaused, setisPaused] = useState(true);
  const [time, settime] = useState(0);

  useEffect(() => {
    let interval = null;

    if (isActive && isPaused === false) {
      interval = setInterval(() => {
        settime((time) => time + 10);
      }, 10);
    } else {
      clearInterval(interval);
    }
    return () => {
      clearInterval(interval);
    };
  }, [isPaused, isActive]);

  const handleStart = () => {
    setisActive(true);
    setisPaused(false);
  };

  const handlePauseResume = () => {
    setisPaused(!isPaused);
  };

  const handleReset = () => {
    setisActive(false);
    settime(0);
  };

  return (
    <StopContainer>
      <div className="stopWatchContainer">
        <div className="timeLeft">
          <ControlButtons
            active={isActive}
            isPaused={isPaused}
            handleStart={handleStart}
            handleReset={handleReset}
            handlePauseResume={handlePauseResume}
          />
        </div>
        <div className="timeRight">
          <StopWatchTimer time={time} />
        </div>
      </div>
    </StopContainer>
  );
}

// -----------------------------------------------------------------------------------------------------
// Style
const StopContainer = styled.div`
  width: 100%;
  .label {
    font-weight: 400;
  }
  //Break time
  .stopWatchContainer {
    height: 4.6rem;
    display: flex;
    padding: 0rem 0.5rem;
    border-bottom: 1px solid #b1b0b0b3;
  }
  .timeLeft {
    width: 38rem;
  }
  .timeRight {
    width: 100%;
  }
`;
