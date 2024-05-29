// Map function: doubling all elements in the array
const numbers1 = [1, 2, 3, 4];
const doubledNumbers = numbers1.map(function(number) {
    return number * 2;
});

console.log(doubledNumbers); // [2, 4, 6, 8]



// Filter function: getting only even numbers from an array
const numbers2 = [1, 2, 3, 4, 5];
const evenNumbers = numbers2.filter(function(number) {
    return number % 2 === 0;
});

console.log(evenNumbers); // [2, 4]

// Reduce function: finding the sum of all elements in an array
const numbers3 = [1, 2, 3, 4];
const total = numbers3.reduce(function(sum, number) {
    return sum + number;
}, 0);  // Initial value of 0 for the sum

console.log(total); // 10


//forEach Logging each element of an array//

const numbers = [1, 2, 3, 4];
numbers.forEach(function(number) {
    console.log(number);
});

