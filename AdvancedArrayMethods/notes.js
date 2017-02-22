var fruits = ["apple", "banana","cherry"];

//1A: Write a function called outputFruitOld that console every fruit in a fruit array

function outputFruitOld (array){
for(i = 0; i < array.length; i++){
	console.log(array[i])
 }
}

outputFruitOld(fruits);



// function outputFruits (element, index) {
// 	console.log(element);
// 	console.log("array[" + index + "] " + element);
// }

// 1B: Rewrite using forEach array method

//fruits.forEach(outputFruits);
// fruits.forEach(function(element){
// 	console.log(element);
// });


// fruits.forEach(function(fruit){
// 	console.log(fruit);
// });

// //2A : Write a function called backwordFruitsOld that reverse the letters in each word in the fruits array
// function backwardFruitsOld(array) {
// 	var backwardsFruits = [];
// 	for (var i = 0; i <array.length; i++){
// 		backwardsFruit.push(array[i].split("").reverse().join(""));
// 	}
// }

// backwordFruitsOld(fruits);

// //

function fiveLettersOnOnlyOld (array){
	var filteredFruits = [];
	for (var i = 0; i <array.length; i++){
		if(array[i].length === 5){
			filteredFruits.push(array[i]);
		}
	}
	console.log(filteredFruits);

}

fiveLettersOnOnlyOld(fruits);


function filterIt (fruit){
	if (fruit.length === 5){
		return fruit;
	}
}
var filteredFruits = fruits.filter(filterIt);
console.log(filteredFruits);

//fruits is the array method filter is the function

var numbers = [0, 1, 2, 3, 4];

function addzOld(array){
	var sum = 0;
	for (var i = 0; i < array.length; i++){
		sum = sum + array[i];
	}
	console.log(sum);
}
addzOld(numbers);

var sum = [0, 1, 2, 3, 4].reduce(function(previousValue, currentValue, index){
	console.log("current index " + index);
	console.log("previousValue ", previousValue);
	console.log("currentValue ",currentValue);
	return previousValue + currentValue;
});

//console.log(sum);

//winGame: function()











// var backwardsFruit = fruits.map(function(fruit){
// 	return fruit.split("").reverse().join("");
// });
// console.log(backwardsFruit);

// arr.forEach(function callback(currentValue, index, array) {
//     //your iterator
// }[, thisArg]);









