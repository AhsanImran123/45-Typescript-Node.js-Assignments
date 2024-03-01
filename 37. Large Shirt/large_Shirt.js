"use strict";
function makeShirt(size = 'large', text = ' I Love Typescript') {
    console.log(` You have a order a ${size}, shirt that says $(text)`);
}
makeShirt();
makeShirt(`medium`);
makeShirt('small', 'i need a big shirt to wear');
