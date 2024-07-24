//first non repeating character in the string
function firstNonRepeatedCharacter(string) {
    return string.split('').filter(function (character, index, obj) {
        return obj.indexOf(character) === obj.lastIndexOf(character);
    }).shift();
}

console.log(firstNonRepeatedCharacter('we are watching television'));

//rotating an array
function rotateRight(arr, k) {
    k = k % arr.length;
    const rotatedPart = arr.slice(arr.length - k);
    const restOfArray = arr.slice(0, arr.length - k);
return rotatedPart.concat(restOfArray);
}
const array = [1, 2, 3, 4, 5];
const rotations = 2;
const rotatedArray = rotateRight(array, rotations);
console.log(rotatedArray);


//inserting items at a specific position
function insertArrayAt(arr, index, arrayToInsert) {
    return [...arr.slice(0, index), ...arrayToInsert, ...arr.slice(index)];
}
const originalArray = [1, 2, 3, 7, 8, 9];
const arrayToInsert = [4, 5, 6];
const index = 3;
const modifiedArray = insertArrayAt(originalArray, index, arrayToInsert);
console.log(modifiedArray);


//comparing 2 arrays of equality
function arraysEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    return arr1.every((value, index) => value === arr2[index]);
}
const array1 = [1, 2, 3];
const array2 = [1, 2, 3];
const array3 = [1, 2, 4];
console.log(arraysEqual(array1, array2))
console.log(arraysEqual(array1, array3))


//creating array of arrays
const arrayOfArrays = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(arrayOfArrays);


//array destructing
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first);
console.log(second);
console.log(rest);