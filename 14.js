const calculateChange = function(total, cash) {
  let denominations = {
    twentyDollar: 0,
    tenDollar: 0,
    fiveDollar: 0,
    toonie: 0, 
    loonie: 0,
    quarter: 0,
    dime: 0, 
    nickel: 0,
    penny: 0,
  };

  let divideChange = function(change){
    denominations.twentyDollar = Math.floor(change / 2000);
    change -= denominations.twentyDollar * 2000;

    denominations.tenDollar = Math.floor(change / 1000);
    change -= denominations.tenDollar * 1000;

    denominations.fiveDollar = Math.floor(change / 500);
    change -= denominations.fiveDollar * 500;

    denominations.toonie = Math.floor(change / 200);
    change -= denominations.toonie * 200;

    denominations.loonie = Math.floor(change / 100);
    change -= denominations.loonie * 100;

    denominations.quarter = Math.floor(change / 25);
    change -= denominations.quarter * 25;
    
    denominations.dime = Math.floor(change / 10);
    change -= denominations.dime * 10;
    
    denominations.nickel = Math.floor(change / 5);
    change -= denominations.nickel * 5;
    
    denominations.penny = Math.floor(change / 1);
    change -= denominations.penny * 1;
  };

  let change = cash - total;
  divideChange(change);

  for(let i in denominations){
    if(denominations.hasOwnProperty(i)){
      if(denominations[i] === 0)
        delete denominations[i];
    }
  }

  return denominations;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));