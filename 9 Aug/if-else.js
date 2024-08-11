// if-else
//syntax:
//if(condition){
//   //code to be executed if condition is true
// } else {
//   //code to be executed if condition is true
// }

//  let age=1;
//  if(age>=18){
//     console.log("You can vote");
//  }else{
//     console.log("You can't vote");
//  }
//  let n=50;
// if(n>100){
//     console.log("n is greater than 50");
//     } else {
//         console.log("n is less than 50");
//  }

// let n=2023;
// if(n%4==0 && n%100!=0 || n%400==0){
//     console.log("leap year");
// }
// else{
//     console.log("not a leap year");
// }

// find the types of triangle
// let a;
// let b;
// let c;
// if (a == b && b == c) {
//   console.log("equilateral triangle");
// } else if (a == b || b == c || a == c) {
//   console.log("isosceles triangle");
// } else if (a != b && b != c && a != c) {
//   console.log("scalene triangle");
// } else if (a == b && b != c) {
//   console.log("right triangle");
// } else if (
//   a ** 2 + b ** 2 == c ** 2 ||
//   b ** 2 + c ** 2 == a ** 2 ||
//   a ** 2 + c ** 2 == b ** 2
// ) {
//   console.log("right angle triangle");
// } else if (a == 0 || b == 0 || c == 0) {
//   console.log("invalid triangle because of side cant be 0");
// } else {
//   console.log("invalid triangle");
// }







let MIL=20;
let CPL=3.12;
let WIL=MIL/4;
let Total_milk=MIL+WIL;
let actual_cost_price=MIL*CPL;
let actual_sale_price=Total_milk*4.75
let profit=actual_sale_price-actual_cost_price;
console.log("cp:"+actual_cost_price+"Rs");
console.log("sp:"+actual_sale_price+"Rs");
console.log("profit:"+profit+"Rs");
console.log("Milk:"+Total_milk+"Liter");
