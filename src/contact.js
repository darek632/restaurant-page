export function basicContact() { 
    let mainDiv = document.getElementById("content");
    let contactHeader = document.createElement("h1");
    let contactCard = document.createElement("div");
    let phone = document.createElement("div");
    let email = document.createElement("div");

    contactHeader.textContent = "CONTACT";
    contactHeader.id = "contact-header";
    
    contactCard.textContent = "Say Hello!";
    phone.textContent = "+44(0)7517277177";
    email.textContent = "darrysdeli@gmail.com";

    contactCard.classList.add("contact-card");

    contactCard.appendChild(phone);
    contactCard.appendChild(email);

    mainDiv.appendChild(contactHeader);
    mainDiv.appendChild(contactCard);

}