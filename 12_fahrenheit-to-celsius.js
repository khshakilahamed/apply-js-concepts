function convertedToCelsius(fahrenheit) {
    celsius = (5 * (fahrenheit - 32)) / 9;
    return celsius;
}

fahrenheitValue = 64;
console.log(convertedToCelsius(fahrenheitValue));