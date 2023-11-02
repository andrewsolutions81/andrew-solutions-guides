/* https://www.hackerrank.com/challenges/one-month-preparation-kit-mini-max-sum/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one
Given five positive integers, find the minimum and maximum values that can be calculated by summing exactly four of the five integers. Then print the respective minimum and maximum values as a single line of two space-separated long integers.

Example

The minimum sum is  and the maximum sum is . The function prints

16 24
Function Description

Complete the miniMaxSum function in the editor below.

miniMaxSum has the following parameter(s):

arr: an array of  integers
Print

Print two space-separated integers on one line: the minimum sum and the maximum sum of  of  elements.

Input Format

A single line of five space-separated integers.

Constraints


Output Format

Print two space-separated long integers denoting the respective minimum and maximum values that can be calculated by summing exactly four of the five integers. (The output can be greater than a 32 bit integer.)

Sample Input

1 2 3 4 5
Sample Output

10 14
Explanation

The numbers are , , , , and . Calculate the following sums using four of the five integers:

Sum everything except , the sum is .
Sum everything except , the sum is .
Sum everything except , the sum is .
Sum everything except , the sum is .
Sum everything except , the sum is .
Hints: Beware of integer overflow! Use 64-bit Integer. */

function miniMaxSum(arr) {
  // sort it in acending order
  const sortedArr = arr.sort()
  // make a shallow copy of the first 4 and last 4 use the reduce function to add the number
  let min = sortedArr.slice(0,4).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  let max = sortedArr.slice(sortedArr.length-4, sortedArr.length).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  // hackerank wants you to print but not return the result.
  console.log(`${min} ${max}`);
}


console.log(miniMaxSum([1, 2, 3, 4, 5,])) // 10 14
console.log(miniMaxSum([1, 3, 5, 7, 9,])) // 16 24
