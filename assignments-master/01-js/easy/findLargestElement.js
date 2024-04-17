/*
  Write a function `findLargestElement` that takes an array of numbers and returns the largest element.
  Example:
  - Input: [3, 7, 2, 9, 1]
  - Output: 9
*/

function findLargestElement(numbers) {
    let largest = 0;

    for(let i=0; i < numbers.length; i++){
        if(numbers[i] > largest){
            largest = numbers[i]
        }
    }
    return largest
}

let larg = findLargestElement([100,8,9,6,5,2,35])
console.log(larg);

module.exports = findLargestElement;