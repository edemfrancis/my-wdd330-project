import { openPop} from "./pops.mjs";
import { displayToReadList } from "./pops.mjs";


const div2 = document.querySelector(".div2");

// function for looping through each of the json() file
export function displayBookImg(datas, div2){
    datas.forEach(data => {
        // create a section element
        const card = document.createElement("section");
        card.classList.add("card");

        const sectDiv = document.createElement("div");
        sectDiv.classList.add("secdiv")

        const bookName = document.createElement("h3");
        const bookImage = document.createElement("img");
        const button = document.createElement("button");

        bookName.textContent = `${data.volumeInfo.title}`;
        bookImage.setAttribute("src", data.volumeInfo.imageLinks.thumbnail);
        bookImage.setAttribute("alt", data.volumeInfo.authors);
        bookImage.setAttribute("loading", "lazy");
        bookImage.setAttribute("width", "400px");
        bookImage.setAttribute("height", "400");

        // ancor.setAttribute("href", data.volumeInfo.canonicaVolumeLink);
        button.setAttribute("type", "button");
        // ancor.setAttribute("target", "_blank")
        button.classList.add("onclick");
        button.id="openPopup";

        // button.textContent = "Button";
        card.appendChild(bookImage)
        card.appendChild(bookName);
        sectDiv.append(card)
        // sectDiv.append(button);

        div2.append(sectDiv);

        // creating a display element to my reader.html page
        
    })
    
    // document.querySelector(".onclick").addEventListener("click", () => {
    //     openPop(popup);
    // })
}
    
// function for fetching api and displaying it 
// export async function fetchBookApi(params, readCard, bookApiUrl="https://www.googleapis.com/books/v1/volumes?q=", apikey="AIzaSyBUSmJZlDqmLsLzOYspgOBvZp36lQxumm4") {
//     const response = await fetch(bookApiUrl + params + `&key=${apikey}`);

//     if (response.status == 404){
//         document.querySelector(".error").style.display = "block";
//         document.querySelector(".div2").style.display = "none";
//     } else {
//         div2.innerHTML = "";
//         const data = await response.json();
//         displayBookImg(data.items, div2);
//         displayToReadList(params, readCard)
//         console.log(data.items);
//         document.querySelector(".error").style.display = "none";
//     }

// }
export async function fetchBookApi(params, bookApiUrl="https://www.googleapis.com/books/v1/volumes?q=", apikey="AIzaSyBUSmJZlDqmLsLzOYspgOBvZp36lQxumm4") {
    const response = await fetch(bookApiUrl + params + `&key=${apikey}`);
    if (response.status === 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".div2").style.display = "none";
    } else {
        document.querySelector(".div2").innerHTML = "";
        const data = await response.json();
        displayBookImg(data.items, div2);
        console.log(data.items);

        // Create a downloadable JSON file
        const blob = new Blob([JSON.stringify(data.items, null, 2)], { type: 'application/json' });
        const url = URL.createObjectURL(blob);
        const downloadLink = document.createElement('a');
        downloadLink.href = url;
        downloadLink.download = 'books.json';
        downloadLink.textContent = 'Download Book Data';
        document.body.appendChild(downloadLink);

        document.querySelector(".error").style.display = "none";
        return downloadLink;
    }
}  