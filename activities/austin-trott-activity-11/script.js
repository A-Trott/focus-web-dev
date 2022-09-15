//Set Variables
let num1;
let num2;
/* let result
let result2 */
const demo1 = document.getElementById("results1");
const demo2 = document.getElementById("results2");

// set element and event listener
const button = document.getElementById("calc__bttn");
button.addEventListener("click", getNum);


// Create Function

function getNum() {
    num1 = document.getElementById("calc__num1").valueAsNumber;
    num2 = document.getElementById("calc__num2").valueAsNumber;
    if (num1 <= 0 || num2 <= 0){
    return alert(`numbers have to be more than 0`);
    }else{
        console.log(num1, num2)
        return countDown(num1), countUp(num2) ;
    }
} 
function countDown (a){
    let result = "";
    while(a > 0){
        if (a % 2 !== 0){
            result += `${a} <br>`;
            a -= 1;
        } else{
            a -= 1;
        } 
    }
    return demo1.innerHTML = result;
}
function countUp (a){
    let result2 = "";
    for(i = 0; i <= a; i++){
        if (i % 2 == 0){
            result2 += (`<p>${i} is even </p>`);
        } else{
            result2 += (`<p>${i} is odd </p>`);
        }  
    }
    return demo2.innerHTML = result2;
}
