1. 
let x={
a:1,
b:2
}

console.log(Object.entries(x));//[["a", 1], ["b", 2]]
console.log(Object.values(x)) //[1, 2

2.
let x ='hi'
let y = "ih"

console.log(x.split('').reverse().join('')) //ih

3.
let obj={
    a:1,
    b:2,
    getA(){
         console.log(this.a)
         return this;
    },
    getB(){
          console.log(this.b)
    },
    }
    obj.getA().getB() // 1,2
    

3.
if (!Array.prototype.print) {
  Array.prototype.print = function() {

    console.log(this.join(',', )) //"1,2,3,5"


  }
}
[1, 2, 3, 5].print() // 1,2



4.
const a= function(x){
    this.x = x;
    a.prototype = {
    getX(){
            return this.x
            }
            }
    }

    const b= function(x,y){
    this.y = y;
    a.call(this,x);

      getY(){
          return this.y;

    }
    
    }
    

    const newb= new b('x',y)

    console.log(newb.getY())
    newb.getX()


   5.  
const obj = {
  a: {
    b: {
      c: 1
    }
  }
}

6.

const clone = JSON.parse(JSON.stringify(obj))
clone.a.b.c = 2;
console.log(clone.a.b.c) //2
console.log(obj.a.b.c) //1
// 
// 
// "7+1"
// "4+5"
// "9+0"
// "3+0"
// "8+1"
// "0+7"
// "9+0"
// "7+2"
// "7+0"
// "7+0"
function que() {

  let first = Math.floor(Math.random() * Math.floor(10));
  let sec = Math.floor(Math.random() * Math.floor(10 - first));

  console.log(`${first}+${sec}`);

}
for (let i = 0; i < 10; i++) {
  que();
}



let profile = {
  name: "samarth",
  age: 26,
  kids: [{
    name: "samvith",
    age: 01,
    kids: [{
      name: "sam",
      age: 03
    }, {
      name: "srinindi",
      age: 4
    }]
  }]
}
const addMemberAge = ({ age, kids = [] }) =>
    [age]
      .concat(...kids.map(addMemberAge))
      .reduce((accumulator, currentValue) => accumulator + currentValue);
      
      console.log(addMemberAge(profile))//34


const n = 12521;
const isPalindrome = (x) => {
  if (x < 0) return false;
  let reversed = 0;
  let y = x;
  while (y > 0) {
  debugger
    const lastDigit = y % 10;
    reversed = (reversed * 10) + lastDigit;
    y = (y / 10) | 0
  }
  return x == reversed
}
console.log(isPalindrome(n))//true


//function returns total no of arguments
//dont use loops
let x = function() {
  return [].slice.call(arguments).length;
}
 
console.log(x(1, 2, 3)) //3


var A =  {
  x: function() {
    console.log('x')
    return A;
  },
  y: function() {
    console.log('y')
    return A; 
   
  },
  z: function() {
    console.log('z')

  }
}

A.x().y().z() //X,Y,Z

var A =  {
  x: function() {
    console.log('x')
    return this;
  },
  y: function() {
    console.log('y')
    return this; 
   
  },
  z: function() {
    console.log('z')

  }
}

//remove duplicates from an array
A.x().y().z() //X,Y,Z

let nums = [1,2,3,2]
console.log(...new Set(nums)) //1,2,3 

//i can restrict adding new properties or modify existing properties on an object using Object.freeze()
let profile={
 name:"techsith"
}
Object.freeze(profile)
profile.name ='sathya'

console.log(profile) // techsith


let profile = {
  name: "techsith"
}
Object.freeze(profile)
profile.age = 27

console.log(profile)

/* outuput: {
  name: "techsith"
}
 */
 
 //we can   able to modify the existing property and prevent adding new properties to the object using seal method
 let profile = {
  name: "techsith"
}
Object.seal(profile)
profile.name = 'sathya'
profile.age = 24

console.log(profile)
/* output"
{
  name: "sathya"
} */


// i want to modify age but not name
 let profile = {
  name: "techsith"
}

Object.defineProperty(profile,'age',{
 value:3,
 writable:false
})
profile.name = 'sathya'
profile.age = 5;
console.log(profile) 
/* otput :
{name: "sathya", age: 3} */

//Algorithm Is given Number Prime?
// prime no is a no it can have only 2 factor,itself and anothe devidable no
// except 2, all other even no are not a prime no


//0,1 NOT PRIME
//2 is a prime ann all other even no are not prime

 let isPrime = (n) => {
  if (n === 2) {
    return false;
  }

  if (!Number.isInteger(n) || n < 2 || !(n % 2)) {
    return false;
  }
  for (let i = 3; i <= Math.sqrt(n); i++, i++)
    if (n % i === 0) {
      return false;
    }
  return true;
}

for (let i = 0; i < 30; i++) {
  if (isPrime(i)) {
    console.log(i) //3,5,7,1,3,17,19,23,29
  }
}

/* console.log(isPrime(10021)) //false */

//Remove duplicates from array in Javascript 
1. ()
let a = [1, 2, 5, 2, 8, 1]
let b = []
let len = a.length;
for (let i = 0; i < len; i++) {
  if (b.indexOf(a[i]) === -1) {
    b.push(a[i])
  }

}
console.log(b) //[1, 2, 5, 8]
/* indexof, usally indexof if it cant find it it returns -1 */
2.
/* if u want to sort the array before removing duplicates */
let a = [1, 2, 5, 2, 8, 1]
let b = []
a.sort();
let len = a.length;
let _temp;
for (let i = 0; i < len; i++) {
  if(a[i] !==_temp){
   b.push(a[i])
   _temp = a[i];
  }

}
console.log(b) //[1, 2, 5, 8]
3.
/* if u want to sort the array before removing duplicates */
/* because key is always unique it wont store anthing duplicate, it atomaticslly store unique key */
let a = [1, 2, 5, 2, 8, 1]
let obj = {}
for (let key of a) {
  obj[key] = true // i am setting key to  the value of an arry                      value of bject is always true
}
let b = Object.keys(obj)
console.log(b) //["1", "2", "5", "8"]
 
 3.
 //set stores unique value in object format
 let a = [1, 2, 5, 2, 8, 1]
 console.log([...new Set(a)]) //[1, 2, 5, 8]
 
 1.
 //How to copy an Array ?
 1*
 let arr = [3, 4, 3];
let b = []
for (let i = 0; i < arr.length; i++) {
  b.push(arr[i])
}
console.log(b) //[3, 4, 3]
2*
let arr = [3, 4, 3];
let shallowCopy = arr.slice(arr)
console.log(shallowCopy) //[3, 4, 3]
3*
let arr = [3, 4, 3];
let b = Object.assign([],arr)
console.log(b) //[3, 4, 3]
4*
let arr = [3, 4, 3];
let b = [...arr]
console.log(b) //[3, 4, 3]



//Reverse each word in string without changing word order [duplicate]
function wordsReverser(string){
    return string.split('').reverse().join('');
  }
  console.log(wordsReverser('New string, same results.'));//weN ,gnirts emas .stluser
  
   or 
   var string = "Welcome to this Javascript Guide!";

// Output becomes !ediuG tpircsavaJ siht ot emocleW
var reverseEntireSentence = reverseBySeparator(string, "");

// Output becomes emocleW ot siht tpircsavaJ !ediuG
var reverseEachWord = reverseBySeparator(reverseEntireSentence, " ");

function reverseBySeparator(string, separator) {
  return string.split(separator).reverse().join(separator);
}

fibonacci series
let i;
let fib = []
for (i = 0; i < 10; i++) {
  if (i == 0 || i == 1) {
    fib[i] = i
  } else {
    fib[i] = fib[i - 1] + fib[i - 2]
  }
  console.log(fib[i]) // 0,1,1,2,3,5,8,13,21,34
}



<div class="radio-toolbar">
    <input type="radio" id="radioApple" name="radioFruit" value="apple" checked>
    <label for="radioApple">Apple</label>

    <input type="radio" id="radioBanana" name="radioFruit" value="banana">
    <label for="radioBanana">Banana</label>

    <input type="radio" id="radioOrange" name="radioFruit" value="orange">
    <label for="radioOrange">Orange</label> 
</div>
<p>&nbsp;</p>

//
.radio-toolbar{
margin:10px;
}
.radio-toolbar input[type="radio"]{
  position:fixed;
  width:0px;
  opacity:0;
}

.radio-toolbar label{
  display: inline-block;
  border:2px solid green;
  padding:10px 20px;
  border-radius:4px
}
.radio-toolbar label:hover{
  background-color:red
}
.radio-toolbar input[type="radio"]:focus +label{
  background:blue
  
}
.radio-toolbar input[type="radio"]:checked +label{
  border-color:red;
  background-color:yellow;
}

