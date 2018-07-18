//------------------------------------------------------------------
// TASK : hasQ()
//   Write a function called hasQ that accepts a string and returns true/false
//   for whether that string has the word 'q' in it.

//   NOTE: You must build the function so that it can detect capital letters
//------------------------------------------------------------------

function hasQ(text) {
    text = text.toLowerCase();
    let flag = false;
    for (let i = 0; i < text.length; i++) {
        if (text.charAt(i)==='q') {
            flag=true;            
        }
    }
    return flag;
}

var output1 = hasQ("my mother enjoys quilting.")
var output2 = hasQ("i'm not wearing any socks.")
var output3 = hasQ("Quit yelling in my ear.")
var output4 = hasQ("I went to a quarry to pick up some stone slabs.")
var output5 = hasQ("My brain is made of cheese and my knees are jelly")
var output6 = hasQ("My best friend's name is Quincy.")

console.assert(output1 === true )
console.assert(output2 === false )
console.assert(output3 === true)
console.assert(output4 === true)
console.assert(output5 === false)
console.assert(output6 === true)