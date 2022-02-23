// ASSESSMENT 1: Coding Practical Questions

// To run file: navigate to the correct directory in terminal, $ node code-challenges.js

// Pseudo coding is required.

// --------------------INSTRUCTOR EXAMPLE: Create a function that takes in any two strings and returns the string with more characters. Use the two sets of test variables provided.

// Set one:
// const fruit1 = "apple"
// const fruit2 = "banana"

// Set two:
// const fruit3 = "cherry"
// const fruit4 = "kiwi"


// --------------------1) Create a function that takes in any given number and determines if the number is below boiling point, at boiling point, or above boiling point. Boiling point is 212 degrees Fahrenheit. Use the test variables provided below. Expected output: "42 is below boiling point", "350 is above boiling point", "212 is at boiling point" *

// const temp1 = 42
// const temp2 = 350
// const temp3 = 212

// Pseudocode:
// Create a function named boilingPoint with a parameter of waterTemp
// Create a conditional statement with a set of <, ====, >212
// Make all of the conditional statements have their placeholders input to return with their appropriate strings
// To gain the correct output desired, input into the parameter temp1, temp2, temp3 with boilingPoint for console.log


// const boilingPoint = (temp) => {
//     if (temp === 212) {
//         return `${temp} is at boiling point`
//     }else if (temp > 212) {
//         return `${temp} is above boiling point`
//     }else if (temp < 212) {
//         return `${temp} is below boiing point`
//     }
// }
// console.log(boilingPoint(temp1))
// console.log(boilingPoint(temp2))
// console.log(boilingPoint(temp3))


// --------------------2) Create the code that will combine the two arrays and return the length using the variables provided below. Expected output: 10

// const myNumbers1 = [3, 7, 0, 36, -9]
// const myNumbers2 = [8, -7, 42, 9, 13]

// Pseudocode:
// Create a code that combines both array given.
// Use the variables given to return length.
// Apply .concat() method to combine both array given forming one array taking the sum of both.
// Make a variable called addNumbers equating to myNumbers1 with .concat operator after and myNumbers2 in parenthesis.
// The Accessor method utilized will return some of the data and most importantly doesn't modify the array.
// Then console.log the new variable addNumbers along with the length operator .length in parenthesis with a semicolon outside to tell the expected function arguements in myNumbers1.
// Then console.log myNumbers1 to count the elements inside the newly combined array.
// Therefore these codes meet the requirements to output the given outcome 10.


// var addNumbers = myNumbers1.concat(myNumbers2)
// console.log(addNumbers.length);
// console.log(myNumbers1)


// --------------------3) Create the code that will reverse the letters of a string using the test variable provided below. Expected output: "2202 ahplA"

// const currentCohort = "Alpha 2022"

// Pseudocode:
// Create a code that will reverse the letters of a string.
// Make a variable named alpha equating to the currentCohort to turn a string into an array using .split("") Acessor with quotation mark in the parethesis.
// Then console.log using .reverse() to make the array order go in reverse using the new variable alpha prior the mutator indicating as Alpha 2022.
// Then conmsole.log using .join(" ") with a space to separate the characters and make a string by converting the values.
//Therefore the following codes meet the conditions to output 2202 ahplA.


// var alpha= currentCohort.split("")
// console.log(alpha.reverse())
// console.log(alpha.join(" "))


// --------------------4) Create a statement that will evaluate whether each number in an array is even or odd. Use the test variable provided below. Expected output: "odd" "even" "odd" "even" "odd" "even"

// const myArray = [13, 34, 5, 10, 27, 42]

// Pseudocode:
// Create a statement that evaluates whether it's even or odd within the given numbers of the array.
// Use a for loop declaration stating that arrays myArray is less than one to multiply.
// Use the declaration const name num that equates to myArray with a value of i = 0 in a bracket to state that identifier doesn't change.
// Use an If/Else statement to see if the program will continue to run when the set condition is true, plugging in the new const name nuum modulo 2 with a Loose Equality operatorn == and 0 all being in parenthese and this will compare the two values for equality.
// Then console.log with parentheses sqying the number is even in quotation for even numbers.
// Then console.log with parentheses saying the number is odd in quotation for odd numbers.
// Therefore the output desired is displaying in the terminal because the conditions are met.


// for(let i=0; i<myArray.length; i++){
// const num = myArray[i]
// if(num % 2 == 0) {
//     console.log("even")
// }
// else
//     console.log("odd")
// }


// --------------------5) Create a function that takes in a set of any two numbers and subtracts the smaller number from the larger number using the sets of test variables provided below. Expected output: 42, 3

// Set one:
// const number1 = 58
// const number2 = 100

// Set two:
// const number3 = 27
// const number4 = 24

// Pseudocode:
// Create a function that performs a mathematical equation that substracts the given test variables in smaller to larger number.
// I need to create a function named num to equate a set of variable to take in two numbers.
// The parameters will take in num 1 and num 2.
// If num1 is less than num2 that means that num2 is greater than, which will then subtract the larger number num2 minus num1.
// If num2 is less than num1 that means that num1 is less than, which will then subtract the larger number num1 minus num2.
// I will return the difference between the larger and smaller number.
// I can now make sure that both sets are able to communicate with the return.


// var num = (num1, num2) => {
// if (num1 < num2){
// return num2 - num1
// }else if (num2 < num1){
// return num1 - num2
// }
// }
// console.log(num(number1, number2))
// console.log(num(number3, number4))
//