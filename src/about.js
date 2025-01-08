import  aboutLogo from "./images/darryslogo.png";

export function aboutPage() { 
    let mainDiv = document.getElementById("content");
    let aboutDiv = document.createElement("div");
    let aboutPara = document.createElement("p");
    let basicInfo = document.createElement("p");
    let img = document.createElement("img");

    

    aboutDiv.textContent = "RISING TOGETHER, ONE LOAF AT A TIME." ;
    aboutDiv.id = "slogan";
    aboutPara.textContent = "We make our sourdough from scratch using responsibly sourced grains. Every loaf is a fresh, honest product of quality ingredients and a passion for good bread.";
    basicInfo.textContent= "Based in Peckham, fusing Polish and English baking techniues."

    img.src = aboutLogo;
    img.alt = "darrys-logo-baked-bread";
    img.id = "logo";

 

    mainDiv.appendChild(aboutDiv);
    mainDiv.appendChild(aboutPara);
    mainDiv.appendChild(basicInfo);
    mainDiv.appendChild(img);
}