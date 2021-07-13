import React, { useEffect, useState } from 'react';

export default function App() {
  const [count, setCount] = useState(); // seconds
  const [minute, setMinute] = useState(0);
  const [second, setSecond] = useState(0);

  // takes the input value and sets the state
  const onChange = (e) => {
    setCount(e.target.value * 60);
  };
  function secondsToTime(secs) {
    var divisor_for_minutes = secs % (60 * 60);
    var minutes = Math.floor(divisor_for_minutes / 60);
    var divisor_for_seconds = divisor_for_minutes % 60;
    var seconds = Math.ceil(divisor_for_seconds);
    return {
      m: minutes,
      s: seconds,
    };
  }
  useEffect(() => {
    if (count >= 0) {
      const secondsLeft = setInterval(() => {
        setCount((c) => c - 1);
        let timeLeftVar = secondsToTime(count);
        setMinute(timeLeftVar.m);
        setSecond(timeLeftVar.s);
      }, 1000);
      return () => clearInterval(secondsLeft);
    }
    if (count === 0) {
      setSecond('On Air');

      setTimeout(() => {
        setCount('');
      }, 4000);
    }
  }, [count]);

  return (
    <>
      <input className="breakeInput" type="number" placeholder="15" onChange={onChange} />

      <h1>
        {minute < 9 ? '0' + minute : minute} :{second < 9 ? '0' + second : second}
      </h1>
    </>
  );
}
