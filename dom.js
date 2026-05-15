// let msg=document.getElementById("me");
// let btn=document.getElementsByName("lang")
// return a list of nodes
// let hrad=document.getElementsByTagName("h1");
// return the collection of tag names
// let dad=document.getElementsByClassName("message");
// returns an array-like of object of the child element with a specified class name
// let ddd=document.getElementsByClassName("cont");
// also work on the document or with in the ememnt
// console.log(msg);
// console.log(btn);
// console.log(ddd);

// we use css selectors 
// let mm=document.querySelector(".m");
// // will display the element that matches the given class most and data more and first 
// let mmm=document.querySelectorAll(".m")
// will give nodelist of all three hedings 
// we you this on any element of a classand id 
// we select ("div,h1") and it will print all this 
// console.log(mm);
// console.log(mmm);


// let txt=document.querySelector(".text");
// console.log(txt.parentNode);

// let se1c=document.querySelector(".sec");
// // console.log(txt.firstChild);can print the sapce 
// console.log(se1c.previousElementSibling);

// let div=document.createElement("div");
// div.innerHTML="<p>welcome to my website </p>";
// document.body.appendC hild(div);
// div.id="title";
// div.className="tile"
// console.log(div);

// let munu=document.getElementById("menu");
// let list=document.createElement("li");
// list.innerHTML="content";
// menubar.appendchild(list);

let menu=document.getElementById("menu");
menu.textContent="hello"
console.log(menu.innerText);

