import { useState } from 'react';
import IntroScreen from './components/IntroScreen';
import GameScreen from './components/GameScreen';
import './App.css';

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStart = () => {
    setGameStarted(true);
  };

  return (
    <div className="app">
      {!gameStarted && <IntroScreen onStart={handleStart} />}
      {gameStarted && <GameScreen />}
    </div>
  );
}

export default App;