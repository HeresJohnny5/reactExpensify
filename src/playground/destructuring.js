console.log('Destructuring Running');

// ***** OBJECT DESTRUCTURING

const person = {
  name: 'John',
  age: 39,
  location: {
    city: 'Pittsburgh',
    temp: 70
  }
};

const book = {
  title: 'Ego is the Enemy',
  author: 'Ryan Holiday',
  publisher: {
    name: 'Penguin'
  }
};

// console.log(`${person.name} is ${person.age}.`);

// const name = person.name;
// let age = person.age;

// console.log(`${name} is ${age}.`);

// let { name, age } = person;

// console.log(`${name} is ${age}.`);

// let { name: firstName = 'Anonymous', age } = person;
// let { city: currentCity, temp } = person.location;

// console.log(`Hello my name is ${firstName} and I am ${age} years old. I live in ${currentCity} and it is ${temp} degrees out.`);

// const { name: publisherName = 'Self-Published' } = book.publisher;

// console.log(publisherName);

// ***** ARRAY DESTRUCTURING

// const address = ['733 Frank Street', 'Pittsburgh'];

// console.log(`You are in ${address[1]} ${address[2]}`);

// const city = address[1];
// const state = address[2];

// console.log(`You are in ${city} ${state}`);

// const [, , state = 'OR', zip] = address;

// console.log(`I live in ${state}`);

const item = ['Coffee (hot)', '$2.00', '$2.50', '$2.75'];

let [coffee, small, medium, large] = item;

console.log(`A medium ${coffee} costs ${medium}.`);