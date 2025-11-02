const num = [10, 20 ,30]

num[2] = 99

console.log(num)



function getLastValue(anArray) {
  return anArray[anArray.length - 1];
}

let result1 = getLastValue([1, 20, 22, 24, 5]);
console.log(result1)

let result2 = getLastValue(['hi', 'hello', 'good']);
console.log(result2);


function arraySwap (reverseArray) {
    return reverseArray.reverse()
}

let array1 = arraySwap([10, 20, 30])
console.log(array1)


for (let i = 0; i <= 10; i += 2) {
    console.log(i)
}


for (let i = 5;  i >= 0; i--) {
    console.log(i)
}


let i = 0;

    while( i <= 10) {
        console.log(i);
        i += 1
    }


let array = [1, 2, 3]
const newArray = []

for (let i = 0; i < array.length; i++) {
    newArray.push(array[i] + 1)
}

console.log(newArray)

function addOne(array2) {
    
    for (i = 0; i < array2.length; i++) {
        array2[i] = array2[i] + 1
    }

    return array2

}

console.log(addOne([-2, -1, 6]))



function addNum(array, num) {

    for (let i = 0; i < array.length; i++) {
        array[i] = array[i] + num
    }

    return array

}

console.log(addNum([2, 3, 4], 5))


function addArrays (arrays1, arrays2) {

    let combinedArray = []

    for (let i = 0; i < arrays1.length && i < arrays2.length; i++) {
         combinedArray.push( arrays1[i] + arrays2[i])
    }

    return combinedArray

}

console.log(addArrays([1,2,3], [1,2,3]))



function countPositive(numArray) {

    let count = 0

    for (let i = 0; i < numArray.length; i++) {

        if ( numArray[i] > 0) {

            count++

        }

    }

    return count

}

console.log(countPositive([-1, -7, 5]))


function countNegative(negativeArray) {

    let count = 0

    for (let i = 0; i < negativeArray.length; i++) {

        if ( negativeArray[i] < 0) {

            count++

        }

    }

    return count

}

console.log(countNegative([-1, -7, 5]))


function sumPositive(positiveArray) {

    let sum = 0

    for (let i = 0; i < positiveArray.length; i++) {

        if ( positiveArray[i] > 0) {

            sum  = sum + positiveArray[i]

        }

    }

    return sum

}

console.log(sumPositive([8, -7, 5]))



function greaterThanTen (array3) {

    let count = 0

    for (let i = 0; i < array3.length; i++) {

        if ( array3[i] > 10) {

            count++

        }

    }

    return count

}

console.log(greaterThanTen([8, -7, 5, 25, 15]))



function minMax(array4) {
    if (!array4 || array4.length === 0) {
        return null;
    }

    let min = array4[0];
    let max = array4[0];

    for (let i = 0; i < array4.length; i++) {
        if (typeof array4[i] !== 'number' || isNaN(array4[i])) {
            continue;
        }

        if (array4[i] < min) {
            min = array4[i];
        }
        
        if (array4[i] > max) {
            max = array4[i];
        }
    }

    return { min, max }; 
}

console.log(minMax([8, -7, 5, null, 25, undefined, 15]));




function countWords(words) {

    let myCount = {}


    for (let i = 0; i < words.length; i++) {
        if (myCount[words[i]]) {
            myCount[words[i]]++
        } else {
            myCount[words[i]] = 1
        }
    }

    return myCount
}

console.log(countWords(['apple', 'games', 'grapes', 'apple', 'games', 'orange']))