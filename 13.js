const convertDate = function(dateObj){
  let phrase;
  let number = dateObj[2];
  if(number < 10){
    number = number % 10;
  }
  if(Number(number) % 10 === 1){
    if(number === '11')
      number += 'th';
    else
      number += 'st';
  }
  else if(Number(number) % 10 === 2){
    if(number === '12')
      number += 'th';
    else
      number += 'nd';
  }
  else if(Number(number) % 10 === 4){
    number += 'th';
  } 

  let months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  let suffix = ['st', 'nd', 'rd', 'th'];

  phrase = months[Number(dateObj[1] - 1)] + ' ' + number + ', ' + dateObj[0];

  return phrase;
};

const talkingCalendar = function(date) {
  let dateObj = [
    year = '',
    month = '',
    day = ''
  ];
  
  let i = 0;
  let dateIterator = 0;

  while(i < date.length){    
    if(date[i] === '/')
      dateIterator++;
    else
      dateObj[dateIterator] += date[i];

    i++;
  }

  return convertDate(dateObj);
};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));
