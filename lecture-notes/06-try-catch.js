// Error Handling

/*
    Error Handling allows the application to continue to run even if an outside recourse causes an error in our app.
    Error handling is done using:
        - try
            - holds the code that will be tested
        - catch
            - holds code to be executed when error occurs
        - throw
            - allows generating custom errors
        - finally
            - holds code to be executed regardless of the result
*/

let myName = "Connor"
// try { if (myName) {
//         console.log(myName)
//     }
//     // runs because myName returns true
// } finally {
//     console.log("Finally always runs")
// }

// try {
//     if (nonExistent) {
//         console.log(nonExistent)
//     }
// } catch(err) {
//     console.log("Error has occured: " + err.stack)
//     // err.name returns just error name
//     // err.stack returns trace of the errer
//     // Must be used in browser console
// }
// // Rest of the application continues to run

// try {
//     // {
//     // Try Catch only works on Runtime errors. Parsetime (syntax) errors will render try/catch unusable.
//     if (myName) {
//        console.log(myName) 
//     }
// } catch(err) {
//     console.log("Error: " + err)
// } 

let json = '{ "age": 30}'

try {
    let user = JSON.parse(json)
    if (!user.name) {
        throw new SyntaxError("Incomplete Data: No Name")
    }
    console.log(user.name)

} catch(err) {
    console.log("Json Error: " + err.message)
}

console.log("Global scope execution continues")
























