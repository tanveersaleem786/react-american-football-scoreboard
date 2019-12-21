//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import "./App.scss";
import BottomRow from "./BottomRow";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  const [homeScore, setHomeScore] = useState(0);
  const [awayScore, setAwayScore] = useState(0);
  const [quarter, setQuarter] = useState(1);

  const handleHomeTouchDown = e => {
    setHomeScore(homeScore + 7);
  };

  const handleHomeFieldGoal = e => {
    setHomeScore(homeScore + 3);
  };

  const handleAwayTouchDown = e => {
    setAwayScore(awayScore + 7);
  };

  const handleAwayFieldGoal = e => {
    setAwayScore(awayScore + 3);
  };

  const reset = e => {
     setHomeScore(0);
     setAwayScore(0); 
     setQuarter(0);
  };

  const winner = homeScore > awayScore ? 'Home Team Wins' : 'Away Team Wins'

  const handleNextQuarter = e => {

    if(homeScore == awayScore && quarter == 4) {
      
       setQuarter("OT");

    } else if(quarter === 4) {

       alert(`Game is over and ${winner}`);
       reset()

    } else if(quarter === "OT") {

       setQuarter(quarter + "2");

    }  else if(quarter === "OT2") {

          if(homeScore === awayScore) {
            alert('Game is over in a Tie');
            reset()
          }
          else {
            alert(`The winner is ${winner}`);
            reset()
          }

    } else setQuarter(quarter + 1);

  };

  return (
    <div className="container">
      <section className="scoreboard">
        <div className="topRow">
          <div className="home">
            <h2 className="home__name">Lions</h2>

            {/* TODO STEP 3 - We need to change the hardcoded values in these divs to accept dynamic values from our state. */}

            <div className="home__score">{homeScore}</div>
          </div>
          <div className="timer">00:03</div>
          <div className="away">
            <h2 className="away__name">Tigers</h2>
            <div className="away__score">{awayScore}</div>
          </div>
        </div>
        <BottomRow quarter={quarter} />
      </section>
      <section className="buttons">
        <div className="homeButtons">          
          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={handleHomeTouchDown}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={handleHomeFieldGoal}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={handleAwayTouchDown}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={handleAwayFieldGoal}>Away Field Goal</button>
        </div>
        <button onClick={handleNextQuarter}>Next Quarter</button>
      </section>
    </div>
  );
}

export default App;
