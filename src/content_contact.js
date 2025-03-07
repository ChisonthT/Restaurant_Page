

export function contactContent(){

    // Remove existing content
    const content = document.getElementById("content");
    content.remove();

    // Create new content
    const container = document.createElement("div");
    container.id = "content";
    document.body.appendChild(container);
}