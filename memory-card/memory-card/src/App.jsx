import React, { useEffect, useState } from "react";
import "./App.css";
import ScoreBoard from "./components/Scoreboard";
import CardGrid from "./components/Cardgrid";

const App = () => {
  const [currentScore, setCurrentScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState([]);
  const [ clickedCards, setClickedCards] = useState(new Set());

  const apikey = "yDo8ddGBs5kk6PqEXvN5xRH5nVEBjsdN";

  const shuffleArray = (array) => array.sort(() => Math.random() - 0.5);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://api.giphy.com/v1/gifs/trending?api_key=${apikey}&limit=10`
        );
        const data = await res.json();
        console.log("data", data);
        setCards(shuffleArray(data.data)); // Update cards state
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handleCardClick = (cardId) => {
    if(clickedCards.has(cardId)){
      if(currentScore > bestScore){
        setBestScore(currentScore)
      }
      setCurrentScore(0)
      setClickedCards(new Set())
    }else{
      setClickedCards((prev)=> new Set(prev).add(cardId))
      setCards(shuffleArray(cards))
      setCurrentScore((prev)=> prev +1)
    }
  };

  return (
    <div>
      <ScoreBoard currentScore={currentScore} bestScore={bestScore} />
      <CardGrid cards={cards} onClickCard={(cardId) => handleCardClick(cardId)} />
    </div>
  );
};

export default App;
