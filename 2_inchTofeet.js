function incheToFeet(inches) {
    var feet = inches / 12;
    return feet;
}

var myInches = 132;
var feet = incheToFeet(myInches);
console.log(feet);

var dadiInches = 144;
var feet = incheToFeet(dadiInches);
console.log(feet);





// mile to km
function mileToKilometer(miles) {
    var km = miles * 1.60934;
    return km;
}

var marathon = mileToKilometer(26.2);
console.log('marathon in km: ', marathon);