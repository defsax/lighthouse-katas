const urlDecode = function(text) {
  let converted = {};
  let seperateMultiKeyValue = text.split('&');

  for(let i of seperateMultiKeyValue){
    let keyValuePair = i.split('=');
    let values = keyValuePair[1].split('%20');

    let valueString = '';
    for(let j = 0; j < values.length; j++){
      if(j === values.length - 1)
        valueString += values[j];
      else
        valueString += values[j] + ' ';
    }
    converted[keyValuePair[0]] = valueString;
  }
  return converted;
};

console.log(urlDecode('duck=rubber'));
console.log(urlDecode('bootcamp=Lighthouse%20Labs'));
console.log(urlDecode('city=Vancouver&weather=lots%20of%20rain'));
console.log(urlDecode('city=Vancouver&weather=lots%20of%20rain').weather);
