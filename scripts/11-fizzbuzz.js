const array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

function fizzbuzz (array1) {

    let fizz = []

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] % 3 === 0 && array1[i] % 5 === 0) {
            fizz.push('FizzBuzz')
        } else if (array1[i] % 3 === 0) {
            fizz.push('Fizz')
        } else if (array1[i] % 5 === 0) {
            fizz.push('Buzz')
        } else {
            fizz.push(array1[i])
        }
    }

    console.log(fizz)

}

fizzbuzz(array1)



// ------------ 11W ------------- //

function findIndex(array2, word) {
    for (let i = 0; i < array2.length; i++) {
        if (array2[i] === word) {
        // Instead of creating an accumulator
        // variable and updating it in the loop,
        // we can just return i directly, when
        // we find it since this is a function.
        return i;
        }
    }

    // If the function has not returned by now,
    // logically that means the word must not
    // exist in the array, so we'll return -1.
    return -1;
}



function unique (array2) {

    const result = []


    for (let i = 0; i < array2.length; i++) {
        const index = findIndex(array2, array2[i])

        if (i === index) {
            result.push(array2[i])
        }

    }

    return result

}

console.log(unique(['red', 'green', 'green', 'red']));


// --------- Claude Problem Sample -------- //


function countOccurrence (array, word) {

    let count = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] === word) {
            count++
        }
    }

    return count

}

console.log(countOccurrence(['cat', 'dog', 'cat', 'bird', 'cat'], 'cat'));