// import { createElement } from "./utilis";
import {  fetchBookApi} from "./utilis.mjs";
import { displayToReadList } from "./pops.mjs";
// import { openPop } from "./pops.mjs";

// const myName = createElement("h1", {textContent: "Hello World, Edem Francis"});
const bookUrl = "AIzaSyBUSmJZlDqmLsLzOYspgOBvZp36lQxumm4";

// document.getElementById("root").appendChild(myName);

// testing how to fetch book api and display the book images and other datas
// api url and key
const bookApiUrl = "https://www.googleapis.com/books/v1/volumes?q=";
const apikey = "AIzaSyBUSmJZlDqmLsLzOYspgOBvZp36lQxumm4";


const searchbox = document.querySelector(".search input");
const button = document.querySelector(".search button");
// const popup = document.getElementById("popup");

button.addEventListener("click", () => {
    fetchBookApi(searchbox.value);
})

// function closePop(){
//     popup.classList.remove("open-popup");
// }

// document.querySelector(".btn").addEventListener("click", ()=>{
//     closePop()
// })
