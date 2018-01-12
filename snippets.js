/**** CONST: the immutable variable ***/

const name = "Gideon Graves";

// name = "Wallace Wells" //Throws an Error!


/**** LET: the contexual variable ****/
for (let i = 0; i < 3; i++) {
  let multiple = 2 * i;
  // console.log('Inner', multiple);
  for (let i = 0; i < 3; i++) {
    let multiple = 3 * i; // No errors! WOOT!
    // console.log('Outer', multiple)
  }
}
// console.log(multiple); //Throws an Error!


/**** FAT ARROWS: the intuitive function ****/

const multiplier = (input1, input2) => input2 > input1 ? true : false;

/**** DEFAULT PARAMETERS: the input validator ****/

const someParams = (first, second = false, third = 3) => first + second + third;

/**** REST PARAMETER: the ambigous parameter ****/

// const lotsaParams = (...params) => {
//   let sum = 0;
//   for (let i = 0; i < params.length; i++) {
//     sum += params[i]
//   }
//   return sum;
// }

const lotsaParams = function() {
  let sum = 0;
  for (let i = 0; i < lotsaParams.arguments.length; i++) {
    sum += lotsaParams.arguments[i];
  }
  return sum;
}



/**** SPREAD OPERATOR: the intuitive array appender ****/
// let arr = [1,3,5]
// arr = arr.concat[4,6,8];
//[1,3,5,4,6,8]

//concat'ing
let spreader1 = (words) => {
  let output = ['Hi', 'my', 'name', 'is'];
  output.push(...words);
  return output;
}
//splice'ing
let spreader2 = (words) => {
  let output = ['Hi', 'my', ...words, 'is']
  return output;
}
//copying
let spreader3 = (words) => {
  let newArr = [...words];
  return newArr;
  //Not very different from splicing, but useful in different ways
}

//destructuring
let { x, y, ...z } = { x: 1, y: 2, a: 3, b: 4 };
// console.log(x); // 1
// console.log(y); // 2
// console.log(z); // { a: 3, b: 4 }


/**** STRING INTERPOLATION: the inline lifesaver ****/
let myName = "Steven Stills";
let yourName = "Julie"
let myIntro = `Hello, ${yourName}, they call me ${myName}`;
// console.log(myIntro);

/**** FOR...OF LOOPS: the forceful iterator ****/
for (let char of 'Kim Pine') {
  // console.log(char);
}

let tuplesArray = [[10, 12], [9, 11], [5, 4]]

for (let [value1, value2] of tuplesArray) {
  // console.log(value2);
}



