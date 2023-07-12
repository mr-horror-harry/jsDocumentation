// Async in js
// Parallel execution of threads but least time get executed first

console.log("Im first!");

setTimeout(()=>{
    console.log("Im second!")
}, 1000)

setTimeout(() => {
    console.log("Im half way third!");
    setTimeout( () => {
        console.log("Im third!")
    }, 3000)
}, 1000)

console.log("Im fourth!")