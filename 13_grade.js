var marks = 30;

if (marks >= 80) {
    console.log("You got A+");
}
else if (marks < 80 && marks >= 75) {
    console.log("You got A");
}
else if (marks < 75 && marks >= 70) {
    console.log("you got A-");
}
else if (marks < 70 && marks >= 65) {
    console.log("You got B+");
}
else if (marks < 65 && marks >= 60) {
    console.log("You got B");
}
else if (marks < 60 && marks >= 55) {
    console.log("You got B-");
}
else if (marks < 55 && marks >= 50) {
    console.log("You got C");
}
else if (marks < 50 && marks >= 45) {
    console.log("You got D");
}
else if (marks < 45 && marks >= 40) {
    console.log("You got E");
}
else if (marks < 40) {
    console.log("You Failed");
}
else {
    console.log("Enter the correct value");
}