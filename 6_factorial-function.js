// let factorial = 1;
// for (let i = 0; i <= 5; i++) {
//     factorial = factorial * i;
// }
// console.log(factorial);

function getFactorial(number) {
    let fact = 1;
    for (let i = 1; i <= number; i++) {
        fact *= i;
    }
    return fact;
}

// call function
var firstFactorial = getFactorial(7);
console.log(firstFactorial);
// call function
var secondFactorial = getFactorial(9);
console.log(secondFactorial);