

export function contactContent(){
    
    // Get content container
    const container = document.getElementById("content");


    let title = document.createElement("h1");
    title.textContent = "Contact";
    title.style.textAlign = "center";
    container.appendChild(title);

    let paragraph = document.createElement("p");
    paragraph.textContent = "We are located at 123 Main St, Anytown, USA";
    paragraph.style.textAlign = "center";
    container.appendChild(paragraph);
}