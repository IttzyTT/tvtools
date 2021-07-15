import React from 'react';
import styled from 'styled-components';

export default function StopWatchTimer({ time }) {
  return (
    <Time>
      <span className="digits">{('0' + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
      <span className="digits">{('0' + Math.floor((time / 1000) % 60)).slice(-2)}.</span>
      <span className="digits mili-sec">{('0' + ((time / 10) % 100)).slice(-2)}</span>
    </Time>
  );
}

const Time = styled.div`
  margin-top: 1.3rem;

  .digits {
    font-size: 1.5rem;
    font-family: 'Orbitron', sans-serif;
    letter-spacing: 0.1rem;
    color: #fce684;
    text-align: left;
  }
  .mili-sec {
    color: #e4e4e4;
  }
`;
