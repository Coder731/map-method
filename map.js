  
/**
 * To run this file in Gitpod, use the 
 * command node map.js in the terminal
 */

// Using a for loop
let nums = [ 1, 2, 3, 4, 5];
let results = [];
for (let num of nums) {
  results.push(num *2);
}

console.log(results);


// Using map()
  // in reality we do not need to define the function outside of the map method
  // the callback function is usually just passed into the parentheses on the fly,
  // without being assigned to a variable first 
const multByTwo = function (num) {
  return num * 2;
}

const mapResults = nums.map(multByTwo);
console.log(mapResults);


// Simplified w/ map()
  // Notice the function (on the code line below) does not need to be named
  // The map method expeccts a function so we can pass one in with no name or anything
  // it can be totally anonymous.
const simplified = nums.map(function(num) { return num * 2 });
console.log(simplified);

// Simplfied w/ map() + arrow function
const arrow = nums.map(num => num * 2);
console.log(arrow);


// With objects:
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skill: 'JavaScript'
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skill: 'HTML'
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skill: 'CSS'
  },
];

const studentsWithIds = students.map(student => [student.name, student.id]);
console.log(studentsWithIds);

console.log(students.values);

// challenge
// https://stackoverflow.com/questions/36677787/add-property-to-all-objects-in-array
var array = [ {'a': '12', 'b':'10'}, {'a': '20', 'b':'22'} ];

// you can use array.map,
// and you should use Number() to convert props to numbers for adding:

var array = [ {'a': '12', 'b':'10'}, {'a': '20', 'b':'22'} ];
console.log(array);
var r = array.map( x => {
  x.c = Number(x.b) - Number(x.a);
  return x
  })

console.log(r)

// solution 2:
// And, with the support of the spread operator, a more functional approach would be:
console.log(array);
array.map(x => ({
  ...x,
  c: Number(x.a) - Number(x.b)
}))
console.log(array);