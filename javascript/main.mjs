// Comments
/*
  Comments in
  multiple lines
*/

// Boolens
console.log(2 < 3)
console.log(true && true) // logical and
console.log (false || false) // logical or
console.log (! false) // logical not

//Numbers
console.log("25 * 5 =" , 25 * 5)
console.log("25 / 5 =" , 25 / 5)
console.log("25 + 5 =" , 25 + 5)
console.log("25 - 5 =" , 25 - 5)
onsole.log("5 % 2 =", 5 %  2)
console.log("5 <= 6 =", 6 <= 5)
console.log("6 === 5 =", 6 === 5)
console.log("6 !== 5 =", 6 !== 5)

 //Strings
console.log('abc' + "def")

 //Variables
const pi = 3.14
let n = 5;
console.log("n = " , n)
n = 7
//pi = 5
console.log("n = " , n);
{
  let n = 3;
  console.log("n in scope 2 =" , n)
  }
   console.log("n in global =" , n)

 //function
function add (a , b)
{
        return = a + b;
  }

  const add2 = (a, b) =>
  {
      return = a + b;
  }
  console.log("add(2,3) =" , add(2, 3))


 //Object
let ol = {first: "Jone" , last: "Dowe" , age: 23}
console.log("first ", ol.first, "last " , ol.last)
ol.age = 25

 //List
const l1 = [1 2 3]
console.log("lenght =", l1.lenght , l1[1], l1[1])

 //control flow
 let x1 = 3
 if(x1 < 0)
 {
    console.log('x1 negative')
 }
 else if(x1 === 0)
 {
    console.log('x1 positive')
 }


 //Loops
  //while(test) {}
  for(let i = 0; i < l1.length, i++)
  {
    console.log(l1[i])
  }

  for(const elem of l1)
  {
  console.log(elem)
  }