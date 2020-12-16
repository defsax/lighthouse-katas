const urlDecode = function(text) {
  let converted = {};
  let seperateMultiKeyValue = text.split('&');

  for(let i of seperateMultiKeyValue){
    let keyValuePair = i.split('=');
    let values = keyValuePair[1].split('%20').join(' ');

    converted[keyValuePair[0]] = values;
  }
  return converted;
};

console.log(urlDecode('duck=rubber'));
console.log(urlDecode('bootcamp=Lighthouse%20Labs'));
console.log(urlDecode('city=Vancouver&weather=lots%20of%20rain'));
console.log(urlDecode('city=Vancouver&weather=lots%20of%20rain').weather);
