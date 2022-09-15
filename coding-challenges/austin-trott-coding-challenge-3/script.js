//Set Variables
let num1
let num2
const ops = ["+", "-", "/", "*", "%"];
const mathName= ["addition", "subtraction", "division", "multiplication", "modulo"];
let min;
let max;
const demo = document.getElementById("results")

// set element and event listener
const button = document.getElementById("calc__bttn");
button.addEventListener("click", myFunction);
demo.style.display = "none";

// Create Function
function myFunction() {
    num1 = document.getElementById("calc__num1").valueAsNumber;
    num2 = document.getElementById("calc__num2").valueAsNumber;
    answers = [num1 + num2, num1 - num2, num1 / num2, num1 * num2, num1 % num2]
    min = Math.min(...answers);
    max = Math.max(...answers);
    let text=""
    for (let i = 0; i < 5; i++) {
        console.log(`${num1} ${ops[i]} ${num2} = ${answers[i]} `);
        text += `<p> ${num1 }${ops[i]} ${num2} = ${answers[i]} </p> `;
    }
    demo.style.display = "block";
    demo.innerHTML = (`<h2>Results</h2> ${text} <p> The smallest number from these operations is ${min} <br> The largest number from these operations is ${max}`);
}


    