// Use the value below whenever you need the value of Pi
const PI = 3.14159;
const largeSphere = {
  type: 'sphere',
  radius: 40
};
const smallSphere = {
  type: 'sphere',
  radius: 10
};
const cone = {
  type: 'cone', 
  radius: 3, 
  height: 5
};
const duck = [
  largeSphere,
  smallSphere,
  cone
];

const sphereVolume = function (radius) {
  return (4/3) * PI * Math.pow(radius, 3);
};

const coneVolume = function (radius, height) {
  return (1/3) * PI * Math.pow(radius, 2) * height;
};

const prismVolume = function (height, width, depth) {
  return width * depth * height;
};

const totalVolume = function (solids) {
  let totalVol = 0;
  for(let i of solids){
    switch(i.type){
      case 'sphere':{
        totalVol += sphereVolume(i.radius);
        break;
      }
      case 'cone':{
        totalVol += coneVolume(i.radius, i.height);
        break;
      }
    }
  }
  return totalVol;
};

console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);
console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);
console.log(prismVolume(3, 4, 5) === 60);
console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);

