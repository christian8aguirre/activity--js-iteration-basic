//------------------------------------------------------------------
// TASK : getAllGreaterThan()
//  Write a function called `getAllGreaterOrLess` that takes an array
//  and a number as arguments and returns all numbers that are greater
//  the number argument.
//
// getAllGreaterThan(5, [1,2,3,4,5,6,7,8])
//   => [6,7,8]
//
// getAllGreaterThan(10, [10,12,30,4,2,16,7,88])
//   => [12,30,16,88]
//
//
// getAllGreaterThan(100, [10,12,30,4,2,16,7,88])
//   => []
//
//------------------------------------------------------------------

function getAllGreaterThan(number, list) {
    newList = [];
    for (let i = 0; i < list.length; i++) {
        if (list[i] > number){
            newList.push(list[i]);
        }
    }
    return newList;
}

// *** DONT TOUCH ***

var outputArray_1 = getAllGreaterThan(5, [1,2,3,4,5,6,7,8])
console.assert(outputArray_1.length === 3 )
console.assert(outputArray_1[0] === 6)
console.assert(outputArray_1[1] === 7)



var exampleArray_2 = [10,12,30,4,2,16,7,88]
var outputArray_2 = getAllGreaterThan(10, exampleArray_2 )
console.assert(outputArray_2.length === 4 )
console.assert(outputArray_2[0] === 12)
console.assert(outputArray_2[1] === 30)
console.assert(outputArray_2[3] === 88)


var exampleArray_3 = [10,12,30,4,2,16,7,88]
let outputArray_3= getAllGreaterThan(100, exampleArray_3 )
console.assert(outputArray_3.length === 0 )

