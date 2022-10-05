import React from 'react';
import './App.css';
import { Navbar } from './components/Navbar';
import { TopClock } from './components/TopClock';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Timer from './components/Timer';
import Metronome from './components/Metronome';

function App() {
  return (
    <Router>
      <div className="App">
        <div className="mainContainer">
          <TopClock />
          <Switch>
            <Route exact path="/" component={Timer} />
            <Route path="/metronome" component={Metronome} />
          </Switch>
          <Navbar />
        </div>
      </div>
    </Router>
  );
}

export default App;
