//Solve these problems:

//#1 Create a one line function that adds adds two parameters
const s = (a,b) => a+b;
console.log(s(2,3));

//Closure: What does the last line return?
const addTo = x => y => x + y
var addToTen = addTo(10)
console.log(addToTen(3));//13

//Currying: What does the last line return?
const sum = (a, b) => a + b
const curriedSum = (a) => (b) => a + b
console.log(curriedSum(30)(1));//31


//Currying: What does the last line return?
const sum1 = (a, b) => a + b;
const curriedSum1 = (a) => (b) => a + b;
const add5 = curriedSum1(5);
console.log(add5(12)); //17

//Composing: What does the last line return?
const compose = (f, g) => (a) => f(g(a));
const add1 = (num) => num + 1;
const add5_1 = (num) => num + 5;
console.log(compose(add1, add5_1)(10));//16

//What are the two elements of a pure function?
//determinism, no side effects