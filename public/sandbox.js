const me = {
    name: 'nitin',
    age: 2,
    speak(text) {
        console.log(text);
    },
    spend(amount) {
        return amount;
    },
};
console.log(me);
// classes
import { Invoice } from './classes/Invoice';
const invOne = new Invoice("mario", "work on the website", 250);
const invTwo = new Invoice("luigo", "work on the website", 300);
console.log(invOne, invTwo);
let invoices = [];
invoices.push(invOne);
invoices.push(invTwo);
