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
            <NavLink exact to="/" activeClassName="active">
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
    color: #5a5959;
    padding: 1rem;
    border-radius: 0px 0px 5px 5px;
    @media screen and (max-width: 768px) {
      border-radius: 0px;
    }
  }
  .navList {
    display: flex;
    justify-content: space-around;
    list-style: none;
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
