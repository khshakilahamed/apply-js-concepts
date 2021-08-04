function isLeapYear(year) {
    if (year % 4 == 0) {
        if (year % 400 == 0 && year % 100 != 0) {
            return true;
        }
        else {
            return false;
        }
    }
    else {
        return false;
    }
}


const myYear = 2104;
const isMyYearLeapYear = isLeapYear(myYear);
console.log('is My leap year ', isMyYearLeapYear);