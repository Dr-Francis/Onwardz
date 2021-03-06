var _ = require('lodash');

var array = [1,2,3,4,5,6,7];
console.log('answer:', _.without(array, 3));


// myList.push(["Northern Island"]);
// myList.unshift(["London", "Cardiff", "Edinburgh", "Belfast"]);
// console.log(myList);


// using this array,
// var array = ["Banana", "Apples", "Oranges", "Blueberries"];
// array.shift[0];
// return array;


// 1. Remove the Banana from the array.

// 2. Sort the array in order.

// 3. Put "Kiwi" at the end of the array.

// 4. Remove "Apples" from the array.

// 5. Sort the array in reverse order. (Not alphabetical, but reverse
// the current Array i.e. ['a', 'c', 'b'] becomes ['b', 'c', 'a'])

// you should have at the end:
// ["Kiwi", "Oranges", "Blueberries"]

// using this array,
// var array2 = ["Banana", ["Apples", ["Oranges"], "Blueberries"]];
// access "Oranges".