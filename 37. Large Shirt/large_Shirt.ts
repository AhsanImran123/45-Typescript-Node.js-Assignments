
function makeShirt(size: string = 'large', text: string = ' I Love Typescript'): void {
    console.log(` You have a order a ${size}, shirt that says $(text)`)
}

makeShirt();
makeShirt(`medium`)

makeShirt('small', 'i need a big shirt to wear')