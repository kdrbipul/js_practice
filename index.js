// var i = 1;
// var sum = 0;
// while (i<=100){
//     if (i % 3 == 0 && i % 5 == 0){
//         sum = sum +i;
//     }
//     i = i+1;
// }
// console.log(sum);
// var address = "mothejil"
// console.log("address");
// var number = "12";
// console.log(typeof (number("12")))

// var number = 2.40000
// console.log (number.toFixed(2))


// var firstName = "Abdul ";
// var lastName = "Kader"
// var fullName = firstName + lastName;
// // 
// console.log(typeof 12);
// console.log(typeof true);
// console.log(typeof 12.567)

// console.log (typeof "abdul kader");


function isLeapYear(year) {
    if (year % 4 === 0) {
      if (year % 100 === 0) {
        if (year % 400 === 0) {
          return true; // Divisible by 400, so it's a leap year
        } else {
          return false; // Divisible by 100 but not by 400, so it's not a leap year
        }
      } else {
        return true; // Divisible by 4 but not by 100, so it's a leap year
      }
    } else {
      return false; // Not divisible by 4, so it's not a leap year
    }
  }
  
  // Testing the function for multiple years
  for (let year = 1; year <= 2020; year++) {
    if (isLeapYear(year)) {
      console.log(year + " is a leap year.");
    } else {
      console.log(year + " is not a leap year.");
    }
  }
  