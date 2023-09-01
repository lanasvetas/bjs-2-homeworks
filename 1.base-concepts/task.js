"use strict"
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4*a*c;
  if (d < 0) {
  return arr;
} else if (d === 0) {
  let x = -b/ (2*a);
  arr.push(x);
} else {
  let x = (-b + Math.sqrt(d))/ (2*a);
  let y = (-b - Math.sqrt(d))/ (2*a);
  arr.push(x,y);
};
return arr;
};

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let interestRate = percent / 100 / 12;
  let loanBody = amount - contribution; 
  let totalMonth = countMonths;

  let summPerMonth = loanBody * (interestRate+ (interestRate / (((1 + interestRate)**totalMonth) -1)));
  let total = +(summPerMonth*countMonths).toFixed(2);
  return total;
};