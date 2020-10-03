function isLeap(year) {
    var divisibleBy4 = !true;
    var divisibleBy100 = !true;
    var divisibleBy400 = !true;

    if (year % 4 === 0 ) {
        divisibleBy4 = true;
    } 
    if (year % 100 === 0) {
        divisibleBy100 = true;
    } 
    if (year % 400 === 0) {
        divisibleBy400 = true;
    } 
 
    if  (divisibleBy4 === true && divisibleBy100 === false && divisibleBy400 === false) {
        return "Leap year.";
    } else if (divisibleBy4 === true && divisibleBy100 === true && divisibleBy400 === false) {
        return "Not leap year.";
    } else if (divisibleBy4 === false && divisibleBy100 === true && divisibleBy400 === false) {
        return "Not leap year.";
    } else if (divisibleBy4 === false && divisibleBy100 === false && divisibleBy400 === true) {
        return "Leap year.";
    } else if (divisibleBy4 === true && divisibleBy100 === true && divisibleBy400 === true) {
        return "Leap year.";
    } else { //all false
        return "Not leap year.";
    }
}