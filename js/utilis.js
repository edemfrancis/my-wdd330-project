// building a function to create an element
export function createElement(type, contents ={}, children=[]){
    const element = document.createElement(type);

    // probs:{textContext: "Helloworld", id:"header1", "data-productId": 123,....}
    Object.entries(contents).forEach(([key, value]) =>{
        if (~key.indexOf("-")){
            element.setAttribute(key, value);  // data attibutes
        } else {
            element[key] = value;
        }
    });

    children.forEach((child) => {
        element.appendchild(child);
    });

    return element
}