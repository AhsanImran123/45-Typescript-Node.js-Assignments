function make_great(magicians: string[]): void {
    for (let i = 0; i < magicians.length; i++) {
        magicians[i] = magicians[i] + ' the great' 
}
}


const magicians2: string[] = ["usman", "haseeb", "wajahat"]
// make_great(magicians2)
// show_magicians(magicians2)





function make_great2(magicians: string[]): string[] {
    const greatMagicians: string[] = [];
    for (let i = 0; i < magicians.length; i++) {
        greatMagicians.push(magicians[i] = ' the Great'); 
    }
    return greatMagicians;
}

const magicians3: string[] = ["usman", "haseeb", "wajahat"];


const greatMagicians2: string[] = make_great2(magicians3);
show_magicians(magicians3);
show_magicians(greatMagicians2);