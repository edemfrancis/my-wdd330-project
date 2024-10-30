import { displayBookImg } from "./utilis.mjs";

const urls = "/json/books.json";
const div = document.querySelector(".recommender");



async function fetchapi(url) {
    const response = await fetch(url);
    if (response.status === 404){

    }
    else {
        const data = await response.json();
        data.forEach(element => {
            console.log(data);
            const sectiondiv = document.createElement("div");
            const sec = document.createElement("section");
            const img = document.createElement("img");
            const h2 = document.createElement("h2");
            const p = document.createElement("p");
            const a = document.createElement("a");

            sec.classList.add("classdiv");

            h2.textContent = element.volumeInfo.title;
            img.setAttribute("src", element.volumeInfo.imageLinks.thumbnail);
            img.setAttribute("alt", element.volumeInfo.authors);
            img.setAttribute("loading", "lazy");
            img.setAttribute("width", "400px");
            img.setAttribute("height", "400px");
            p.textContent = element.volumeInfo.subtitle;
            a.setAttribute("href", element.volumeInfo.infoLink);
            a.setAttribute("target", "_blank");


            a.appendChild(img);
            sec.appendChild(a);
            sec.appendChild(h2);
            sec.appendChild(p);
            sectiondiv.append(sec);
            
            div.append(sectiondiv);
        });
        
    }
}
fetchapi("/json/books2.json");
fetchapi(urls)
fetchapi("/json/books3.json");
fetchapi("/json/books4.json")