// const number = 4;
// const remainder = number % 2;
// console.log(remainder == 0);

// is even function
function isEven(number) {
    if (number % 2 == 0) {
        return true;
    }
    return false;
}

const myNumber = 145;
const isMyNumberEven = isEven(myNumber);
console.log(isMyNumberEven);

const herNumber = 1892;
const isHerNumberEven = isEven(herNumber);
console.log('is her number even: ', isHerNumberEven);


// is odd function
function isOdd(number) {
    if (number % 2 != 0) {
        return true;
    }
    return false;
}

const isMyNumberOdd = isOdd(myNumber);
console.log('Is my number odd', isMyNumberEven);