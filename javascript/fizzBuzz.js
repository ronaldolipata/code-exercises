/**
 * Function to perform the FizzBuzz game.
 * @param {number} number - The number to evaluate.
 * @returns {string | number} - Returns 'Fizz' if divisible by 3, 'Buzz' if divisible by 5,
 * 'FizzBuzz' if divisible by both 3 and 5, or the number itself otherwise.
 */
function fizzBuzz(number) {
  if (number % 15 === 0) {
    // If the number is divisible by both 3 and 5, print 'FizzBuzz'
    console.log('FizzBuzz');
    return 'FizzBuzz';
  } else if (number % 3 === 0) {
    // If the number is divisible by 3, print 'Fizz'
    console.log('Fizz');
    return 'Fizz';
  } else if (number % 5 === 0) {
    // If the number is divisible by 5, print 'Buzz'
    console.log('Buzz');
    return 'Buzz';
  } else {
    // If none of the conditions are met, print the number itself
    console.log(number);
    return number;
  }
}

const limit = 100; // Define the limit for FizzBuzz

for (let i = 1; i <= limit; i++) {
  fizzBuzz(i); // Call the fizzBuzz function for numbers from 1 to 'limit'
}
