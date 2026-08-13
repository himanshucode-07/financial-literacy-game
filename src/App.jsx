import { useState } from 'react';
import IntroScreen from './components/IntroScreen';
import './App.css';

function App() {
  const [gameStarted, setGameStarted] = useState(false);

  const handleStart = () => {
    setGameStarted(true);
    console.log('Game started!');
  };

  return (
    <div className="app">
      {!gameStarted && <IntroScreen onStart={handleStart} />}
      {gameStarted && <h2>Game will render here (Day 2 onwards)</h2>}
    </div>
  );
}

export default App;