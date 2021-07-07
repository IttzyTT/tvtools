import React, { useState, useEffect } from 'react'
import styled from 'styled-components';


export const TopClock = () => {

    const [clockState, setclockState] = useState();


  useEffect(() => {
      setInterval(() => {
          const date = new Date();
          setclockState(date.toLocaleTimeString())
      }, 1000);
   
  }, [])


    return (
        <TimeContainer>
                <h1>{clockState}</h1>
        </TimeContainer>
            
        
    )
}




const TimeContainer = styled.div`
position: fixed;
z-index: 99;
top: 0;
left: 0;
display: flex;
align-items: center;
justify-content: center;
background: linear-gradient(to bottom right, rgba(255, 255, 255, 0.637), rgba(255, 255, 255, 0.308));
width: 100%;

h1{
    color: #19263be1;
    font-size: 2.5rem;
    font-family: 'Orbitron', sans-serif;
    letter-spacing: 0.25rem;
    
}
`