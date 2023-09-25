/* Reversed Strings
https://www.codewars.com/kata/5168bb5dfe9a00b126000018/train/javascript
Complete the solution so that it reverses the string passed into it.

'world'  =>  'dlrow'
'word'   =>  'drow' */

let str = "world";

function solution(str) {
  return str.split("").reverse().join("");
}

console.log(solution(str));

/* explanation

function solution(str) {
  // function called solution with one parameter called str
  return str
    .split("") // makes the string an array "" empty is one charactre ->[ 'w', 'o', 'r', 'l', 'd' ] you could also use [...str] spread operator
    .reverse() // reverse the array  -> [ 'd', 'l', 'r', 'o', 'w' ]
    .join(""); // The join() method creates and returns a new string by concatenating all of the elements in an array-> dlrow
}
 */
