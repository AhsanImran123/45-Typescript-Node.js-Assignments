"use strict";
let current_users = ["admin", "eric", "ali", "hamza", "fatima"];
let new_users = ["admin", "fatima", "aliza", "haseeb", "Ahsan"];
let current_users_lower = current_users.map(user => user.tolowerCase());
for (let new_user of new_users) {
    if (current_users_lower.includes(new_user.tolowerCase())) {
        console.log(`Sorry $(new_user), that name is taken`);
    }
    else {
        console.log(`Yes $(new_user), is still in available list`);
    }
}
