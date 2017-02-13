// 1 - Write a for loop that runs 5 times
// Each iteration will increase the value
// of checkz by 1
var checkz = 0;
for (var i = 0; i < 5; i++) {
  checkz += 1;
}

// 2 - Write a while loop that runs
// 3 times. Each iteration will decrease
// the value of checkz by -2

var i = 0;
while (i >= 3){
  checkz -= 2;
}

// 3 - Summarize in English what this code is doing.
// Use a multiline comment to do so.
//when i is less than 7 add total to the number at the current index
//the first loop i = 0 and is less than 7 so we add 1 to 0
// we continue through the loop 7 times then exit
//console.log(total); gives us 28
var numbers = [1, 2, 3, 4, 5, 6, 7];
var total = 0;
for (var i = 0; i < numbers.length; i++) {
  total += numbers[i];
}
console.log(total);
