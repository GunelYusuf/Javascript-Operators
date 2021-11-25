let arr=[7,14,9,21,26,16,3]

function Find(params) {
    let count=0;
    for (let index = 0; index < arr.length; index++) {
        if (params==arr[index]) {
            count++;
            console.log("Yes,it has");
        }
    } if(count==0){
        console.log("It's not found");
    }
}
Find(76);


function EvenNumbers(arr) {
    for (let index = 0; index < arr.length; index++) {
        const element = arr[index];
        if (element%2==0){
            console.log(element);
        }
    }
}
EvenNumbers([7,14,9,78,1096,21,26,16,3,88,68,40,34,22,12]);


let c;
const operators = prompt('Enter operator ( either +, -, * or / ): ');
const a = parseFloat(prompt('Enter the first number: '));
const b = parseFloat(prompt('Enter the second number: '));
function Calc() {
    switch(operators){
        case "+":
           c=a+b;
           console.log(`${a}+${b}=${c}`);
        break;
        case "-":
            c=a-b;
            console.log(`${a}-${b}=${c}`);
        break;
        case "*":
            c=a*b;
            console.log(`${a}*${b}=${c}`);
        break;
        case "/":
            c=a/b;
            console.log(`${a}/${b}=${c}`);
        break;
        default:
            console.log("Enter the correct operator");
    }
}
Calc();
