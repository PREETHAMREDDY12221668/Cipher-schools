var x=15;
{
let x=5;
console.log(x);
}
console.log(x);


var y=function(x,y){
    return x+y;
};

const z =(x,y)=>{
    return x+y;
}
const q1=["jan", "Feb", "Mar"];
const q2=[ "Apr", "May", "Jun"];
const q3=[ "Jul", "Aug", "Sep"];
const q4=[ "Oct", "Nov", "Dec"];

const year=[...q1,...q2,...q3,...q4];
console.log(year);  
const muNumber=[25,12,50,77,-1];
let maxvalue=Math.max(...muNumber);
console.log(maxvalue);


const fruits= new Map( [
["apples", 500] ,
["libananasil" ,300] ,
["oranges" ,200],
]);

consolee.log(fruits) ;
console.log(fruits. get ("orange"));
