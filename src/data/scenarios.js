const scenarios = [
  {
    text: "You received your salary ₹5000",
    choices: [
      { text: "Save money (+₹1000)", effect: { money: +1000, score: +10 } },
      { text: "Spend on shopping (-₹1000)", effect: { money: -1000, score: -5 } }
    ]
  },
  {
    text: "Your friend invites you to a party",
    choices: [
      { text: "Go to party (-₹500)", effect: { money: -500, score: +5 } },
      { text: "Stay at home (+₹0)", effect: { money: 0, score: 0 } }
    ]
  }
]

export default scenarios