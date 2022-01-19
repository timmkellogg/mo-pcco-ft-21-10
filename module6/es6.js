//string concatenation

//rest & spread

//destructuring

//map
const arr = [{
    name: 'tim',
    age: 27,
    job: 'software dev'
},
{
    name: 'bob',
    age: 70,
    job: 'senior software dev'
}];

// const mappedArr = arr.map(obj => {
//     obj.canRetire = obj.age > 65 ? true : false

//     return obj;
// });
// console.log(mappedArr)

//find
const tim = arr.filter(person => person.name === 'tim')
console.log(tim)