const whereCanIPark = function (spots, vehicle) {
  let vehicleType = vehicle.slice(0,1).toUpperCase();
  let coords = [0, 0];
  let spotFound = false;

  for(let row = 0; row < spots.length; row++){
    for(let column = 0; column < spots[row].length; column++){
      let spotType = spots[row][column];
    
      if(spotType === vehicleType){
        coords = [row, column];
        spotFound = true;
      }
    }
  }
  
  if(!spotFound)
    return false;
  
  return coords;
};

console.log(whereCanIPark(
  [
  // COLUMNS ARE X
  // 0    1    2    3    4    5
  ['s', 's', 's', 'S', 'R', 'M'], // 0 ROWS ARE Y
  ['s', 'M', 's', 'S', 'r', 'M'], // 1
  ['s', 'M', 's', 'S', 'r', 'm'], // 2
  ['S', 'r', 's', 'm', 'r', 'M'], // 3
  ['S', 'r', 's', 'm', 'r', 'M'], // 4
  ['S', 'r', 'S', 'M', 'M', 'S']  // 5
  ],
  'regular'
));

console.log(whereCanIPark(
  [
  ['M', 'M', 'M', 'M'],
  ['M', 's', 'M', 'M'],
  ['M', 'M', 'M', 'M'],
  ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
  ['s', 's', 's', 's', 's', 's'],
  ['s', 'm', 's', 'S', 'r', 's'],
  ['s', 'm', 's', 'S', 'r', 's'],
  ['S', 'r', 's', 'm', 'r', 's'],
  ['S', 'r', 's', 'm', 'R', 's'],
  ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'motorcycle'
));