function fibonacciGenerator(n) {
    var output = [];
    if (n === 0) {
        output = [0];
    } else if (n === 1) {
        output = [0,1];
    } else {
        output = [0,1];
        for (var i = 2; i < n; i++) {
            output.push(output[output.length-2] + output[output.length-1]);
        }
    }
    return output;
}



Solution 1:
var fib = [];
    if(n === 1){
        fib[0] = 0;
    }
    if(n >= 2){
        fib[0] = 0;
        fib[1] = 1;
        for(var i = 2; i < n; i++){
            fib[i] = fib[i - 1] + fib[i - 2];
        }
    }
    return fib;
 
//If we make it more idealistic that no edge cases needed to be checked, it could be more simplify like this:
 
Solution 2:
var fib = [];
    fib[0] = 0; 
    if(n >= 2){
        fib[1] = 1;
        for(var i = 2; i < n; i++){
            fib[i] = fib[i - 1] + fib[i - 2];
        }
    }
    return fib;
 
//where we assume n is always a legit input which is larger or equal to 1 and always an integer