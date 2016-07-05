var first = 0;
var second = 1;
var next = 0;

while (next <4000001) {
  next = first + second;
  first = second;
  second = next;

if (next %2 ===0){
  var sum = 0;
  sum+= next; 
}}

console.log(sum);
