// explicit types
let character:string;
let age:number;
let isLoggedIn:boolean;

// age = 'luigi';
age = 30;

isLoggedIn = false;


// arrays
let ninjas: string[] = [];

ninjas.push('shaun');

// union types
let mixede: (string|number)[] = [];

// objects
let ninjaOne:object;

ninjaOne = {name:'yoshi',age:30};

let ninjaTwo :{
    name:string,
    age:number,
    beltColor:string
}

ninjaTwo= {name:'shaun',age:30,beltColor:'black'}