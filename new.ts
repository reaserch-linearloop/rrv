let unusedVar = 42;

function duplicateCode() {
    console.log("This is duplicate code");
    console.log("This is duplicate code");
    console.log("This is duplicate code");
}

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

const result = complexFunction(10, 20, 30) * 1000;

try {
    throw new Error("Test error");
} catch (error) {
}

const nestedTernary = a > b ? a > c ? a : c : b > c ? b : c;

console.log(result, nestedTernary);

let i = 0;
while (true) {
    i++;
}
