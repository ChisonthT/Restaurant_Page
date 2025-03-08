import restaurant_img from "./restaurant_interior.jpg";


export function loadContent() {

    // Get content container
    const container = document.getElementById("content");

    // Set background image for the body element
    document.body.style.backgroundImage = `url(${restaurant_img})`;
    document.body.style.display = "flex";
    document.body.style.flexDirection = "column";
    document.body.style.alignItems = "center";
    document.body.style.justifyContent = "center";
    document.body.style.height = "100vh";
    document.body.style.backgroundPosition = "center";
    document.body.style.backgroundRepeat = "no-repeat";
    document.body.style.backgroundSize = "cover";
    document.body.style.position = "relative"; 

    

    // Content wrapper to place everything on top
    const contentWrapper = document.createElement("div");
    contentWrapper.style.position = "relative";
    contentWrapper.style.color = "black";
    contentWrapper.style.textAlign = "center";
    container.appendChild(contentWrapper);

    // Add title
    const title = document.createElement("h1");
    title.textContent = "Crispy Crepes and Waffles";
    contentWrapper.appendChild(title);

    // Add description
    const description = document.createElement("p");
    description.textContent = "The best crepes and waffles in the world!";
    contentWrapper.appendChild(description);

    // Add container for hours
    const container_hours = document.createElement("div");
    container_hours.classList.add("location");
    contentWrapper.appendChild(container_hours);

    // Add header for hours
    const header = document.createElement("h2");
    header.textContent = "Hours";
    container_hours.appendChild(header);

    // Add hours
    const hours = document.createElement("p");
    hours.textContent = "Mon-Fri: 7am-9pm, Sat-Sun: 7am-11pm";
    container_hours.appendChild(hours);

    // Add container for location
    const container_location = document.createElement("div");
    container_location.classList.add("location");
    contentWrapper.appendChild(container_location);

    // Add header for location
    const header_1 = document.createElement("h2");
    header_1.textContent = "Location";
    container_location.appendChild(header_1);

    // Add address
    const address = document.createElement("p");
    address.textContent = "123 Main Street, Anytown, USA";
    container_location.appendChild(address);
}
