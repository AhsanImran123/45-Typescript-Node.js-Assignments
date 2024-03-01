"use strict";
function show_magicians(magicians) {
    for (const magician of magicians) {
        console.log(magician.charAt(0).toUpperCase + magician.slice(1));
    }
}
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[1] = magicians[1] + ' the great';
    }
}
const magicians2 = ["usman", "haseeb", "wajahat"];
make_great(magicians2);
show_magicians(magicians2);
