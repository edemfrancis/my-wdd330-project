import { createElement } from "./utilis";

const myName = createElement("h1", {textContent: "Hello World, Edem Francis"});

document.getElementById("root").appendChild(myName);