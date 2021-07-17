import React from 'react';
import styled from 'styled-components';

import BreakTimer from './BreakTimer';
import Countdown from './Countdown';
import OnAirTimer from './OnAirTimer';
import StopWatch from './StopWatch';

function Timer() {
  return (
    <MainTimerDiv>
      <Countdown />
      <OnAirTimer />
      <BreakTimer />
      <StopWatch />
    </MainTimerDiv>
  );
}

export default Timer;

// styling
const MainTimerDiv = styled.div`
  width: 100%;
`;
