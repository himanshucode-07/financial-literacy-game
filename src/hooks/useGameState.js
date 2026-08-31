import { useState, useEffect } from 'react';
import scenarios from '../data/scenarios';
import { getHighScore, saveHighScore } from '../utils/storage';

function useGameState() {
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

  const startGame = () => {
    setGameStarted(true);
  };

  const makeChoice = (choice) => {
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

  const restartGame = () => {
    setMoney(5000);
    setSavings(0);
    setScore(0);
    setCurrentScenarioIndex(0);
    setHistory([]);
    setGameStarted(true);
  };

  const currentScenario = scenarios[currentScenarioIndex];

  return {
    gameStarted,
    money,
    savings,
    score,
    currentScenarioIndex,
    history,
    highScore,
    currentScenario,
    startGame,
    makeChoice,
    restartGame,
  };
}

export default useGameState;