import React from 'react';
import styled from 'styled-components';

import BreakTimer from './BreakTimer';
import OnAirTimer from './OnAirTimer';
import StopWatch from './StopWatch';

function Timer() {
  return (
    <MainTimerDiv>
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
