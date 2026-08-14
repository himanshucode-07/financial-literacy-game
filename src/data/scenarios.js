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
];

export default scenarios;