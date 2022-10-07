// interfaces
interface IsPerson {
    name:string;
    age: number;
    speak(a:string):void;
    spend(a:number) : number;
}

const me:IsPerson = {
    name:'nitin',
    age:2,
    speak(text:string):void{
        console.log(text)
    },
    spend(amount:number):number{
        return amount
    },
    
}


console.log(me);




// classes

import {Invoice} from './classes/Invoice'

const invOne = new Invoice("mario","work on the website",250);
const invTwo = new Invoice("luigo","work on the website",300);

console.log(invOne,invTwo)
let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);
