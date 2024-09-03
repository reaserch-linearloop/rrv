// This code intentionally violates SonarQube standards

// Unused variable
let unusedVar = 42;

// Duplicate code block
function duplicateCode() {
    console.log("This is duplicate code");
    console.log("This is duplicate code");
    console.log("This is duplicate code");
}

// Complex function with high cognitive complexity
function complexFunction(a: number, b: number, c: number): number {
    if (a > b) {
        if (b > c) {
            return a + b + c;
        } else if (a > c) {
            return a * b * c;
        } else {
            return (a + b) * c;
        }
    } else {
        if (a < c) {
            return a - b - c;
        } else if (b < c) {
            return a * b / c;
        } else {
            return (a - b) * c;
        }
    }
}

// Magic number
const result = complexFunction(10, 20, 30) * 1000;

// Commented out code
// function oldFunction() {
//     console.log("This function is no longer used");
// }

// Empty catch block
try {
    throw new Error("Test error");
} catch (error) {
    // Do nothing
}

// Nested ternary operator
const nestedTernary = a > b ? a > c ? a : c : b > c ? b : c;

console.log(result, nestedTernary);
