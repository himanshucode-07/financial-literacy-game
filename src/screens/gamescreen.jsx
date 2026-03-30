export default function GameScreen( {scenarioIndex}) {
   const scenarios = [
    { text: "You received your salary ₹5000" },
    { text: "Your friend invites you to a party" }
  ]

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h2>{scenarios[scenarioIndex].text}</h2>
    </div>
  )
}
