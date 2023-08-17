// conditionals: true/false
let x           // null
if(x==1)        // false
    console.log(1)

if('')          // Boolean(null / 0 / '') == false
    console.log("hi");


x = 1=='1'
if(x){         
    console.log("Over Over");
}

if(!x)          // NOT Operator
    console.log("Hi");
else
    console.log("Oops")


if(0)
    console.log("Hey")
else if(0==1)
    console.log("Hi")
else
    console.log("Nothing")


// Ternary

x=1
y=10
x==y ? console.log("Equal") : x>y ? console.log("Greater") : console.log("Lesser")
x=10
y=1
console.log(x==y ? "Equal" : x>y ? "Greater" : "Lesser")

//Tricky
if("0"){
    console.log("Non empty string! => not null")
}