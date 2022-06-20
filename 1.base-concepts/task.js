"use strict"
  function solveEquation(a, b, c) {
    let res = [];
    let d = b**2 - 4 * a * c;
   console.log('D = ' + d);
  
    if (d === 0) {
      res.push(-b / (2 * a));
    }
    
    else if (d > 0) { 
        res.push((-b + Math.sqrt(d)) / (2 * a));
        res.push((-b - Math.sqrt(d)) / (2 * a));
    }
   
    else {
      (d < 0);
      res = [];
    }
    
    return res;
  }
    console.log(solveEquation(3,24,36));
   
   
    "use strict"
function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount = 0;
  let loanRate = parseInt(percent) / 100;
  let firstPay = parseInt(contribution);
  let generalPrice = parseInt(amount);
  
  if (Number.isNaN(loanRate)) {
    return totalAmount = `Параметр "Процентная ставка" содержит неправильное значение "${percent}"`;
  }
  else if (Number.isNaN(firstPay)) {
    return totalAmount = `Параметр "Начальный взнос" содержит неправильное значение "${contribution}"`;
  } 
  else if (Number.isNaN(generalPrice)) {
    return totalAmount = `Параметр "Общая стоимость" содержит неправильное значение "${amount}"`; 
  }
  let dateFrom = new Date();
  let fullPay = 0;
  if ((date.getFullYear() >= dateFrom.getFullYear()) && (date.getMonth() < 12) && (date.getMonth() >= 0) && (date.getDate() < 32) && (date.getDate() >= 1)) {
  let creditAmount = amount - contribution;			
let monthAmount = (date.getFullYear() - dateFrom.getFullYear()) * 12 + date.getMonth() - dateFrom.getMonth();
      let payForYear = creditAmount * (loanRate / 12 * (1 + 1 / (Math.pow(1 + loanRate / 12, monthAmount) - 1)));			
      fullPay = (payForYear * monthAmount).toFixed(2);
      totalAmount = parseFloat(fullPay);
  }

  else {
    totalAmount = 'Неверный формат даты. Дату необходимо указать в следующем формате - ДД.ММ.ГГГГ.';
  }
    
  return totalAmount;
}
