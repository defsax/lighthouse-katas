const numberOfVowels = function(data) {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  let totalVowels = 0;
  for(let i of data){
    for(let j of vowels){
      if(j === i)
        totalVowels++;
    }
  }
  return totalVowels;
};

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));