function add(a: number, b: number): number {
  return a + b;
}

function addSafe(a: number | string, b: number | string): number {
  const numA = typeof a === 'string' ? parseFloat(a) : a;
  const numB = typeof b === 'string' ? parseFloat(b) : b;
  if (isNaN(numA) || isNaN(numB)) {
    return 0; // or throw an error
  }
  return numA + numB;
}

let result1 = addSafe(5, '10'); // Correct usage
let result2 = addSafe(5, 10);   // Correct usage
let result3 = addSafe('abc', 10); //Handles incorrect input gracefully
console.log(result1, result2, result3);