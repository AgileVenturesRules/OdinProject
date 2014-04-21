// Project 3

// What is the largest prime factor of the number 600851475143 ?

var num = 600851475143;
var prime = 0;
var range = 2;

for(i = num; i > 1;) {
  while(i%range === 0) {
    prime = i;
    i = i / range;
  }
  range++;
}

console.log(prime);
