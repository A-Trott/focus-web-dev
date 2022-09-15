// Use the age variable
let age = Math.round(100 * Math.random());

console.log(age);

// Exercise #1)  ========= PNE Ticket prices

// 1) Use the provided age variable to determine the ticket prices
// 2) if less than 5; log free
// 3) if less than 15; log $10
// 4) if less than 55; log $20
// 5) if greater than or equal to 55; log $10
// 6) Try putting the conditionals in a different a order and see how order matters
if(age < 5) {
    console.log("free");
} else if (age >= 5 && age < 15) {
    console.log("$10");
} else if (age >= 15 && age < 55){
    console.log("$20");
}else{
    console.log("$10");
}

// Exercise #2) ========= Days of the week

// 1) Create an array named daysOfTheWeek and fill it with the days of the week
// Write the daysOfTheWeek variable before the provided arrayNum and day variables.
// Why is this important??

// ***** Do not Touch the arrayNum or day valiables******
let arrayNum = Math.floor(6.99 * Math.random());
let daysOfTheWeek =["Monday","Tuesday","Wednesday","Thursday","Friday","Saturday","Sunday"]
let day = daysOfTheWeek[arrayNum];
console.log(day)
// ***** Write your if/else statement below this line *****
if (day == "Monday" || day == "Tuesday"){
    console.log("I can't stand the start of the week");
} else if (day == "Wednesday"){
    console.log("It's Humpday!!! Halfway there!!");
} else if (day == "Thursday" || day == "Friday"){
    console.log("The weekend is soon!");
} else {
    console.log("Its the weekend! time to relax.");
}

// 2) if day is equal to Monday or Tuesday, console.log, "I can't stand the start of the week"
// 3) if day is equal to  Wednesday, console.log,"It's Humpday!!! Halfway there!!"
// 4) if day is equal to Thursday or Friday, console.log, "The weekend is soon!"
// 5) if day is equal to Saturday or Sunday, console.log, "Its the weekend! Time to relax."
