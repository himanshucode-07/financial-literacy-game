export default function StartScreen({ startGame }) {
  return (
    <div>
      <h1 className="text-white">Financial Literacy Game</h1>
      <button onClick={startGame} className="text-blue border-2px-solid-black">Start Game</button>
    </div>
  );
}