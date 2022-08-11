/* eslint-disable no-console */
// Javascritp Data Types

/********** Javascript Types ***********/

let a;                  // undefined
console.log('a : ' + typeof a);

let b = true;           // boolean
console.log('b : '+ typeof b);

let c = 1;              // number
console.log('c : ' +typeof c);

let d = "hello";        // string
console.log('d : ' +typeof d);

let e = 100n;           // big int (starting ES2020)
console.log('e : ' +typeof e)

let f = Symbol("Sym");  // symbol  (starting ES2015)
console.log('f : ' +typeof f);

let g = function () {   // function
  return null;
};
console.log('g : ' +typeof g);

let h = null;           // null ( special primitive )
console.log('h : ' +typeof h);

let i = {};             // Object Literal
console.log('i : ' +typeof i);

let j = [];             // array
console.log('j : ' +typeof j);

class Product {
  // class
  //...
}
let k = new Product();

/********** Why is it call dynamic type / weekly typed ? ***********/

// 1. No Declaration. Type automatically set based on value at runtime
// 2. Re-Assign
let test = 'Fadly';
test = 123
test = [1, 2, 3]
console.log('test : ' +typeof test)

// 3. with dynamic type comes great responsiblity

function sum(a, b){
  // validation
  return a+b;
}

console.log(sum(1,'2'))