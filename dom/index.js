// var a=prompt("what is your age");
// if(a>18){
//     var b=prompt("you are an adult");
//     alert("hello ! "+b+" , your are a adult");
// }
// else
// {
// alert("you are a minor");
// }
// console.log("this is a simple console.log()")


// redeclaration  
// var a=10;    work   function/global
// var a=12;
// console.log(a)

// let b=10;  don't work with let  block
// let b=1;
// console.log(d)

// const x=13; don't work with const  block
// const x=12;
// console

// ReinitiLITION

// var d=7;     work
// d=10;
// console.log(d);

// let f=true;   work
// f="hello";
// console.log(f);

// const pi=3.14; don't work 
// pi=3;
// console.log(pi);

// //Scope
// //Global Scope -> var
// var a=10;

// function display(){
//     console.log(a);
// }
// display();// can access global variable var a inside the function
// {
//     console.log(a); // can access global variable var a inside the block as well.
// }
// {
//     let b=8;//block scope
// const pi=12;//block scope
// console.log(pi);
// }
// const pi=3.14159;
// console.log(pi);

// console.log(b);

// objects 
// var student={name:"pragya",age:19,sec:"a"};
// console.log(student["name"]);
// console.log(student);
// student.sec="p";
// console.log(student);

// function
// function sum(a,b){
//     console.log(a+b);
// }
// sum(2,3);

// question
function calculate(){
  let n1 = Number(document.getElementById("num1").value);
  let n2 = Number(document.getElementById("num2").value);
  let n3 = Number(document.getElementById("num3").value);
  let n4 = Number(document.getElementById("num4").value);
  if(n4==1){
    const sum = n1 + n2 + n3;
    document.getElementById("result").innerText = "Result: " + sum;
  }
  else if(n4==2) {
    const mul = n1 * n2 * n3;
    document.getElementById("result").innerText = "Result: " + mul;
  } 
  else if(n4==3) {
    const div = n1 / n2 / n3;
    document.getElementById("result").innerText = "Result: " + div;
  }
  else if(n4==4) {
    const sub = n1 - n2 - n3;
    document.getElementById("result").innerText = "Result: " + sub;
  }
  else{
    document.getElementById("result").innerText = "error";
  }

}
