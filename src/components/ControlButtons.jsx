import React from 'react';
import styled from 'styled-components';

export default function ControlButtons({ active, isPaused, handleStart, handleReset, handlePauseResume }) {
  // Start BTN
  const StartButton = (
    <Btn>
      <div className="btn btn-one btn-start" onClick={handleStart}>
        Start
      </div>
    </Btn>
  );

  // Active BTN
  const ActiveButtons = (
    <Btn>
      <div className="btn-grp">
        <div className="btn btn-two" onClick={handleReset}>
          Reset
        </div>
        <div className="btn btn-one" onClick={handlePauseResume}>
          {isPaused ? 'Resume' : 'Pause'}
        </div>
      </div>
    </Btn>
  );

  return (
    <Btn>
      <div className="Control-Buttons">
        <div>{active ? ActiveButtons : StartButton}</div>
      </div>
    </Btn>
  );
}

// Style
const Btn = styled.div`
  .btn-grp {
    display: flex;
    align-items: center;
    justify-content: space-around;
  }

  .btn {
    background-color: #2e2e2e;
    color: #fdc04e;
    border-radius: 5px;
    margin: 0px 6px;
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    height: 1.9rem;
    width: 4rem;
  }

  .btn-one {
    background-color: #2e2e2e;
    color: #fdc04e;
  }
`;
