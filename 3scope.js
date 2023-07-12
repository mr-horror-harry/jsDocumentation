// let var const
"use strict"
// var
var x=10            // declaration
x=50                // reassign
var x=100           // redeclare

let y = 1000        // declaration
y = 97             // reassign
// let y=10            // redeclare --> SyntaxError: Identifier 'y' has already been declared

const z=3         // declaration
// z=10                // reassign --> TypeError: Assignment to constant variable.

console.log(x,y,z)


var outVar = 'I\'m out!'         // global scope
{
    console.log(outVar)
    var inVar = 'I\'m in!'      // though local scope act as global scope --> "var"
    console.log(inVar)
}
console.log(inVar)              // No error

let outLet = 'Outer let!'
{
    console.log(outLet)
    let inLet = 'Inner let!'
    console.log(inLet)
}
// console.log(inLet)          //let outer access --> ReferenceError:  inLet is not defined

const outCon = 'Out Cons!'
{
    console.log(outCon)
    const inCon = 'In cons!'
    console.log(inCon)
}
// console.log(inCon)          // const outer access --> ReferenceError: inCon is not defined

outer = 'Simple out!'
{
    console.log(outer)
    inner = 'Simple In!'        //By Default global scope is assigned --> untill no "use strict" 
    console.log(inner)          
}
console.log(inner)