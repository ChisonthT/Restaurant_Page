
function menuItem(name, description, price) {
    this.itemName = name;
    this.description = description;
    this.price = price;
}

export function menuContent() {

   // Get content container
   const container = document.getElementById("content");


   // Add title
   const title = document.createElement("h1");
   title.textContent = "Menu";
   title.style.textAlign = "center";
   container.appendChild(title);

   //menu items
   const menu = [new menuItem("Crispy Crepes", "Comes with your choice of filling", "$5.99"), 
    new menuItem("Waffles", "Comes with your choice of filling", "$6.99"), 
    new menuItem("Omelette", "Comes with your choice of filling", "$7.99"), 
    new menuItem("Pancakes", "Comes with your choice of filling", "$8.99"), 
    new menuItem("French Toast", "Comes with your choice of filling", "$9.99"), 
    new menuItem("Scones", "Comes with your choice of filling", "$10.99"), 
    new menuItem("Bagels", "Comes with your choice of filling", "$11.99"), 
    new menuItem("Croissant", "Comes with your choice of filling", "$12.99"), 
    new menuItem("Donuts", "Comes with your choice of filling", "$13.99")
   ];

   console.log(menu[0]);

   const menuContainer = document.createElement("div");

   menuContainer.style.display = "flex";
   menuContainer.style.flexDirection = "column";
   menuContainer.style.alignItems = "center";
   menuContainer.style.justifyContent = "center";
   menuContainer.style.margin = "20px";
   menuContainer.style.padding = "20px";
   menuContainer.style.backgroundColor = "lightgray";
   menuContainer.style.opacity = "0.8";
   menuContainer.style.borderRadius = "10px";

   for (let i= 0; i < menu.length; i++) {
    let item = document.createElement("div");
    let foodName = document.createElement("p");
    let desc =document.createElement("p");
    let cost = document.createElement("p");
    
    item.style.flex = "1";
    item.style.display = "flex";
    item.style.flexDirection = "row";
    item.style.alignItems = "center";
    item.style.justifyContent = "center";
    

    foodName.textContent = menu[i].itemName;
    desc.textContent = menu[i].description;
    cost.textContent = menu[i].price;

    cost.style.padding = "10px";
    desc.style.padding = "10px";

    item.appendChild(foodName);
    item.appendChild(desc);
    item.appendChild(cost);

    menuContainer.appendChild(item);

    console.log(i);
    console.log(menu[i].itemName);
   }

   container.appendChild(menuContainer);


}