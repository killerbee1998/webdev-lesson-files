// Solve the below problems:


// #1) Check if this array includes the name "John".
const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
console.log(dragons.includes("Jhon"));

// #2) Check if this array includes any name that has "John" inside of it. If it does, return that
// name or names in an array.
const dragoons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
for(i=0;i<dragoons.length;++i){
	if(dragoons[i].includes("Jhon")){
		console.log(dragoons[i]);
	}
}

// #3) Create a function that calulates the power of 100 of a number entered as a parameter
const readline = require("readline-sync");
const x = readline.question("Enter a number");
console.log(x**100);


// #4) Useing your function from #3, put in the paramter 10000. What is the result?
// Research for yourself why you get this result
console.log(x**1000);
