const sumLargestNumbers = function(data){

	let oldLargest = 0;
	let largest = 0;

	for(let i of data){
		if(i > largest){
			oldLargest = largest;
			largest = i;
			continue;
		}
	}
	return oldLargest + largest;
};

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));
