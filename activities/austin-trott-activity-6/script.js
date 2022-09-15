// set element and event listener
const button = document.getElementById("calc-bttn");
button.addEventListener("click", myFunction);

// Create Function
function myFunction() {
    // Set function Variables
    let number1 = document.getElementById("calc__num1").value;
    let number2 = document.getElementById("calc__num2").value;
    let text = "";
    // Create function object -- Calculation values 
    myCalc = {
        operators: ["+", "-", "/", "*", "%"],
        results: [number1 + number2, number1 - number2, number1 / number2, number1 * number2, number1 % number2],
        mathName: ["addition", "subtraction", "division", "multiplication", "modulo"]
    }
    // Loop through object and print to console and apply to text variable
    for (let i = 0; i < 5; i++) {
        console.log(`${number1} ${myCalc.operators[i]} ${number2} = ${myCalc.results[i]} `);
        text += `<div class="results-box">
                <h4> ${myCalc.mathName[i]} </h4> 
                <p> ${number1}${myCalc.operators[i]}${number2} = ${myCalc.results[i]} </p>
                </div>`
    };

// Add to HTML
    document.getElementById("demo").innerHTML = (`<h2>Results</h2> ${text}`);
}


    