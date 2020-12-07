const urlEncode = function(text) {
	let returnStr = '';
	for(let i = 0; i < text.length; i++){
		//console.log("outside function: " + text[i]);
		if(text[i] === " "){
			//console.log("before: " + text[i]);
			returnStr += "%20";
			//console.log("after:" + text[i]);
		} else{
			returnStr += text[i];
		}
	}
	return returnStr;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));
