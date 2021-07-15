import React, { useState } from 'react';
import styled from 'styled-components';

window.AudioContext = window.AudioContext || window.webkitAudioContext;
const setTimeoutIds = [];

function Metronome() {
  const context = new AudioContext();
  let currentTime = 0.0;
  let currentNoteIndex = 0;
  const [buttonLabel, setButtonLabel] = useState('Start');
  const [playing, setPlaying] = useState(false);

  const play = () => {
    while (currentTime < context.currentTime + 0.1) {
      playNote();
      currentTime += 60.0 / 60.0;
    }

    setTimeoutIds.push(setTimeout(play, 0.5));
  };

  const playNote = () => {
    const note = context.createOscillator();
    note.connect(context.destination);
    note.start(currentTime);
    note.stop(currentTime + 0.05);

    const noteElements = document.querySelectorAll('#metronome span');

    Array.from(noteElements).forEach((element, index) => {
      if (index == currentNoteIndex) {
        element.style.transform = 'translate(0, -12px)';
        element.style.background = '#fdc04e';
        element.style.border = '#fdc04e 1px solid';
      } else {
        element.style.transform = 'translate(0, 0px)';
        element.style.background = '#2e2e2e';
        element.style.border = '#2e2e2e 1px solid';
      }
    });

    currentNoteIndex >= 4 ? (currentNoteIndex = 0) : currentNoteIndex++;
  };

  const toggle = () => {
    if (!playing) {
      currentTime = context.currentTime;
      setButtonLabel('Stop');
      setPlaying(true);
      play();
    } else {
      setButtonLabel('Start');
      setPlaying(false);

      setTimeoutIds.forEach((id) => {
        clearTimeout(id);
      });
    }
  };

  return (
    <MetronomeContainer>
      <div id="metronome" className="metronome">
        <div className="notesContainer">
          <span className="note"></span>
          <span className="note"></span>
          <span className="note"></span>
          <span className="note"></span>
          <span className="note"></span>
        </div>
        <button className="button" onClick={toggle}>
          {buttonLabel}
        </button>
      </div>
    </MetronomeContainer>
  );
}

export default Metronome;

const MetronomeContainer = styled.div`
  .metronome {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
  }
  .notesContainer {
    display: flex;
    justify-content: space-between;
    width: 22rem;
  }
  .note {
    display: block;
    border-radius: 50%;
    width: 50px;
    height: 50px;

    background-color: #2e2e2e;
    border: 1px solid black;
    transition: all 0.15s;
  }
  .button {
    height: 2.5rem;
    border-radius: 5px;
    border: none;
    background-color: #2e2e2e;
    color: #fdc04e;
    padding: 2px 15px;
    font-size: 1.4rem;
    cursor: pointer;
    margin-top: 2.5rem;
  }
`;
