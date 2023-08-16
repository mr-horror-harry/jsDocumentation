// Note: "typeof": to return the datatype of the variable

// Number datatype -- int, float, long (as implicit objects)
let num = 100
console.log("1) " + num+ " : " + typeof num);
num = 101.15
console.log("2) " + num+" : "+typeof num)

// String datatype
let text="Hello how are you ?"
console.log("3) " + text + " : " + typeof text)

let type1 = "double quotes -- "
let type2 = 'single quotes -- '
let type3 = `back ticks ${text}`        //  Supports data binding on runtime
console.log("4) " + type1 + type2 + type3)   // typeof : string (each)

//Boolean datatype
let t1 = true
let t2 = 1!=0
let t3 = 1=='1'
console.log( "5) " + t1 + " & " + t2 + " & " + t3 + " : " + (typeof 'x'<='y'))


// undefined datatype
let undef               // declared but uninitialised --> memory exists but no value
console.log( "6) " + undef + " : " + typeof undef)

// null datatype
let val = null          // memory with void value
console.log( "7) " + val + " : " + typeof val)

// Note: Both undefined and null seems same but are completely different

let x = 'Hi buds!'
console.log( "8) " + x*5 + " : " + (typeof x/5) )        // x: Not A Number --> datatype

// Note: "+" don't return NaN   ∵('+' supports string concat implicit typecast)

//BigInt datatype
let big1 = 9856312457896325487854254887528765n      // n --> explicit notation
let big2 = 9879269763984630734019843019708713       // datatype --> number
console.log( "9) " + big1 + " : " + typeof big1 + " & " + big2 + " : " + typeof big2)

//Object datatype: {} --> notation of js objects
let numObj=100
console.log("10) " + typeof Math)
console.log(typeof numObj + " " + typeof {numObj})
console.log(typeof null) 