"use strict";
let Guest_List = ['Imran Khan', 'Nawaz Sharif', 'Asif Ali Zardari'];
// for(let i=0; i<Guest_List.length; i++){
// console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThankYou!')
// }
let absent_Guest = 'Imran Khan';
let new_Guest = 'Kamran Tessori';
Guest_List[0] = new_Guest;
// for (let i=0; i<Guest_List.length; i++) {
//     console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThankYou!\n\n')
// }
console.log(`Mr. ${absent_Guest} is not coming to the party.`);
console.log('Good News! we find Big Table so We are Inviting 3 more Guest.');
Guest_List.unshift('Sir Zia Khan');
Guest_List.splice(2, 0, 'Maryam Nawaz');
Guest_List.push('Bilawal Bhutto Zardari');
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThankYou!\n\n');
}
console.log('\nSorry we CAn Note Arrange Big Table, Only two people will be Invited.');
while (Guest_List.length > 2) {
    let remove_Guest = Guest_List.pop();
    console.log(`Sorry Mr. ${remove_Guest}, You are Not Invited For Dinner.`);
}
for (let i = 0; i < Guest_List.length; i++) {
    console.log('Dear Mr. ' + Guest_List[i] + ',\n\nIt is our pleasure to invite you in our party.\n\nThankYou!\n\n');
}
Guest_List.splice(0, 2);
console.log(Guest_List);
