import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

export const TopClock = () => {
  const [clockState, setclockState] = useState();
  const [dateState, setdateState] = useState();

  useEffect(() => {
    setInterval(() => {
      const date = new Date();
      setclockState(date.toLocaleTimeString());
    }, 1000);
    const date = new Date();
    setdateState(date.toLocaleDateString());
  }, []);

  return (
    <ClockContainer>
      <h1>{clockState}</h1>
      <p>{dateState}</p>
    </ClockContainer>
  );
};

const ClockContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.637), rgba(255, 255, 255, 0.308));
  height: 5.7rem;
  border-radius: 5px 5px 0px 0px;
  @media screen and (max-width: 768px) {
    border-radius: 0px;
  }

  h1 {
    color: #19263be1;
    font-size: 3rem;
    font-family: 'Orbitron', sans-serif;
    letter-spacing: 0.25rem;
    margin: 0;
  }
  p {
    margin: 0;
    color: #19263be1;
    font-family: 'Orbitron', sans-serif;
    font-size: 1.2rem;
  }
`;
