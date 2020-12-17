const cardinals = ['north', 'east', 'south', 'west'];

const blocksAway = function(directions) {
  let position = {x: 0, y: 0};
  let compass;

  //check starting move. this impacts initial cardinal direction
  if(directions[0] === 'right')
    compass = 0;
  else
    compass = 1;

  for(let i = 0; i < directions.length; i += 2){
    //get number of blocks to drive
    let numberOfBlocks = directions[i + 1];

    /*
      - change compass 'clockwise' or 'counterclockwise'
      - depending on current left/right direction, we just add or subtract. 
      - compass will be checked against cardinal directions after.
    */
    if(directions[i] === 'left')
      compass--;
    else
      compass++;

    //make sure compass is always within cardinals array
    if(compass === 4)
      compass = 0;
    else if(compass === -1){
      compass = 3;
    }

    /*
      - calculate distance based on direction.
      - cardinal array isn't necessary, but helps for readability
    */
    switch(cardinals[compass]){
    case 'north':{
      position.y += numberOfBlocks;
      break;
    }
    case 'east':{
      position.x += numberOfBlocks;
      break;
    }
    case 'south':{
      position.y -= numberOfBlocks;
      break;
    }
    case 'west':{
      position.x -= numberOfBlocks;
      break;
    }
    }
  }
  //simply return position
  return {east: position.x, north: position.y};
};

console.log(blocksAway(['right', 2, 'left', 3, 'left', 1]));
console.log(blocksAway(['left', 1, 'right', 1, 'left', 1, 'right', 1, 'left', 1, 'right', 1]));
console.log(blocksAway(['left', 3, 'right', 1, 'right', 3, 'right', 1]));
