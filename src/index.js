import {loadContent} from "./content_home.js";
import {menuContent} from "./content_menu.js";
import {contactContent} from "./content_contact.js";

loadContent();

const home = document.getElementById("home");
const menu = document.getElementById("menu");
const contact = document.getElementById("contact");

home.addEventListener("click", loadContent);
menu.addEventListener("click", menuContent);
contact.addEventListener("click", contactContent);

