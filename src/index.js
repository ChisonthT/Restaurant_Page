import {loadContent} from "./content_home.js";
import {menuContent} from "./content_menu.js";
import {contactContent} from "./content_contact.js";


const home = document.getElementById("home");
const menu = document.getElementById("menu");
const contact = document.getElementById("contact");

function resetPage(){
    // Remove existing content
    const content = document.getElementById("content");
    content.remove();

    // Create new content
    const container = document.createElement("div");
    container.id = "content";
    container.style.backgroundColor = "lightgray";
    container.style.opacity = "0.8";
    container.style.padding = "60px";
    container.style.borderRadius = "10px";

    document.body.appendChild(container);
}

home.addEventListener("click", function (){
    resetPage();
    loadContent();
});
menu.addEventListener("click", function (){
    resetPage();
    menuContent();
});
contact.addEventListener("click", function(){
    resetPage();
    contactContent();
});

const header = document.querySelector("header");
header.style.position = "fixed";
header.style.top = "0";
header.style.width = "100%";
header.style.zIndex = "1";
header.style.padding = "10px";
header.style.display = "flex"; 
header.style.justifyContent = "space-between";
header.style.alignItems = "center";
header.style.justifyContent = "center";

document.querySelectorAll("button").forEach(button => {
    button.style.backgroundColor = "lightgray";
    button.style.color = "black";
    button.style.padding = "20px 20px";
    button.style.borderRadius = "10px";
    button.style.fontSize = "20px";
});

resetPage();
loadContent();