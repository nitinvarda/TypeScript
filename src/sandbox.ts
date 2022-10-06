let greet:Function;

greet= () =>{
    console.log('hello world');
}

const add =(a:number,b:number,c:number|string =10)=>{
    console.log(a+b);
} 
add(5,10,'hello');


const minus =(a:number,b:number):number =>{
    return a-b;
}

let result = minus(10,7);