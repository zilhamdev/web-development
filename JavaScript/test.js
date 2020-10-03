function fibonacciGenerator(n){
    var fibonacci=[];
    var length = fibonacci.length;
    if (n === 1) {
        fibonacci.push(0);
    } else if (n === 2) {
        fibonacci.push(0);
        fibonacci.push(1);
    } else {
        fibonacci.push(0);
        fibonacci.push(1);
        var firstNumber = fibonacci[length];
        var secondNumber = fibonacci[length+1];
        var i = firstNumber + secondNumber;
               fibonacci.push(i);
               console.log(firstNumber + " " + secondNumber);
        }
    return fibonacci;
}