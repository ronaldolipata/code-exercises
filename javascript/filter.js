// Define constants for animal types
const TYPE_DOG = 'dog';
const TYPE_CAT = 'cat';
const TYPE_BIRD = 'bird';

// Create an array of animals
const animals = [
  { name: 'Rufus', type: TYPE_DOG, age: 2 },
  { name: 'Nala', type: TYPE_DOG, age: 2 },
  { name: 'Nabisco', type: TYPE_CAT, age: 4 },
  { name: 'Whoopi', type: TYPE_BIRD, age: 1 },
  { name: 'Zane', type: TYPE_CAT, age: 4 },
  { name: 'Yuri', type: TYPE_CAT, age: 1 },
];

// Filter and get all animals with the type 'cat'
const getAllCats = animals.filter((animal) => animal.type === TYPE_CAT);

// Print the array of all cats
console.log(getAllCats);

// Get an array of all unique animal types using Set
const uniqueAnimalTypes = [...new Set(animals.map((animal) => animal.type))];

// Print the array of all unique animal types
console.log(uniqueAnimalTypes);
