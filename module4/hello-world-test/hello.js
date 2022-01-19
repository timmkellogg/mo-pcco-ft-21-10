function hello() {
  return "Hello World!";
}

module.exports = {
  hello,
  foo: 'bar',
  person: {
      firstName: 'Tim', 
      profession: 'developer', 
      age: 27,
      location: 'cleveland',
      likesPineapple: false
    }
};

// const person = {
//   firstName: 'Tim', 
//   profession: 'developer', 
//   age: 27,
//   location: 'cleveland',
//   likesPineapple: false
// }

// const { name, age, likesPineapple } = person

// console.log(firstName); // Tim