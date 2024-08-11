//variable in javascript
// in java script  we can declare same variable multiple times

// var a=4;
// console.log(a)
// console.log(typeof a);

// var b='hello';
// console.log(b);
// console.log(typeof b)

// var a='Bye';
// console.log(a)
// console.log(typeof a);


/*------------------------------------------------------*/
// identifier cannot be declare multiple time but we can use it multiple times

// let x=22;
// console.log(x);
// console.log(typeof x);
// let x;

// error: x has already been declare


/*-------------------------------------------------------------------*/

// const n=28;
// console.log(n);
// console.log(typeof n);

// n=22;
// error constant variable cant not use multiple times


/*----------------------------------------------------------------*/

//scope of variable var,let,const
var x=10;
console.log(x);

var x='namu';
{
    console.log(x);
}
console.log(x);
//--------------------------------
let y=28;
console.log(y);

{
     let y=1;
    console.log(y);
    y='namrata';
    console.log(y);
}
console.log(y);
//--------------------------------

const z=4;
console.log(y);

{
    //  const z=1;
    // error :assignment to  constant variable
    console.log(z);
   //var z='namrata';
       // error :assignment to  constant variable

    console.log(z);
}
console.log(z);