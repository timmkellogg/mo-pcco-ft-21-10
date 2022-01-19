
//Object destructuring
const { hello, person } = require('./hello');
//import


test('outputs the correct string', () => {
  expect(hello()).toBe("Hello World!");
});

test('outputs the correct string', () => {
  expect(person.firstName).toBe("Tim");
});