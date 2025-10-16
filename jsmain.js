/*function double(num)
{
    return num*2;
}
let arr=[2,3,4,5,6];
let doubledArray=arr.map(double);
console.log(doubledArray);
const tripledArray=arr.map((n)=>n*3);
console.log(tripledArray);
         

function oddoreven(n)
{
    if(n%2==0)
    {
        return true;
    } else 
    {
        return false;
    }
}
let ar=[2,3,4,5,6,7];
let oddoe=arr.map(oddoreven);console.log(oddoe);


function idOdd(nn)
{
    return nn%2!=0;
} 
let aa=[1,2,3,4,5,6,7,8,9,0];
let odd=aa.filter(idOdd);
console.log(odd);


function five(va)
{
    return va%5==0;
}
let bhu=[13,15,20,35,27];
let res=bhu.filter(five);
console.log(res);


let ab=[1,2,3,4,5];
let m=ab.reduce((product,current)=>{
    return product*current
},1);
console.log(sum);


let bhava=[1,2,3,4];
let resul=bhava.map((n)=>n*3);
console.log(resul);

 function eveno(number)
 {   
       return number%2==0;
 }
let r=resul.filter(eveno);
console.log(r);


let sum=r.reduce((first,secondContinue)=>{
    return first*secondContinue;
});
console.log(sum);


//rest of elemnt //
let a=[1,2,3,4,5];
const[one,...two]=a;
console.log(two);

//spread operator//
let nb=[0,...a,6,7];
console.log(nb);



const promise=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        const success=true;
        if(success)
        {
            console.log('resolved successfully');
        } else 
        {
            console.log('rejected');
        }
    },2000);
})

console.log("Before");
promise.then((result)=>{console.log(result)})
.catch((Error)=>{console.log(err)})

console.log("after");

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))

      fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then((response)=> { return response.json()})
      .then((data) => {console.log(user.name)})


async function fetchApi()
{
    try{
        const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
        const data=await response.json();
        data.map((user)=>
        {
            console.log(user.name)
        })
    } catch (error) {
          console.log(error);
    }
} 
fetchApi(); 


let name='asdf'
let age=24
console.log(`I am ${name} and my age is ${age}`); */

const mul=(a,b)=>
{
    return a*b;
}
const squ=(n)=>
{
    return mul(n,n);
}
const print=(n)=>
{
    let s=squ(n);
    console.log(n);
}
print(4);



