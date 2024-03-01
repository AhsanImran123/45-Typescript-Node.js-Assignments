"use strict";
function sandwich(...items) {
    console.log("sandwich order:");
}
for (let i = 0; i < items.length; i++) {
    console.log(` - $(items[i])`);
}
console.log("Enjoy your sandwich Ahsan Imran");
sandwich('capcicum', 'Tomato', 'chicken');
sandwich('beef', 'cheese');
sandwich('garlic chicken', 'mayo sauce');
