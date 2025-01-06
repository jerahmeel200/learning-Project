 import React from 'react'
 
 const ScoreBoard = ({currentScore, bestScore}) => {
   return (
     <div>
<p>Current Score: {currentScore}</p>
<p>Best Score: {bestScore}</p>
     </div>
   )
 }
 
 export default ScoreBoard