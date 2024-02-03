// Declaring let and const variables
let name = "John";
const age = 25;
console.log("name: ", name);
console.log("age: ", age);

// The difference in let and const is that let can be reassigned, while const cannot be reassigned.

document.getElementById("text-one").innerHTML += "The difference in let and const is that let can be reassigned, while const cannot be reassigned.";
document.getElementById("script-one").innerHTML += `
<pre>
<code>
    let name = "John";
    const age = 25;
    // Use the console to see the effects of these.
</code
</pre>`;

// ----------------------------------------------

// Usinge conditional statements
let hour = 10;
if (hour < 18) {
    console.log("Good day, hour: ", hour);
} else {
    console.log("Good evening, hour: ", hour);
}

// The syntax is if (condition) { code to be executed if the condition is true } else { code to be executed if the condition is false }
// These can be simplified with ternary operators.

// Ternary Operators
let userAge = 18;
let voteable = (userAge < 18) ? "Too young" : "Old enough";
console.log("State of voteable: ", voteable);

document.getElementById("text-two").innerHTML += "The syntax is if (condition) { code to be executed if the condition is true } else { code to be executed if the condition is false }";
document.getElementById("script-two").innerHTML += `
<pre>
<code>
    let hour = 10;
    if (hour < 18) {
        console.log("Good day");
    } else {
        console.log("Good evening");
    }
    // Ternary Operators
    let userAge = 18;
    let voteable = (userAge < 18) ? "Too young" : "Old enough";
    console.log(voteable);
</code>
</pre>`;

// ----------------------------------------------

// Using loops
for (let i = 0; i < 5; i++) {
    console.log("The number is: ", i);
}

// The syntax is for (statement 1; statement 2; statement 3) { code to be executed }
// Statement 1 is executed before the loop starts
// Statement 2 defines the condition for running the loop
// Statement 3 is executed each time after the loop has been executed

// While loops
let i = 0;
while (i < 5) {
    console.log("The number is: ", i);
    i++;
}

// While loops are used when the number of iterations is not known beforehand.
// While loops depend on a variable outside the loop. But, the condition must have an ending point.

document.getElementById("text-three").innerHTML += "The syntax is for (statement 1; statement 2; statement 3) { code to be executed }";
document.getElementById("script-three").innerHTML += `
<pre>
<code>
    for (let i = 0; i < 5; i++) {
        console.log("The number is: ", i);
    }
    // While loops
    let i = 0;
    while (i < 5) {
        console.log("The number is: ", i);
        i++;
    }
</code>
</pre>`;

// ----------------------------------------------
// Using functions

function myFunction(p1, p2) {  // This creates the function
    return p1 * p2;
}

let result = myFunction(4, 3); // This calls the function or runs the function

console.log("The result is: ", result);

// The syntax is function name(parameter1, parameter2) { code to be executed }
// The function must be called to be executed.

// Arrow functions
const arrowFunction = (p1, p2) => p1 * p2;
console.log("The result of the arrow function is: ", arrowFunction(4, 3));

// Arrow functions are a shorter way to write functions. They are written with a fat arrow =>
// They are not hoisted, so they cannot be called before they are declared.

document.getElementById("text-four").innerHTML += "The syntax is function name(parameter1, parameter2) { code to be executed }";
document.getElementById("script-four").innerHTML += `
<pre>
<code>
    function myFunction(p1, p2) {
        return p1 * p2;
    }
    let result = myFunction(4, 3);
    console.log("The result is: ", result);
    // Arrow functions
    const arrowFunction = (p1, p2) => p1 * p2;
    console.log("The result of the arrow function is: ", arrowFunction(4, 3));
</code>
</pre>`;
// ----------------------------------------------