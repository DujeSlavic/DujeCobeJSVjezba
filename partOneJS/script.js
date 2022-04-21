//Write a JavaScript program that will check if a given 
//positive number is a multiple of 3 or a multiple of 7.

const num = 21;
function isItMultiple(num){
    if(num % 3 == 0) console.log(`${num} is a multiple of 3`);
    else console.log(`${num} is NOT a multiple of 3`);

    if(num % 7 == 0) console.log(`${num} is a multiple of 7`);
    else console.log(`${num} is NOT a multiple of 7`);
}
//isItMultiple(num);

//----------------------

//Write a JavaScript program to find the larger number from the 
//two given positive integers, the two numbers are in the range 40..60 inclusive.

function findLarger(number1, number2){
    if(
        number1 >= 40 && 
        number2 >= 40 &&
        number1 <= 60 &&
        number2 <= 60
        ){
            console.log(larger (number1,number2));
        }
    else console.log('Numbers are invalid!');
}
function larger(number1,number2){
    if (number1 < number2) return `Larger number is ${number2}`;
    else if (number1 > number2) return `Larger number is ${number1}`;
    else return 'Numbers are equal.'
}
/*
findLarger(50,53);
findLarger(41,40);
findLarger(50,50);
findLarger(1,3);
*/


//------------------------

//Write a JavaScript program to check three given numbers, if the three 
//numbers are same return 30 otherwise return 20 and if two numbers are same return 40.

/*
checkThreeNumbers(1,1,2);
console.log('-------------');
checkThreeNumbers(1,2,3);
console.log('-------------');
checkThreeNumbers(1,1,1);
*/

function checkThreeNumbers(num1, num2, num3){
    if(threeEqual(num1,num2,num3)) console.log(30);
    else console.log(20);

    if(twoEqual(num1,num2,num3)) console.log(40);
}

function threeEqual (num1, num2, num3){
    if(num1 == num2 && num1 == num3) return true;
    else return false;
}

function twoEqual (num1, num2, num3){
    if(
        num1 == num2 ||
        num1 == num3 ||
        num2 == num3
    ) return true;
    else return false;
}


//-------------------------------------------

//Write a JavaScript program that will concatenate two strings and return the result. 
//If the length of the strings are not same then remove the characters from the longer string.

/*
console.log(concatenateTwoEqualStrings('bla','bla'));
console.log('----------------');
console.log(concatenateTwoEqualStrings('bla','blaXXXXXX'));
console.log('----------------');
console.log(concatenateTwoEqualStrings('blaXXXXXXXXXX','bla'));
*/
function concatenateTwoEqualStrings (str1, str2){
    let len1 = str1.length
    let len2 = str2.length
    
    if (len1 < len2) return str1 + str2.slice(0, len1);
    else if (len1 > len2) return str1.slice(0, len2) + str2;
    else return str1 + str2;
}


//--------------------------------------------

//Write a JavaScript program to test if a string ends with "some". 
//The string length must be greater or equal to 6.

/*
console.log(checkEndForSome('here is some'));
console.log('--------------');
console.log(checkEndForSome('some in the front'));
console.log('----------------');
console.log(checkEndForSome('some'));*/

function checkEndForSome (str){
    if (
        str.length >= 6 &&
        str.slice(-4) == 'some'
    ){
        return true;
    }
    //nisam posebni return za <6 char radio
    else return false;
}

//-----------------------------------------

//Write a JavaScript program to create a string using the middle three characters of 
//a given string of odd length. The string length must be greater or equal to 3.


/*
console.log(middleThreeChar ('12'));
console.log('----------------------');
console.log(middleThreeChar('bla123bla'));
console.log('----------------------');
console.log(middleThreeChar('123'));
*/
function middleThreeChar (str){
    var ret;
    if (str.length >= 3 && str.length % 2 != 0){
        var middle = Math.floor(str.length / 2);
        return str.slice(middle - 1, middle + 2);
    }
    else return 'Invalid string!'
}

//-------------------------------------------------

//Write a JavaScript program that will find the longest string from a given array of strings.

/*
console.log(getLongestString(['1','12','123']));
console.log('--------------------------');
console.log(getLongestString([]));
console.log('--------------------------');
console.log(getLongestString(['bla']));
*/


function getLongestString(arry){
    if(arry.length == 0) return 'Array is empty!';
    else  return checkForMaxString(arry);
}
function checkForMaxString (arry){
    var max = arry[0].length;
    var maxPosition = 0;
 
    for (let i = 0; i < arry.length; i++) {
        if (max < arry[i].length) {
            max = arry[i].length;
            maxPosition = i;
        }
    }
    return arry[maxPosition];
}

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

