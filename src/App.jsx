import { useState } from 'react';
import IntroScreen from './components/IntroScreen';
import GameScreen from './components/GameScreen';
import scenarios from './data/scenarios';
import './App.css';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [money, setMoney] = useState(5000);
  const [score, setScore] = useState(0);
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);

  const handleStart = () => {
    setGameStarted(true);
  };

  const handleChoice = (choice) => {
    setMoney((prevMoney) => prevMoney + choice.moneyChange);
    setScore((prevScore) => prevScore + choice.scoreChange);
    setCurrentScenarioIndex((prevIndex) => prevIndex + 1);
  };

  const currentScenario = scenarios[currentScenarioIndex];

  return (
    <div className="app">
      {!gameStarted && <IntroScreen onStart={handleStart} />}
      {gameStarted && currentScenario && (
        <GameScreen
          money={money}
          score={score}
          scenario={currentScenario}
          onChoice={handleChoice}
        />
      )}
      {gameStarted && !currentScenario && (
        <h2>🎉 Game Complete! Final Score: {score}</h2>
      )}
    </div>
  );
}

export default App;