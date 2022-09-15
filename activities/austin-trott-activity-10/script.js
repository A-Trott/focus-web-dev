//Set Variables
let num1
let num2
let result
const demo = document.getElementById("results")

// set element and event listener
const button = document.getElementById("calc__bttn");
button.addEventListener("click", getNums);


// Create Function
function getNums() {
    num1 = document.getElementById("calc__num1").valueAsNumber;
    num2 = document.getElementById("calc__num2").valueAsNumber;
    return comparNums(num1,num2);
}

function comparNums (a,b){
    if(a>b){
        return demo.innerHTML = `${a} is greater than ${b}`
    }else if(a === b){
        return demo.innerHTML = `${a} is equal to ${b}`;
    }else{
        return demo.innerHTML = `${a} is less than ${b}`;
    }
}


    