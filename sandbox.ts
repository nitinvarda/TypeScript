let agee: any = 25;

agee = true;
console.log(agee);
agee = 'hello';
console.log(agee);
agee= {
    name:'luigi'
};
console.log(agee)

let mixed: any[] = [];

mixed.push(5);
mixed.push('mario');
mixed.push(false);
console.log(mixed);


let ninja1: {name:any,age:any};
ninja1 = {name:'yoshi',age:25};
console.log(ninja1);
ninja1 = { name:25, age:'yoshi'};
console.log(ninja1);