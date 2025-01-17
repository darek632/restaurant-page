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


    if(!target.matches("button")) {
        return;
    }

    
    mainDiv.textContent = '';

    let buttons = document.querySelectorAll("button");


    buttons.forEach(button => { 
        button.style.background = '';
    })



   

    switch (target.id) { 
        case 'home': 
            sampleHomePage();
            target.style.background = '#D9DFC6';
        
        break;
        case 'menu': 
            createMenu();
            target.style.background = '#D9DFC6';
        break;
        case 'about': 
            aboutPage();
            target.style.background = '#D9DFC6';
        break;
        case 'contact': 
            basicContact();
            target.style.background = '#D9DFC6';
        break;

    }
})
// sampleHomePage();

// createMenu();

// aboutPage();

// basicContact();

