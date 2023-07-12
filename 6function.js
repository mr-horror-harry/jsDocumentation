let user = 'Harry'

// Parameterised Function 
function output1(name){
    console.log(`Hello ${name}!`)
}
output1(user);                      // Function call



// Function as variable
const x = function(){
    console.log("Im a stored function!")
}
x();                                // Function call



// Arrow Function
const output2 = (name) => {
    console.log(`Hello ${name}!`)
}
output2(user);                      // Function call



// Self invoking function
(() => {
    console.log("Im auto invoked!")
})();



// Callback function
setTimeout(() => {
    console.log("I'm called back! after 2secs")
}, 2000);



// Anonymous function: Unreferenced/Unstored/Unnamed/Runtime Function
let ar=[1, 2, 3, 4, 5]
ar.forEach( (val) => {
    process.stdout.write(val+" ")
})
console.log()



// Function as arguement
const tmpFunc = ()=>{
    console.log("Function as arguement!")
}
setTimeout(tmpFunc, 2000)


console.log("Type of tmpFunc: ", typeof tmpFunc)
