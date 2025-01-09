// recursive functions have 2 parts: 
// 1) the recursive call to the function itself
// 2) at least one condition to exit the recursive

const recurToTen = (num = 1) => {
    if (num > 10) return;
    console.log(num);
    num++;
    recurToTen(num);
}

// recurToTen();

// "With Great Power Comes Greate Responsibility"
// Reasons to use Recursion
// 1) Less Code
// 2) Elegant Code
// 3) Is the Readability Improved?

// The Standard Example: The Fibonacci Sequence
//0, 1, 1, 2, 3, 5, 8, 13, 21 etc.

// Without Recursion:

const fibonacci = (num, array = [0,1]) => {
    while(num > 2){
        const [nextToLast, last] = array.slice(-2);
        array.push(nextToLast + last);
        num -= 1;
    }
    return array;
}

console.log(fibonacci(5));

// With Recursion:

const recFib = (num, array = [0,1]) => {
    if(num < 2) return array;
    const [nextToLast, last] = array.slice(-2);
    return recFib(num-1, [...array, nextToLast + last]);
}

console.log(recFib(12));

//WithOut Recursion:

const fibonacciPos = (pos) => {
    if(pos <= 1) return pos;
    const seq = [0,1]
    for($i=2; $i <= pos; $i++){
        const [nextToLast, last] = seq.slice(-2);
        seq.push(nextToLast + last);
    }
    return seq[pos];
}

// console.log('Without recursion: ',fibonacciPos(8));

//With Recursion:

const fibPos = (pos, i=1) => {
    if(pos <= 1) return pos;
    console.log(i,'== fib(',pos,') => ',pos - 1,'+',pos - 2, '=', ((pos - 1) + (pos - 2)));
    return (fibPos(pos - 1, ++i) + fibPos(pos - 2));
}

console.log(fibPos(8));
