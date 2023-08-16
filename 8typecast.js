// String to Number typecast
{
    x = "10";
    y = "5";        // default global scope for x & y
}
console.log(x/y);       // implicit typecast
console.log(Number("360")/9);      // explicit typecast

// NaN for typecast --> implicit & explict typecast
console.log("369i"/3)
console.log(Number("369!"))

// Number to String
console.log(typeof (1+""))




// Boolean typecast

console.log(Boolean("அ"))      // true
console.log(Boolean("!"))       // true
console.log(Boolean(1))         // true
console.log(Boolean("0"))       // true
console.log(Boolean())          // false
console.log(Boolean(""))        // false
console.log(Boolean(null))      // false

// Note:
// Except null & ""  & void input Boolean of all other value reads true
// Inverse boolean typecast
console.log(Number(true))
console.log(Number("true"))     // NaN
console.log(Number(false))