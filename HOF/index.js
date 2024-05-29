// Example demonstrating the use of rest and spread operators in JavaScript

// Function using the rest operator to collect an indefinite number of arguments into an array
function sum(...numbers) {
    // Calculate and return the sum of the numbers
    return numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  }
  
  // Usage of the sum function
  console.log("Sum of 1, 2, and 3:", sum(1, 2, 3));
  
  // Example of the spread operator expanding an array into individual elements
  let fruits = ['apple', 'banana', 'cherry'];
  console.log('Fruits:',...fruits);
  
  // Combining two arrays using the spread operator
  let moreFruits = ['date', 'elderberry'];
  let allFruits = [...fruits,...moreFruits];
  console.log('All fruits:', allFruits);
  
  // Creating a new object using the spread operator to copy properties from an existing object
  let person = { name: 'John Doe', age: 30 };
  let personCopy = {...person, occupation: 'Software Developer' };
  console.log('Person copy:', personCopy);
  
  // Modifying a property value in the copied object
  personCopy.age = 31;
  console.log('Updated person copy:', personCopy);
  
  // Demonstrating the spread operator in function calls
  function greet(greeting,...names) {
    names.forEach(name => console.log(`${greeting}, ${name}`));
  }
  
  greet('Hello', 'Alice', 'Bob', 'Charlie');
  