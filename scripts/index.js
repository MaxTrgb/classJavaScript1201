// let test = "Hi wrld";
// test = "hello w";
// let nameUser, surnameUser, cityUser;
// nameUser = "max";
// console.log(typeof nameUser)

// start point
// document.addEventListener("DOMContentLoaded", ()=>{
//     alert("testing")
// })

// document.addEventListener("DOMContentLoaded", ()=>{
//     let txt = "Lorem bla bla";
//     console.log(
//         txt.toUpperCase()
//     )
// })

// let txt = "Lore BLA bla";
// console.log("lower___", txt.toLowerCase)
// console.log("pp___", txt.toUpperCase)

//let txt = "Lorem iii bla BLA";
// console.log(txt.replace("i","X"));
// console.log(txt.replaceAll("i","X"));

// let txt = "Lorem iii bla BLA";
// console.log("LENGTH", txt.length);
// console.log("LENGTH", txt.replaceAll(" ", '').length);

// let txt = "Lorem iii bla BLA";
// console.log(txt.split(), (" "));

// let txt = "Lorem BLA blay";
// console.log("First char", txt[0]);
// console.log("Last char", txt[txt.length-1]);

// let txt = "Lorem";
// let reversedTxt;
// reversedTxt = txt.split('');
// console.log("reversed:", reversedTxt)

// let userName = "ivan";
// let userFatherName = "Yakovych";
// let userSurname = "Franko";
// let result = userName[0].toUpperCase()+". "+userFatherName[0]+". "+userSurname;
// console.log(result);
// console.log(`${userSurname} ${userName[0].toUpperCase()}. ${userFatherName[0]}.`);

// console.log(2 ** 2);
// console.log(4 % 3);
// console.log(2 > 4);
// console.log("4" == 4);
// console.log("dodtkovo porivnue typ danyh", "4" === 4);

let arr = [1, "test","testing", true, 's', null];
arr.push("test1");
arr.unshift("test2");
console.log(arr);   

arr.pop(); //del last el 
console.log(arr); 
arr.shift(); // delete first el
console.log(arr); 

arr = arr.filter(item => item !== "test");
console.log(arr);

const indexOfTest = arr.indexOf("testing");
if (indexOfTest !== -1) {
  arr.splice(indexOfTest, 1);
}
console.log(arr);