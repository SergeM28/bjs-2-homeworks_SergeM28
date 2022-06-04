"use strict"
  function solveEquation(a, b, c) {
    let arr = {};
    let d = b**2 - 4 * a * c;
   console.log('D = ' + d);
  
   if (d < 0) {
   arr = [];
}
    else if (d === 0) {
      arr = (-b / (2 * a));
    }
    
    else if (d > 0) { 
        let res = [];
        res.push((-b + Math.sqrt(d)) / (2 * a));
        res.push((-b - Math.sqrt(d)) / (2 * a));
        arr = res;
    }
    return arr;
}
console.log(solveEquation(3,24,36));


"use strict"
function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;
		
  if (percent >= 0) {
    percent = Number(percent) /100 /12;
  }
  else {
    return (`"Параметр "Процентная ставка" содержит неправильное значение ${percent}”`)
  }
  if (contribution >= 0) {
    contribution = Number(contribution);
  }
  else {
    return (`"Параметр "Первоначальный взнос" содержит неправильное значение ${contribution}”`)
  }
		if (amount >= 0) {
    amount = Number(amount);
  }
  else {
    return (`"Параметр "Сумма кредита" содержит неправильное значение ${amount}”`)
  }
			let creditAmount = amount - contribution;			
    let dateFrom = new Date();
  			const nextYearDate = new Date(new Date().setFullYear(new Date().getFullYear() + 1)) 
  let monthAmount = nextYearDate.getMonth() - dateFrom.getMonth() + (12 * (nextYearDate.getFullYear() - dateFrom.getFullYear()));
  			let payForMonth = creditAmount * (percent + (percent / (((1 + percent)**monthAmount) - 1)));			
  			 totalAmount = payForMonth * monthAmount;
  			console.log(Math.floor(totalAmount * 100) / 100);
 			return totalAmount;
	
}
calculateTotalMortgage(10, 0, 50000, 12)

