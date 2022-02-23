// ASSESSMENT 1: Coding Conceptual Questions

// Examine the following examples.

// First, predict the outcome based on your understanding of the code.
// Then, uncomment the console.log() and verify the output. Briefly explain why your initial answer was correct or incorrect.

// --------------------INSTRUCTOR EXAMPLE: What will this log?
// const colors = ["tangerine", "magenta", "lilac", "daffodil"]
// console.log(colors.push("indigo"))

// a) Your answer:
// b) Verify and explain:


// --------------------1) What will this log?

// const cohort = "Alpha 2022"
// console.log(cohort.length)

// a) Your answer:
//     -This command will produce an output of 10 in the terminal.

// b) Verify and explain:
//     -The '.length' gives back the total amount of numbers of elements including space in the string and as the syllabus says "Strings can contain any type of characters and as many characters as needed." I learned in class that the Length property can evaluate to strings as well as array and it will then count each strings individually.


// --------------------2) What will this log?

// const greeting = "Hello World!"
// console.log(greeting[4])

// a) Your answer:
    // -This will log the letter o from Hello World!. 

 // b) Verify and explain:
    // -The output that came out is the letter "o" due to the fact that console.log is followed by a (paretheses) and within is greeting which is the value of "Hello World" followed by the number 4 inside the [brackets]. This entails that this command will count the greeting input Hello World to 4 starting from 0 like 0, 1, 2, 3, 4, which equals to the 5th letter "o" in Hello World.


// --------------------3) What will this log?

// const languages = ["JavaScript", "Ruby", "Python", "C++"]
// const index = 1
// console.log(languages[index])

// a) Your answer:
    // -The command output will log Ruby.

// b) Verify and explain:
    // -It turns out that the output does equates to Ruby because the specific value 1 in the array will be accessed. The strings will be counted starting from 0 in this order 0 = JavaScript, 1 = Ruby, 2 = Python, 3 = C++, and the answer in result is the element Ruby.

// --------------------4) What will this log?

// const weekendDays = ["saturday", "sunday"]
// console.log(weekendDays.toUpperCase())

// a) Your answer:
    // -The command output will result to both characters inputted in the string to become uppercase like so SATURDAY, SUNDAY.

// b) Verify and explain:
    // -The terminal output brought up an error stating that weekendDays.toUpperCase is not a function and does not mean anything becuase the terminal cannot comprehend it. If you do want to make the characters in the string to become uppercase, the correct function would be weekendDays[0].toUpperCase()


// --------------------5) What will this log?

// const dataTypes = ["number", "string", "Boolean"]
// console.log(typeof dataTypes.length)

// a) Your answer:
    // - The output will come out as number.

// b) Verify and explain:
    // - The output pulled is number in the array because the typeof operator didn't have a value to return an indicated a string which defaults to the first one which is number.
    //