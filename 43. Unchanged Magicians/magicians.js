"use strict";
function make_great(magicians) {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' the great';
    }
}
const magicians2 = ["usman", "haseeb", "wajahat"];
// make_great(magicians2)
// show_magicians(magicians2)
function make_great2(magicians) {
    const greatMagicians = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] = ' the Great');
    }
    return greatMagicians;
}
const magicians3 = ["usman", "haseeb", "wajahat"];
const greatMagicians2 = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);
