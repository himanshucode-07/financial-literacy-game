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
  const [history, setHistory] = useState([]);

  const handleStart = () => {
    setGameStarted(true);
  };

  const handleChoice = (choice) => {
    const currentScenario = scenarios[currentScenarioIndex];

    setMoney((prevMoney) => prevMoney + choice.moneyChange);
    setScore((prevScore) => prevScore + choice.scoreChange);
    setHistory((prevHistory) => [
      ...prevHistory,
      { scenarioTitle: currentScenario.title, choiceText: choice.text },
    ]);
    setCurrentScenarioIndex((prevIndex) => prevIndex + 1);
  };

  const handleRestart = () => {
    setMoney(5000);
    setScore(0);
    setCurrentScenarioIndex(0);
    setHistory([]);
    setGameStarted(true);
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
        <div className="game-complete">
          <h2>🎉 Game Complete!</h2>
          <p>Final Score: {score}</p>
          <p>Final Money: ₹{money}</p>

          <h3>Your Decisions</h3>
          <ul className="history-list">
            {history.map((entry, index) => (
              <li key={index}>
                <strong>{entry.scenarioTitle}:</strong> {entry.choiceText}
              </li>
            ))}
          </ul>

          <button onClick={handleRestart}>Play Again</button>
        </div>
      )}
    </div>
  );
}

export default App;