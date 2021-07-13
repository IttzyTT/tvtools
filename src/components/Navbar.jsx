import React from 'react';
import styled from 'styled-components';
import { RiTimerLine } from 'react-icons/ri';
import { ImMeter2 } from 'react-icons/im';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
  return (
    <NavContainer>
      <nav className="nav">
        <ul className="navList">
          <div className="menuCont">
            <NavLink exact to="/timer" activeClassName="active">
              <RiTimerLine className="icons timer" />
              <p>Timer</p>
            </NavLink>
          </div>
          <div className="menuCont">
            <NavLink exact to="/metronome" activeClassName="active">
              <ImMeter2 className="icons metronome" />
              <p>Metronome</p>
            </NavLink>
          </div>
        </ul>
      </nav>
    </NavContainer>
  );
};

const NavContainer = styled.div`
  .nav {
    background-color: #2e2e2e;
    position: fixed;
    z-index: 99;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 6rem;
    color: #5a5959;
    box-shadow: -1px -1px 2px #aaaaaa;
  }
  .navList {
    display: flex;
    justify-content: space-around;
    list-style: none;
    font-size: 1.5rem;
  }
  .menuCont {
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .icons {
    font-size: 1.7rem;
  }
  .timer {
    font-size: 2.1rem;
  }
  .metronome {
    margin-left: 20px;
    margin-bottom: 3px;
  }
  p {
    font-size: 0.8rem;
    text-align: center;
    margin-top: -2px;
  }
  .active {
    color: #fdc04e;
  }
`;
