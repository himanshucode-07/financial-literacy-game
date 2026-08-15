import { useState } from 'react';
import IntroScreen from './components/IntroScreen';
import GameScreen from './components/GameScreen';
import './App.css';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [money, setMoney] = useState(5000);
  const [score, setScore] = useState(0);

  const handleStart = () => {
    setGameStarted(true);
  };

  const handleChoice = (choice) => {
    setMoney((prevMoney) => prevMoney + choice.moneyChange);
    setScore((prevScore) => prevScore + choice.scoreChange);
  };

  return (
    <div className="app">
      {!gameStarted && <IntroScreen onStart={handleStart} />}
      {gameStarted && (
        <GameScreen money={money} score={score} onChoice={handleChoice} />
      )}
    </div>
  );
}

export default App;