// Declare variables
let input;
let index;
let inputVeri;

// Create Month array
const months = [
  { name: "january",
    display: "January",
    days: 31,
    class: "jan",
    season: "winter"
  },
  { name: "febuary",
    display: "Febuary",
    days: 28,
    class: "feb",
    season: "winter"
  },
  { name: "march",
    display: "March",
    days: 31,
    class: "mar",
    season: "spring"
  },
  { name: "april",
    display: "April",
    days: 30,
    class: "apr",
    season: "spring"
  },
  { name: "may",
    display: "May",
    days: 31,
    class: "may",
    season: "spring"
  },
  { name: "june",
    display: "June",
    days: 30,
    class: "jun",
    season: "summer"
  },
  { name: "july",
    display: "July",
    days: 31,
    class: "jul",
    season: "summer"
  },
  { name: "august",
    display: "August",
    days: 31,
    class: "aug",
    season: "summer"
  },
  { name: "september",
    display: "September",
    days: 30,
    class: "sep",
    season: "fall"
  },
  { name: "october",
    display: "October",
    days: 31,
    class: "oct",
    season: "fall"
  },
  { name: "november",
    display: "November",
    days: 30,
    class: "nov",
    season: "fall"
  },
  { name: "december",
    display: "December",
    days: 31,
    class: "jan",
    season: "winter"
  },
];

/* ================= Linking to HTML Elements ========================== */

// Link document elements to variables
const results = document.getElementById("results__container");
const numDays = document.getElementById("numDays");
const displayMonth = document.getElementById("displayMonth");
const displayMonth1 = document.getElementById("displayMonth1");
const button = document.getElementById("new");
const theme = document.getElementById("body1");

//  Event listeners
button.addEventListener("click", monthPrompt);


/* ================================ functions ============================*/

// Prompt for month and clean input data
function monthPrompt() {
    input = prompt("Please enter a month name.");
    if (input === null){
      return;
    }else{
      inputVeri = input.toLowerCase();
      return arrayCheck(inputVeri);
    }
} 
// Takes month name and checks if it is in the months object array. returns to monthPrompt if there is no match
function arrayCheck(x){
  if (months.some(months => months.name == x)) {
    index = months.map(object => object.name).indexOf(x);
    return txtUpdate(index);
  }else{
    alert(`${x} is not a valid month name`);
    return monthPrompt();
  }
}
//Takes an index number of the month object array and updates html with months object data
function txtUpdate(x) {
  theme.className= (months[x].season);
  results.style.display = "block";
  numDays.innerText = (months[x].days);
  displayMonth.innerText=(months[x].display);
  displayMonth1.innerText=(months[x].display);
}









// Junk I tried

/* const month = [
  "january",
  "febuary",
  "march",
  "april",
  "may",
  "june",
  "july",
  "august",
  "september",
  "october",
  "november",
  "december",
];  */


// create input/verify month weird solution function

/* function Rmv(input) {
  verified = false;
  results.style.display = "block"; 
  while (verified != true) {
    input = prompt("month").toLowerCase();
    if (months.some(months => months.name ==input)) {
      verified = true;
      trueinput = month.indexOf(input);
      return TxtUpdate(trueinput);
    }else{
      alert(`${input} is not a valid month name`);
    }
  }
}  */

// create switch statement to change html with updated info
/* 
switch (input) {
  case "january":
    numDays.innerText = (months[0].days);
    displayMonth.innerText=(months[0].display);
    break;
  case "febuary":
    numDays.innerText = (28);
    displayMonth.innerText=("Febuary");
    break;
  case "march":
    numDays.innerText = (31);displayMonth.innerText=("March");
    break;
  case "april":
    numDays.innerText = (30);displayMonth.innerText=("April");
    break;
  case "may":
    numDays.innerText = (31);displayMonth.innerText=("May");
    break;
  case "june":
    numDays.innerText = (30);displayMonth.innerText=("June");
    break;
  case "july":
    numDays.innerText = (31);displayMonth.innerText=("July");
    break;
  case "august":
    numDays.innerText = (31);displayMonth.innerText=("August");
    break;
  case "september":
    numDays.innerText = (30);displayMonth.innerText=("September");
    break;
  case "october":
    numDays.innerText = (31);displayMonth.innerText=("October");
    break;
  case "november":
    numDays.innerText = (30);displayMonth.innerText=("November");
    break;
  case "december":
    numDays.innerText = (31);displayMonth.innerText=("December");
    break;
} */

