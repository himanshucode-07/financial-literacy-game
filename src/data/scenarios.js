const scenarios = [
  {
    id: 1,
    title: "Salary Day",
    description: "You received your salary of ₹5000. What will you do?",
    choices: [
      { text: "Save ₹2000", moneyChange: -2000, savingsChange: 2000, scoreChange: 10 },
      { text: "Spend ₹1000 on shopping", moneyChange: -1000, savingsChange: 0, scoreChange: 2 },
      { text: "Invest ₹1500", moneyChange: -1500, savingsChange: 0, scoreChange: 15 },
      { text: "Spend everything", moneyChange: 0, savingsChange: 0, scoreChange: -5 },
    ],
  },
  {
    id: 2,
    title: "Unexpected Bill",
    description: "Your electricity bill of ₹800 is due. How do you handle it?",
    choices: [
      { text: "Pay immediately from savings", moneyChange: -800, savingsChange: -800, scoreChange: 8 },
      { text: "Delay payment (risk late fee)", moneyChange: 0, savingsChange: 0, scoreChange: -10 },
      { text: "Borrow from a friend", moneyChange: 0, savingsChange: 0, scoreChange: -3 },
    ],
  },
  {
    id: 3,
    title: "Investment Opportunity",
    description: "A friend suggests investing ₹1000 in a new startup. Risky, but could pay off big.",
    choices: [
      { text: "Invest the full ₹1000", moneyChange: -1000, savingsChange: 0, scoreChange: 12 },
      { text: "Invest only ₹300 (safer)", moneyChange: -300, savingsChange: 0, scoreChange: 6 },
      { text: "Skip it, too risky", moneyChange: 0, savingsChange: 0, scoreChange: 0 },
    ],
  },
];

export default scenarios;