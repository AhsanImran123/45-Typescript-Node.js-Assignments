
let users : string [] = ["admin","eric","haseeb","ali","fatima"]

for (let user of users) {
if (user === "admin") {
    console.log("Hello admin, would you like to see a report?")
} else {
    console.log(` Hello ${user}, thank you for logging in again `)
}
}