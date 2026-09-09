import { useNavigate } from 'react-router-dom';
import IntroScreen from '../components/IntroScreen';
import { getHighScore } from '../utils/storage';
import { useState, useEffect } from 'react';

function HomePage() {
  const navigate = useNavigate();
  const [highScore, setHighScore] = useState(0);

  useEffect(() => {
    setHighScore(getHighScore());
  }, []);

  const handleStart = () => {
    navigate('/game');
  };

  return <IntroScreen onStart={handleStart} highScore={highScore} />;
}

export default HomePage;