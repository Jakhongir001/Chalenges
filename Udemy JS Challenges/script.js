'use strict';

// Challenge #4 devoted to Modern operators and Strings
/*
Coding Challenge #4
Write a program that receives a list of variable names written in underscore_case
and convert them to camelCase.
The input will come from a textarea inserted into the DOM (see code below to
insert the elements), and conversion will happen when the button is pressed.
Test data (pasted to textarea, including spaces):
underscore_case
first_name
Some_Variable
calculate_AGE
delayed_departure
Should produce this output (5 separate console.log outputs):
underscoreCase ✅
firstName ✅✅
someVariable ✅✅✅
calculateAge ✅✅✅✅
delayedDeparture ✅✅✅✅✅
Hints:
§ Remember which character defines a new line in the textarea �
§ The solution only needs to work for a variable made out of 2 words, like a_b
§ Start without worrying about the ✅. Tackle that only after you have the variable
name conversion working �
§ This challenge is difficult on purpose, so start watching the solution in case
you're stuck. Then pause and continue!
Afterwards, test with your own test data!
GOOD LUCK 

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));
const btnSave = document.querySelector('button');

// saving the input into a variable by adding a click event to button 
btnSave.addEventListener('click', function () {
  const saved = document.querySelector('textarea').value.toLowerCase().trim();
  if (saved.includes('_') === true) {
    const oneWord = saved.replace(/\n/g, ' ');
    const savedArray = oneWord.split(' ');
    let num = savedArray[0][savedArray[0].indexOf('_') + 1].toUpperCase();
    let prefinal = '';
    let h = '';
    // changing it into individual words and joining them in camelCase
    for (let upper of savedArray) {
      let splitted = upper.split('_');
      splitted[1] = splitted[1][0].toUpperCase() + splitted[1].slice(1);
      prefinal = splitted.join(' ').replace(' ', '');
      prefinal = prefinal.padEnd(20);
      // #3rd assignment
      h += '✅';
      let final = prefinal + h;
      console.log(final);
    }

    reset();
  } else {
    alert('please type two or more words seperated by an underscore');
    // not necessary but in case needed
    reset();
  }
});

// clearing the input area function

function reset() {
  document.querySelector('textarea').value = '';
}
*/

//----------------His solution

/*
document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');

  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');

    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;
    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});
*/

//--------------------------Poll application challenge-------------------------------

/*
// 1. Create a method called 'registerNewAnswer' on the 'poll' object. The
// method does 2 things:
// 1.1. Display a prompt window for the user to input the number of the
// selected option. The prompt should look like this:
// What is your favourite programming language?
// 0: JavaScript
// 1: Python
// 2: Rust
// 3: C++
// (Write option number)
// 1.2. Based on the input number, update the 'answers' array property. For
// example, if the option is 3, increase the value at position 3 of the array by 1. Make sure to check if the input is a number and if the number makes
// sense (e.g. answer 52 wouldn't make sense, right?)
// 2. Call this method whenever the user clicks the "Answer poll" button.
// 3. Create a method 'displayResults' which displays the poll results. The
// method takes a string as an input (called 'type'), which can be either 'string'
// or 'array'. If type is 'array', simply display the results array as it is, using
// console.log(). This should be the default option. If type is 'string', display a
// string like "Poll results are 13, 2, 4, 1".
// 4. Run the 'displayResults' method at the end of each
// 'registerNewAnswer' method call.


5. Bonus: Use the 'displayResults' method to display the 2 arrays in the test
data. Use both the 'array' and the 'string' option. Do not put the arrays in the poll
object! So what should the this keyword look like in this situation?
Test data for bonus:
§ Data 1: [5, 2, 3]
§ Data 2: [1, 5, 3, 9, 6, 1]
Hints: Use many of the tools you learned about in this and the last section �
GOOD LUCK 
*/
/*
const poll = {
  question: 'What is your favourite programming language?',
  options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
  // This generates [0, 0, 0, 0]. More in the next section!
  answers: new Array(4).fill(0),

  registerNewAnswer() {
    const inputValue = Number(
      prompt(
        `${this.question}\n${this.options.join('\n')}\n (Write option number)`
      )
    );

    // inputValue >= 0 && inputValue <= 3 && typeof inputValue === 'number' &&  this.answers[inputValue]++;
    if (inputValue >= 0 && inputValue <= 3) {
      this.answers[inputValue]++;
    } else {
      alert(`Please insert a valuable number`);
    }

    this.displayResults(this.answers.join(' '));
  },

  displayResults(type) {
    typeof type === 'string'
      ? alert(`Poll results are ${type}`)
      : console.log(type);
    // for (let i of type)
  },
};
const pollOnly = poll.registerNewAnswer.bind(poll);
document.querySelector('.poll').addEventListener('click', pollOnly);

const testData1 = [5, 2, 3];
const testData2 = [1, 5, 3, 9, 6, 1];
const display = poll.displayResults;
// display.call(poll, testData1.join(' '));
display.apply(poll, testData2);
display.call(poll, testData2);

*/
// ---------------------A closer look at functions section-------------------------

/*
Coding Challenge #2
This is more of a thinking challenge than a coding challenge �
Your tasks:
1. Take the IIFE below and at the end of the function, attach an event listener that
changes the color of the selected h1 element ('header') to blue, each time
the body element is clicked. Do not select the h1 element again!
2. And now explain to yourself (or someone around you) why this worked! Take all
the time you need. Think about when exactly the callback function is executed,
and what that means for the variables involved in this example.
(function () {
const header = document.querySelector('h1');
header.style.color = 'red';
})();
GOOD LUCK 
*/

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  function colorChanger() {
    document.body.addEventListener('click', function () {
      header.style.color = 'blue';
    });
  }
  colorChanger();
})();

// his solution
// document.querySelector('body').addEventListener('click', function () {
// header.style.color = 'blue';
// });

/* 
This worked even though the outer function has already returned and header is in outer scope

because a closure makes sure that a function doen't lose connection  to variables that existed at the funtion's birthplace

2. because a function keeps a reference to its outer scope, which preserves the scope chain throughout time
 */
//////////////////////////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////////////
//Working with Arrays ------------Challenge #1

/*
Coding Challenge #1
Julia and Kate are doing a study on dogs. So each of them asked 5 dog owners
about their dog's age, and stored the data into an array (one array for each). For
now, they are just interested in knowing whether a dog is an adult or a puppy.
A dog is an adult if it is at least 3 years old, and it's a puppy if it's less than 3 years
old.
Your tasks:
Create a function 'checkDogs', which accepts 2 arrays of dog's ages
('dogsJulia' and 'dogsKate'), and does the following things:
1. Julia found out that the owners of the first and the last two dogs actually have
cats, not dogs! So create a shallow copy of Julia's array, and remove the cat
ages from that copied array (because it's a bad practice to mutate function
parameters)
2. Create an array with both Julia's (corrected) and Kate's data
3. For each remaining dog, log to the console whether it's an adult ("Dog number 1
is an adult, and is 5 years old") or a puppy ("Dog number 2 is still a puppy
�
")
4. Run the function for both test datasets
Test data:
§ Data 1: Julia's data [3, 5, 2, 12, 7], Kate's data [4, 1, 15, 8, 3]
§ Data 2: Julia's data [9, 16, 6, 8, 3], Kate's data [10, 5, 6, 1, 4]
Hints: Use tools from all lectures in this section so far �
GOOD LUCK 
*/
const juliaDogs = [3, 5, 2, 12, 7];
const kateDogs = [4, 1, 15, 8, 3];

const checkDogs = function (dogsJulia, dogsKate) {
  const updatedJuliaDogs = dogsJulia.slice();
  updatedJuliaDogs.splice(0, 1);
  updatedJuliaDogs.splice(-2);
  const corrected = dogsKate.concat(updatedJuliaDogs);
  console.log(corrected);
  const whetherAdult = currentAge => (currentAge >= 3 ? 'an adult' : 'a puppy');
  corrected.forEach(function (age, i) {
    console.log(
      `Dog number ${i + 1} is ${whetherAdult(age)}, and is ${age} year${
        (age > 1 && 's') || ''
      } old"`
    );
  });
};

// checkDogs(juliaDogs, kateDogs);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

// I didn't use still a puppy as I wanted to challenge myself little more to use some more of the methods that I learned
