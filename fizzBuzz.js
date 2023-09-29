function fizzBuzz(number) {
  if (number % 15 === 0) {
    // Print "FizzBuzz" if the number is divisible by 3 and 5
    console.log('FizzBuzz');
  } else if (number % 3 === 0) {
    // Print "Buzz" if the number is divisible by 3
    console.log('Buzz');
  } else if (number % 5 === 0) {
    // Print "Fizz" if the is divisible by 5
    console.log('Fizz');
  } else {
    // Print the number if the above conditions are not met
    console.log(number);
  }

  return number;
}

const number = 100;

for (let i = 1; i < number; i++) {
  fizzBuzz(i);
}

console.log(fizzBuzz(number));
