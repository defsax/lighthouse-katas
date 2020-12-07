const conditionalSum = function(values, condition){
	let sum = 0;
	if(values.length){
		switch(condition){
			case 'even':
				for(let i of values){
					if(i % 2 === 0)
						sum += i;
				}
				break;
			case 'odd':
				for(let i of values){
					if(i % 2 !== 0)
						sum += i;
				}
				break;
			default:
				break;
		}
	}
	return sum;
};

console.log(conditionalSum([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum([], "odd"));


const conditionalSum2 = function(values, condition){
	let sum = 0;
	if(values.length){
		for(let i of values){
			if(i % 2 === 0 && condition === 'even')
				sum += i;
			else if(i % 2 !== 0 && condition === 'odd')
				sum += i;
		}
	}
	return sum;
};

console.log(conditionalSum2([1, 2, 3, 4, 5], "even"));
console.log(conditionalSum2([1, 2, 3, 4, 5], "odd"));
console.log(conditionalSum2([13, 88, 12, 44, 99], "even"));
console.log(conditionalSum2([], "odd"));
