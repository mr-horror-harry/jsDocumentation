// Drawback of plain js
// Dependent request wont wait for the required data and finally is error (Callback dependency)

console.log("Service1 Started!")

fetchData = (email, password) => {
    setTimeout( ()=>{
        console.log("Data is fetched and is ready!")
        return email
    }, 3000)            // Say time to fetch data form DB is 3secs
}

const user = fetchData("hello@gmail.com", "1234567890")
console.log("MailId is: ", user)

console.log("Service1 closed!\n\n\n")



// Instataneous thread execution without any delay

console.log("Service2 started!");

retrieveData = (mail, pass) => {
    return mail
}

const cust = retrieveData("dbservices@gmail.com", "abcdefg")
console.log("MailId is: ", cust)


console.log("Service2 closed!\n\n\n")


// Solution to the error using call back
console.log('Server3 Started!')

const selectData = (mail, pass, callback) => {

    console.log("Data request sent...")
    setTimeout(() => {
        
        callback("Mailid: " + mail)

    }, 2000);
}

const data = selectData("qwerty@gmail.com", "123", ()=>{

})

console.log('Server3 Closed!');

