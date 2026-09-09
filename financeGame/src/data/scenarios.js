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
  {
    id: 4,
    title: "Medical Emergency",
    description: "A family member needs ₹1500 for urgent medical treatment.",
    choices: [
      { text: "Pay from savings immediately", moneyChange: 0, savingsChange: -1500, scoreChange: 15 },
      { text: "Pay from money, skip savings", moneyChange: -1500, savingsChange: 0, scoreChange: 5 },
      { text: "Take a high-interest loan", moneyChange: 0, savingsChange: 0, scoreChange: -12 },
    ],
  },
  {
    id: 5,
    title: "Freelance Side Income",
    description: "You earned an extra ₹2000 from a freelance project. What next?",
    choices: [
      { text: "Put it all into savings", moneyChange: 0, savingsChange: 2000, scoreChange: 14 },
      { text: "Split between savings and spending", moneyChange: 1000, savingsChange: 1000, scoreChange: 10 },
      { text: "Spend it all on a treat", moneyChange: 2000, savingsChange: 0, scoreChange: -2 },
    ],
  },
  {
    id: 6,
    title: "New Phone Temptation",
    description: "A new phone costs ₹3000. Yours works fine, but this one is really tempting.",
    choices: [
      { text: "Skip it, keep saving", moneyChange: 0, savingsChange: 0, scoreChange: 10 },
      { text: "Buy it using savings", moneyChange: 0, savingsChange: -3000, scoreChange: -8 },
      { text: "Buy it using current money", moneyChange: -3000, savingsChange: 0, scoreChange: -5 },
    ],
  },
];

export default scenarios;