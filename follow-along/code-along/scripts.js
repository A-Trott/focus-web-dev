// Loops

// ============ For loops

// for (initializing expression; test condition;update expression)
// for (i = 0; i < 7; i++) {
//   console.log(i);
// }

const weekdays = [
  "monday",
  "tuesday",
  "wednesday",
  "thursday",
  "friday",
  "saturday",
  "sunday",
  "pizza",
  "tacos",
];
let input = prompt("enter a day");
for (i = 0; i < weekdays.length; i++) {
  console.log(i);
  if (weekdays[i] === input) {
    console.log(weekdays[i]);
    break;
  } else if (weekdays[i] === "friday") {
    console.log(weekdays[i]);
    break;
  }
  //   console.log(weekdays[i]);
}

// //
// for (i = 0; i >= 0; i++) {
//   console.log(`This is an infinite loop!!! Do not run me!! Iteration #${i}`);
// }

// Iterating from back to front of an array
// for (i = 300; i > 0; i--) {
//   console.log(i);
// }

// for (i = weekdays.length - 1; i >= 0; i--) {
//   console.log(weekdays[i]);
// }

// // ========= While Loops
// let i = 0;
// let count = 0;

// while (i < 486) {
//     console.log(i);
//     count++;
//     console.log(`Iteration count: ${count}`);
//   i += 3;
// }

// // Iterating forwards through an array
// let j = 0;

// while (j < weekdays.length) {
//   console.log(j);
//   console.log(weekdays[j]);
//   j++;
// }

// // Iterating backwards through an array
// let k = weekdays.length - 1;

// while (k >= 0) {
//   console.log(k);
//   console.log(weekdays[k]);
//   k--;
// }
