import homeImage from './images/michael-moloney-V5PpzcX9Nlw-unsplash.jpg';
export function sampleHomePage() { 

const mainContent = document.getElementById("content");
let div = document.createElement("div");

div.textContent = "Good food made simple";
div.id = "slogan";
mainContent.appendChild(div);

let img = document.createElement("img");
img.src = homeImage;
img.alt = "tables-and-chairs-in-restaurant";

mainContent.appendChild(img);

console.log("TESTING 1234");

}



