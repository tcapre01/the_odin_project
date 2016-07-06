//Note: This solution does not work for massive numbers- crash occurs due to volume of factors. Used 13195 as a sample.

var number = 13195;
var factors = [];
  for (i=0; i<number; i++){
    if (number%i === 0 ){
  	  factors.push(i);
	}
}
console.log(factors);


/* 
Part 1: Above finds all the factors of a number and pushes them into an array
Sample output VM1359:7 [1, 5, 7, 13, 29, 35, 65, 91, 145, 203, 377, 455, 1015, 1885, 2639]
*/




for (i = 0; i<factors.length; i++){
  for (j = 2; j<factors[i]; j++){
    if (factors[i]%j === 0){
      factors.splice(i,1)
}}}
console.log(primes)

/*
Part 2: Above removes all the factors that aren't primes. However fails at higher numbers
Sample output:  [1, 5, 7, 13, 29, 91, 2639]. Note the last 2 aren't primes but are numbers with only primes as factors. 
To fix above issue see below
*/




for (i = 1; i<primes.length; i++){
    //Loop through array once
for (j = 1; j<primes.length; j++){
    //Loop through array a second time

if (primes[i] % primes[j] === 0 ){
    //Check if they are divisible by one another
if (primes[i] !== primes[j]){
    //if they are divisible and the number is not itself, then remove it

primes.splice(i,1)}
}}}
    
    //Return last (and highest) prime value in array
    
console.log(primes[primes.length-1])
