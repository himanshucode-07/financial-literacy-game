import { useState, useEffect } from 'react';
import IntroScreen from './components/IntroScreen';
import GameScreen from './components/GameScreen';
import scenarios from './data/scenarios';
import { getHighScore, saveHighScore } from './utils/storage';
import './App.css';

function App() {
  const [gameStarted, setGameStarted] = useState(false);
  const [money, setMoney] = useState(5000);
  const [savings, setSavings] = useState(0);
  const [score, setScore] = useState(0);
  const [currentScenarioIndex, setCurrentScenarioIndex] = useState(0);
  const [history, setHistory] = useState([]);
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    const savedHighScore = getHighScore();
    setHighScore(savedHighScore);
  }, []);

  useEffect(() => {
    const isGameComplete = gameStarted && currentScenarioIndex >= scenarios.length;
    if (isGameComplete && score > highScore) {
      setHighScore(score);
      saveHighScore(score);
    }
  }, [currentScenarioIndex, gameStarted, score, highScore]);

  if (!scenarios || scenarios.length === 0) {
    return (
      <div className="app">
        <h2 className="text-slate-100 text-center p-10">
          ⚠️ No scenarios available. Please check scenarios.js
        </h2>
      </div>
    );
  }

  const handleStart = () => {
    setGameStarted(true);
  };

  const handleChoice = (choice) => {
    const currentScenario = scenarios[currentScenarioIndex];

    setMoney((prevMoney) => prevMoney + choice.moneyChange);
    setSavings((prevSavings) => prevSavings + choice.savingsChange);
    setScore((prevScore) => prevScore + choice.scoreChange);
    setHistory((prevHistory) => [
      ...prevHistory,
      { scenarioTitle: currentScenario.title, choiceText: choice.text },
    ]);
    setCurrentScenarioIndex((prevIndex) => prevIndex + 1);
  };

  const handleRestart = () => {
    setMoney(5000);
    setSavings(0);
    setScore(0);
    setCurrentScenarioIndex(0);
    setHistory([]);
    setGameStarted(true);
  };

  const currentScenario = scenarios[currentScenarioIndex];

  return (
    <div className="app">
      {!gameStarted && <IntroScreen onStart={handleStart} highScore={highScore} />}

      {gameStarted && currentScenario && (
        <GameScreen
          money={money}
          savings={savings}
          score={score}
          scenario={currentScenario}
          currentIndex={currentScenarioIndex}
          totalScenarios={scenarios.length}
          onChoice={handleChoice}
        />
      )}

      {gameStarted && !currentScenario && (
        <div className="max-w-md mx-auto px-6 py-10 text-center">
          <h2 className="text-2xl font-bold text-slate-100 mb-1">🎉 Game Complete!</h2>
          <p className="text-slate-300">Final Score: {score}</p>
          <p className="text-slate-300">Final Money: ₹{money}</p>
          <p className="text-slate-300 mb-2">Final Savings: ₹{savings}</p>

          {score === highScore && score > 0 && (
            <p className="text-yellow-400 font-bold mb-4">🏆 New High Score!</p>
          )}

          <h3 className="text-slate-400 text-sm font-semibold mt-6 mb-3">Your Decisions</h3>
          <ul className="text-left bg-slate-800 rounded-lg p-4 mb-6 divide-y divide-slate-700">
            {history.map((entry, index) => (
              <li key={index} className="py-2 text-sm text-slate-200">
                <strong>{entry.scenarioTitle}:</strong> {entry.choiceText}
              </li>
            ))}
          </ul>

          <button
            onClick={handleRestart}
            className="bg-green-500 hover:bg-green-600 text-white font-medium px-6 py-3 rounded-lg transition-colors"
          >
            Play Again
          </button>
        </div>
      )}
    </div>
  );
}

export default App;