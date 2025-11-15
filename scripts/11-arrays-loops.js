const strings = ['search', 'hello', 'found', 'inside', 'world']

for (let i = 0; i < strings.length; i++ ) {
    if (strings[i] === 'world') {
        console.log(strings[i])
    } 

}

////////////////////////////////////////////

const strings2 = ['search', 'today', 'hello', 'found', 'inside', 'world']

for (let i = 0; i < strings2.length; i++ ) {
    if (strings2[i] === 'world') {
       console.log(i)
       break;
    } 

}

///////////////////////////////////////////


function findIndex (array, word) {
    for (let i = 0; i < array.length; i++ ) {
        if (array[i] === word) {
        console.log(i)
        break;
        } 
    }
}


findIndex(['food', 'protein', 'whey', 'gym-rat', 'whey' ], 'whey')


////////////////////////////////////////////


function removeEgg (array1) {

    const newBasket = []

    for (let i = 0; i < array1.length; i++) {
        if (array1[i] === 'egg') {   
            continue;
        } 

        newBasket.push(array1[i])
    }

    console.log(newBasket)

}

removeEgg(['egg', 'potato', 'egg', 'mushroom'])


function removeFirstTwo (array2) {

    const withoutFirstTwo = []
    let count = 0

    for (let i = 0; i < array2.length; i++) {
        if (array2[i] === 'egg' && count < 2) {   
            count ++
            continue
        } else {
            withoutFirstTwo.push(array2[i])
        }

        
    }

    console.log(withoutFirstTwo)

}

removeFirstTwo(['egg', 'potato', 'egg', 'egg', 'mushroom'])


// 11t Exercise //

function removeLastTwo (array3) {

    const withoutLastTwo = []
    let count = 0

    for (let i = 0; i < array3.length; i++) {
        if (array3[i] === 'egg' && count < 2) {   
            count ++
            continue
        } else {
            withoutLastTwo.push(array3[i])
        }

        
    }

    console.log(withoutLastTwo)
}

removeLastTwo(['egg', 'potato', 'egg', 'egg', 'mushroom'].reverse())



// 11U Exercise //

const foods = ['egg', 'potato', 'mushroom', 'egg', 'egg', 'mushroom']

function removeLastTwoWithSplice (foods, itemToRemove) {

    const arrayCopy = foods.slice().reverse()

    const withoutLastTwoWithSplice = []
    let count = 0

    for (let i = 0; i < arrayCopy.length; i++) {
        if (arrayCopy[i] === itemToRemove && count < 2) {   
            count ++
            continue
        } else {
            withoutLastTwoWithSplice.push(arrayCopy[i])
        }

        
    }

    // console.log(withoutLastTwoWithSplice)
    // console.log(foods)

    return withoutLastTwoWithSplice.reverse()


    

}

removeLastTwoWithSplice(foods, 'mushroom')
console.log('Remove mushrooms:', removeLastTwoWithSplice(foods, 'mushroom'))
console.log('Remove eggs:', removeLastTwoWithSplice(foods, 'egg'))
console.log('Original array unchanged:', foods)



// Exercism.org - Problem (Lasagna) Task 3 //

function amountOfNoodlesAndSauce (quantities) {

    let quantitiesNeeded = {}
    let incrementAmount;


    for (let i = 0; i < quantities.length; i++) {

        if (quantities[i] === 'noodles') {
            incrementAmount = 50
        } else if (quantities[i] === 'salt') {
            incrementAmount = 0.2
        } else {
            incrementAmount = 0.15
        }


        if (!quantitiesNeeded[quantities[i]]) {
            quantitiesNeeded[quantities[i]] = incrementAmount
        } else {
            quantitiesNeeded[quantities[i]] += incrementAmount
        }

    }

    return quantitiesNeeded
  
}

/////////////////////////////////////////////////