import "./styles.css";
import { sampleHomePage } from "./home.js";
import {createMenu } from "./menu.js";
import { aboutPage } from "./about.js";
import { basicContact } from "./contact.js";

console.log("howdy world");

sampleHomePage();

let header = document.querySelector("#header-nav");
let mainDiv = document.getElementById("content");

header.addEventListener( "click", (event) => { 
    let target = event.target;
    mainDiv.textContent = '';

    let buttons = document.querySelectorAll("button");

    buttons.forEach(button => { 
        button.style.background = '';
    })



    target.style.background = '#D9DFC6';

    switch (target.id) { 
        case 'home': 
            sampleHomePage();
        
        break;
        case 'menu': 
            createMenu();
        break;
        case 'about': 
            aboutPage();
        break;
        case 'contact': 
            basicContact();
        break;

    }
})
// sampleHomePage();

// createMenu();

// aboutPage();

// basicContact();

