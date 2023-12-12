// @ts-nocheck
/* https://www.hackerrank.com/challenges/one-month-preparation-kit-time-conversion/problem?isFullScreen=true&h_l=interview&playlist_slugs%5B%5D=preparation-kits&playlist_slugs%5B%5D=one-month-preparation-kit&playlist_slugs%5B%5D=one-month-week-one
Given a time in -hour AM/PM format, convert it to military (24-hour) time.

Note: - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
- 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.

Example


Return '12:01:00'.


Return '00:01:00'.

Function Description

Complete the timeConversion function in the editor below. It should return a new string representing the input time in 24 hour format.

timeConversion has the following parameter(s):

string s: a time in  hour format
Returns

string: the time in  hour format
Input Format

A single string  that represents a time in -hour clock format (i.e.:  or ).

Constraints

All input times are valid
Sample Input

07:05:45PM
Sample Output

19:05:45
Language
JavaScript (Node.js)
More
12345678910111213141516171819202122

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}

Line: 48 Col: 1

Test against custom input
BlogScoringEnvironmentFAQAbout UsSupportCareersTerms Of ServicePrivacy Policy
 */

function timeConversion(s) {
  // Extract the time components and AM/PM indicator
  const hour = parseInt(s.substring(0, 2));
  const minutes = s.substring(3, 5);
  const seconds = s.substring(6, 8);
  const amPm = s.substring(8);

  // Convert to military time based on AM/PM indicator
  let militaryHour = hour;
  if (amPm === "PM" && hour !== 12) {
    militaryHour += 12;
  } else if (amPm === "AM" && hour === 12) {
    militaryHour = 0;
  }

  // Combine the components and format as a string
  return `${militaryHour.toString().padStart(2, "0")}:${minutes}:${seconds}`;
}

console.log(timeConversion("07:05:45PM"));//19:05:45
