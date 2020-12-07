const checkAir = function (samples, threshold) {
  let dirtySamples = 0;

  for(let i of samples){
    if(i === 'dirty')
      dirtySamples++;
  }

  let mean = dirtySamples / samples.length;

  if(mean > threshold)
    return 'Polluted';
  
  return 'Clean';
};

console.log(checkAir(
  ['clean', 'clean', 'dirty', 'clean', 'dirty', 'clean', 'clean', 'dirty', 'clean', 'dirty'],
  0.3
));

console.log(checkAir(
  ['dirty', 'dirty', 'dirty', 'dirty', 'clean'],
  0.25
));

console.log(checkAir(
  ['clean', 'dirty', 'clean', 'dirty', 'clean', 'dirty', 'clean'],
  0.9
));

console.log(checkAir(
  ['dirty', 'clean'],
  0.6
));

console.log(checkAir(
  ['dirty', 'clean'],
  0.4
));