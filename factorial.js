// Function to calculate factorial
function factorial(n) {
    // Check for negative input as factorial is not defined for negative numbers
    if (n < 0) {
        return "Factorial is not defined for negative numbers.";
    }
    let result = 1;

    // Loop from 1 to n to calculate the factorial
    for (let i = 1; i <= n; i++) {
        result *= i;  // Multiply result by each number from 1 to n
    }

    return result;  // Return the factorial result
}

// Example usage
let num = 5; // Change this value to test with other numbers
console.log("The factorial of " + num + " is: " + factorial(num));
