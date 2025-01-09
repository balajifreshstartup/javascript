// Lexical Scope defines how variable names are resolved in nested function.

// Nested (child) functions have access to the scope of their parent functions.

// This often confused with closure, but lexical scope is only an important part of closure.

// w3schools : "A closure is a function having access to the parent scope, even after the parent function has closed."

// A closure is created when we define a function, not when a function is executed.

// global Scope
let x = 1;

const parentFunction = () => {
    // local scope
    let myvalue = 2;
    console.log(x);
    console.log(myvalue);

    return () => {
        console.log(x += 5);
        console.log(myvalue += 1);
    }
}

const result = parentFunction();
result();
result();

// ********My Question : Based on above closure function, we called the result() function twice but only one time only the parent function console printing, why it's not printing twice?

/*** ChatGPT Answer,.
In your code, parentFunction returns an inner function (a closure) that captures the variables from its outer scope, including myvalue. When you call result(), it executes this inner function.

Let's break down the code execution:

You call parentFunction(), and it sets myvalue to 2 in its local scope.

Then, you call result(), which executes the inner function. Inside this inner function, console.log(x) and console.log(myvalue) refer to x and myvalue from the outer scope of parentFunction.

The inner function prints the current value of x and increments it by 5 (x += 5). It also increments the value of myvalue by 1 (myvalue += 1).

Now, the interesting part:

When you call result() again, it executes the inner function once more. However, this time, it continues with the values of x and myvalue from the previous call. It doesn't reset the outer scope variables.
So, even though the inner function is executed twice, it operates on the same set of outer scope variables. That's why you see the second call to result() printing the updated values of x and myvalue from the first call.

To see the parentFunction console logs on each call, you would need to move the console.log(x) and console.log(myvalue) inside the parentFunction itself rather than the inner function. ********/


// ****** IIFE (Immediately Invoked Function Expression)

// To create a IIFE create a function inside the parenthesis "()" and then after the inital definition, add the parenthesis () operator right after it. So it will call the action immediately and that is the Immediately Invoked Function Expression.

/** example 1 ***/
/* const privateCounter = ( () => {
    let count = 0;
    console.log(`initial value = ${count}`);
    return () => { ++count; console.log(count) }
})();

privateCounter();
privateCounter();
privateCounter();*/

const credits = ((num) => {
    let credits = num;
    console.log(`initial credit value: ${credits}`);
    return () => {
        --credits;
        if(credits > 0) console.log(`Playing game, ${credits} credits remaining`);
        if(credits <= 0) console.log(`Not enough credits`);
    }
})(3);

credits();
credits();
credits();

