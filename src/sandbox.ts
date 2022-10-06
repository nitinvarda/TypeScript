// classes

class Invoice {
    // readonly client:string;
    // private details:string;
    // public amount:number;

    constructor(
        readonly client:string,
    private details:string,
    public amount:number,
        ){
    
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
