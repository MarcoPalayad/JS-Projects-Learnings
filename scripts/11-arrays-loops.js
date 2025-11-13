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


///////////// 11t /////////////////////////////////

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






//////////////////////////////////////////////////
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