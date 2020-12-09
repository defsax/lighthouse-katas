const urlEncode = function(text) {
	let encodedString = '';
	/*	
		originally:
			if(text[i] === ' ' && i !== 0 && i !== text.length - 1)
			which just doesn't add the spaces to the encoded string if the space is at the beginning or end of the string
		
		but, what if there are two or more spaces at the start or end?
			text.trim();
			removes space from either side of a string
	*/

	text = text.trim();
	for(let i of text){
		if(i === ' ')
			encodedString += '%20';
		else
			encodedString += i;
	}
	return encodedString;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode("   Lighthouse Labs   "));
console.log(urlEncode("blue is greener than purple for sure"));
