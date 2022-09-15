let x = 20;
let counter = 1;

while (counter <=20) {
    if(counter %3 == 0){
        console.log("3rd result");
        x -=1;
        counter ++;
    }
    console.log(x);
    x -=1;
    counter ++;
}console.log();



let l =20;
while(l>=0){
if(l=== 0) {
    console.log('Blast off!!');
    break;
}
console.log(l);
l--;
}