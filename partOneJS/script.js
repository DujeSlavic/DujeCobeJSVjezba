//Write a JavaScript program that will check if a given 
//positive number is a multiple of 3 or a multiple of 7.

let isItMultiple = (number) => {
    if(num % 3 === 0) console.log(`${num} is a multiple of 3`);
    if(num % 7 === 0) console.log(`${num} is a multiple of 7`);  
}
isItMultiple(21);

//----------------------

//Write a JavaScript program to find the larger number from the 
//two given positive integers, the two numbers are in the range 40..60 inclusive.

let findLarger = (number1, number2) => {
    if(number1 >= 40 && number2 >= 40 && 
        number1 <= 60 && number2 <= 60) console.log(Math.max(number1,number2));
}

findLarger(50,53);
findLarger(41,40);
findLarger(50,50);
findLarger(1,3);



//------------------------

//Write a JavaScript program to check three given numbers, if the three 
//numbers are same return 30 otherwise return 20 and if two numbers are same return 40.

let checkThreeNumbers = (number1, number2, number3) => {
    (number1 === number2 && number1 === number3) ? console.log(30) : console.log(20);
    if(number1 === number2 || number1 === number3 || number2 === number3) console.log(40);
}

checkThreeNumbers(1,1,2);
console.log('-------------');
checkThreeNumbers(1,2,3);
console.log('-------------');
checkThreeNumbers(1,1,1);


//-------------------------------------------

//Write a JavaScript program that will concatenate two strings and return the result. 
//If the length of the strings are not same then remove the characters from the longer string.

let concatenateTwoEqualStrings = (string1, string2) => {
    if(string1.length <= string2.length) return string1 + string2.slice(0, string1.length);
    if(string1.length > string2.length) return string1.slice(0, string2.length) + string2;
}


console.log(concatenateTwoEqualStrings('bla','bla'));
console.log('----------------');
console.log(concatenateTwoEqualStrings('bla','blaXXXXXX'));
console.log('----------------');
console.log(concatenateTwoEqualStrings('blaXXXXXXXXXX','bla'));



//--------------------------------------------

//Write a JavaScript program to test if a string ends with "some". 
//The string length must be greater or equal to 6.

let checkEndForSome = (string) => (string.length >= 6 && string.endsWith('some')) ? true : false;

console.log(checkEndForSome('here is some'));
console.log('--------------');
console.log(checkEndForSome('some in the front'));
console.log('----------------');
console.log(checkEndForSome('some'));

//-----------------------------------------

//Write a JavaScript program to create a string using the middle three characters of 
//a given string of odd length. The string length must be greater or equal to 3.


let middleThreeChar = (string) => {
    if(string.length >= 3 && string.length % 2 != 0){
        let middle = Math.floor(string.length / 2);
        return string.slice(middle - 1, middle + 2);
    }
}

console.log(middleThreeChar ('12'));
console.log('----------------------');
console.log(middleThreeChar('bla123bla'));
console.log('----------------------');
console.log(middleThreeChar('123'));

//-------------------------------------------------

//Write a JavaScript program that will find the longest string from a given array of strings.

let getLongestString = (array) => {
    if(array.length === 1) return array[0];
    if(array.length > 1) return array.sort((element1, element2) => element1.length - element2.length).at(-1);
}

console.log(getLongestString(['1','12','123']));
console.log('--------------------------');
console.log(getLongestString([]));
console.log('--------------------------');
console.log(getLongestString(['bla']));

//--------------------------------------

//Write a JavaScript program that will find the biggest number 
//that can be divided with 6 of a given array of integers

/*
console.log(biggestNumberDivisibleBy6([]));
console.log('--------------------------');
console.log(biggestNumberDivisibleBy6([3]));
console.log('--------------------------');
console.log(biggestNumberDivisibleBy6([1,2,3,6,66,12,0]));
console.log('--------------------------');
*/

function biggestNumberDivisibleBy6(arry){
    if(arry.length == 0) return 'Array is empty!'
    else  return checkForMaxNumber(arry);
}
function checkForMaxNumber (arry){
    var max = null;
    var maxPosition = null;
 
    for (let i = 0; i < arry.length; i++) {
        if (
            arry[i] % 6 == 0 &&
            arry[i] > max
            ) {
            max = arry[i];
            maxPosition = i;
        }
    }

    if(maxPosition == null) return 'No number is divisible by six.';
    else return arry[maxPosition];
}

//-------------------------------------

//Write a JavaScript program to convert temperatures to and from 
//Celsius, Fahrenheit. Expected output:
//60°C is 140°F
//45°F is 7.22°C

/*
tempConversion(60,'C');
tempConversion(45, 'F');
*/

function tempConversion (temp, scale){
    var convertedTemp;
    if (scale == 'C') {
        convertedTemp = CToF(temp);
        console.log(`${temp}\xB0C is ${convertedTemp}\xB0F`);
    }
    else if (scale == 'F') {
        convertedTemp = FToC(temp);
        console.log(`${temp}\xB0F is ${convertedTemp}\xB0C`);
    }
    else console.log('Invalide scale!');
}

function CToF(tempInC){
    return 9 / 5 * tempInC + 32;
}

function FToC(tempInF){
    return 5 / 9 * (tempInF - 32);
}


//----------------------------------------

