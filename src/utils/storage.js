const HIGH_SCORE_KEY = 'financialGameHighScore';

export function getHighScore() {
  const saved = localStorage.getItem(HIGH_SCORE_KEY);
  return saved ? parseInt(saved, 10) : 0;
}

export function saveHighScore(score) {
  localStorage.setItem(HIGH_SCORE_KEY, score.toString());
}