// let person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 50,
//     eyeColor: "blue",
//   };

//   let stringy = JSON.stringify(person);

//   localStorage.setItem("person1", stringy);

//   console.log(stringy);

// function runForLoop(def){
//   //for (let i = 0; i <= 10; i++){
//     return function(rec){
//       console.log(def+rec);
//     }
//   //}
// }
// let loopvar = runForLoop(10);
// loopvar(20);
//console.log(loopvar);

// let mathVar = Math.random();
// // let calulateMath = Math.round(mathVar);
// console.log(mathVar);
// let calulateMath = Math.floor(mathVar);
// console.log(calulateMath);

const myBirthday = new Date(2023, 7, 24);
// console.log(myBirthday.getTime());
const date = new Date();

let dateDiff = myBirthday.getTime() - date.getTime();

console.log(dateDiff);