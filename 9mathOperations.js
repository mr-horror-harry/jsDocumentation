let x = -10
x = -x // unary

console.log(x)

let y = 5
console.log(x-y) // binary

console.log(x**y) // exponent in js

console.log(16**(1/4))  // nth root

let name = "Harry"
console.log("Hi " + name + "!") // string concat over addition (precedence)
console.log("1" + 2)
console.log(1 + "2")

console.log(2 + 2 + '1')    // left to right associativity
console.log(2 + "2" + 1)    
console.log('2' + 2 + 1)    // FCFS typecast

console.log(+10 + " " + (+-1)) // No error

console.log(+true, -true, +false, -false, +"", -"", +null, -null, +NaN, -NaN) //unary implicit typecast

let a = 4 + (b = 10**2) // right to left
console.log(a, b) 

a=1
let tmp = a++   // post increment
console.log(tmp)

a=1
tmp = ++a       // pre increment
console.log(tmp)

let val = (1+2, 3+4) // latest operation data
console.log(val);