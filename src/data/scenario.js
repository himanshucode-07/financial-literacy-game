const scenarios = [
  {
    text: "You received your salary ₹5000",
    choices: [
      { text: "Save money (+₹1000)", effect: +1000 },
      { text: "Spend on shopping (-₹1000)", effect: -1000 }
    ]
  },
  {
    text: "Your friend invites you to a party",
    choices: [
      { text: "Go to party (-₹500)", effect: -500 },
      { text: "Stay at home (+₹0)", effect: 0 }
    ]
  }
]

export default scenarios