// classes

class Invoice {
    client:string;
    details:string;
    amount:number;

    constructor(c:string,d:string,a:number){
        this.client = c;
        this.details = d;
        this.amount = a;
    }

    format(){
        return `${this.client} owes $${this.amount} for ${this.details}`
    }
}

const invOne = new Invoice("mario","work on the website",250);
const invTwo = new Invoice("luigo","work on the website",300);

console.log(invOne,invTwo)
let invoices: Invoice[] = [];
invoices.push(invOne);
invoices.push(invTwo);
