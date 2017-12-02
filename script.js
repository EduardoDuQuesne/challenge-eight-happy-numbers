// Happy Numbers

let count = 0;
let happyCount = 0;

for (let i = 1;  i <= 1000; i++) {
    convertToString(i);
    count = 0;
}

function convertToString(num) {
    let stringNum = num.toString();
    let stringNumArray = stringNum.split("");
    convertToNumber(stringNumArray);
}

//Convert To Number
function convertToNumber (stringArray) {
    let digitArray = [];
    for (let i = 0; i < stringArray.length; i++) {
        digitArray.push(Number(stringArray[i]));
    }
    addDigitSquare(digitArray);
}

//Sum Squares
function addDigitSquare(array) {
    let sumSquare = 0;
    let numString = ""; 
    for (let i = 0; i < array.length; i++) {
        sumSquare += array[i] * array[i];       
    }
    checkSum(sumSquare);
}

//Check if Sum equals 0
function checkSum(num) {
    count += 1;
    if (count === 150) {
        happyCount += 1
    } else if (num === 1) {
        happyCount += 1
        console.log(happyCount);
    } else {
        convertToString(num);
    }
}