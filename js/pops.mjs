export function openPop(popup){
    popup.classList.add("open-popup");
    setTimeout(() => {
           popup.remove();
        }, 1000);
}

// export default onclick(click, popup) {
//     click.addEventListener("click", () => {
        
//     })
// }

export function displayToReadList(datas, div2){
    datas.forEach(data => {
        // create a section element
        const sectionCard = document.createElement("section");
        sectionCard.classList.add("readCard");

        const sectDiv = document.createElement("div");
        sectDiv.classList.add("readDiv");

        const bookName = document.createElement("h3");
        const bookImage = document.createElement("img");

        bookName.textContent = `${data.volumeInfo.title}`;
        bookImage.setAttribute("src", data.volumeInfo.imageLinks.thumbnail);
        bookImage.setAttribute("alt", data.volumeInfo.authors);
        bookImage.setAttribute("loading", "lazy");
        bookImage.setAttribute("width", "400px");
        bookImage.setAttribute("height", "400");
        // ancor.setAttribute("href", data.volumeInfo.canonicaVolumeLink);
       
        // ancor.setAttribute("target", "_blank")
        sectionCard.appendChild(bookImage);
        sectionCard.appendChild(bookName);
        sectDiv.append(sectionCard);
        div2.append(sectDiv);
        // creating a display element to my reader.html page
    })
    // document.querySelector(".onclick").addEventListener("click", () => {
    //     openPop(popup);
    // })
}