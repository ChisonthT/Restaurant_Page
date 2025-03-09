/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/content_contact.js":
/*!********************************!*\
  !*** ./src/content_contact.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   contactContent: () => (/* binding */ contactContent)\n/* harmony export */ });\n\n\nfunction contactContent(){\n    \n    // Get content container\n    const container = document.getElementById(\"content\");\n\n\n    let title = document.createElement(\"h1\");\n    title.textContent = \"Contact\";\n    title.style.textAlign = \"center\";\n    container.appendChild(title);\n\n    let paragraph = document.createElement(\"p\");\n    paragraph.textContent = \"We are located at 123 Main St, Anytown, USA\";\n    paragraph.style.textAlign = \"center\";\n    container.appendChild(paragraph);\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGVudF9jb250YWN0LmpzIiwibWFwcGluZ3MiOiI7Ozs7OztBQUVPO0FBQ1A7QUFDQTtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudF9wYWdlLy4vc3JjL2NvbnRlbnRfY29udGFjdC5qcz8xYjU5Il0sInNvdXJjZXNDb250ZW50IjpbIlxuXG5leHBvcnQgZnVuY3Rpb24gY29udGFjdENvbnRlbnQoKXtcbiAgICBcbiAgICAvLyBHZXQgY29udGVudCBjb250YWluZXJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cblxuICAgIGxldCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgICB0aXRsZS50ZXh0Q29udGVudCA9IFwiQ29udGFjdFwiO1xuICAgIHRpdGxlLnN0eWxlLnRleHRBbGlnbiA9IFwiY2VudGVyXCI7XG4gICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgIGxldCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBwYXJhZ3JhcGgudGV4dENvbnRlbnQgPSBcIldlIGFyZSBsb2NhdGVkIGF0IDEyMyBNYWluIFN0LCBBbnl0b3duLCBVU0FcIjtcbiAgICBwYXJhZ3JhcGguc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQocGFyYWdyYXBoKTtcbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/content_contact.js\n");

/***/ }),

/***/ "./src/content_home.js":
/*!*****************************!*\
  !*** ./src/content_home.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   loadContent: () => (/* binding */ loadContent)\n/* harmony export */ });\n/* harmony import */ var _restaurant_interior_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./restaurant_interior.jpg */ \"./src/restaurant_interior.jpg\");\n\n\n\nfunction loadContent() {\n\n    // Get content container\n    const container = document.getElementById(\"content\");\n\n    // Set background image for the body element\n    document.body.style.backgroundImage = `url(${_restaurant_interior_jpg__WEBPACK_IMPORTED_MODULE_0__})`;\n    document.body.style.display = \"flex\";\n    document.body.style.flexDirection = \"column\";\n    document.body.style.alignItems = \"center\";\n    document.body.style.justifyContent = \"center\";\n    document.body.style.height = \"100vh\";\n    document.body.style.backgroundPosition = \"center\";\n    document.body.style.backgroundRepeat = \"no-repeat\";\n    document.body.style.backgroundSize = \"cover\";\n    document.body.style.position = \"relative\"; \n\n    \n\n    // Content wrapper to place everything on top\n    const contentWrapper = document.createElement(\"div\");\n    contentWrapper.style.position = \"relative\";\n    contentWrapper.style.color = \"black\";\n    contentWrapper.style.textAlign = \"center\";\n    container.appendChild(contentWrapper);\n\n    // Add title\n    const title = document.createElement(\"h1\");\n    title.textContent = \"Crispy Crepes and Waffles\";\n    contentWrapper.appendChild(title);\n\n    // Add description\n    const description = document.createElement(\"p\");\n    description.textContent = \"The best crepes and waffles in the world!\";\n    contentWrapper.appendChild(description);\n\n    // Add container for hours\n    const container_hours = document.createElement(\"div\");\n    container_hours.classList.add(\"location\");\n    contentWrapper.appendChild(container_hours);\n\n    // Add header for hours\n    const header = document.createElement(\"h2\");\n    header.textContent = \"Hours\";\n    container_hours.appendChild(header);\n\n    // Add hours\n    const hours = document.createElement(\"p\");\n    hours.textContent = \"Mon-Fri: 7am-9pm, Sat-Sun: 7am-11pm\";\n    container_hours.appendChild(hours);\n\n    // Add container for location\n    const container_location = document.createElement(\"div\");\n    container_location.classList.add(\"location\");\n    contentWrapper.appendChild(container_location);\n\n    // Add header for location\n    const header_1 = document.createElement(\"h2\");\n    header_1.textContent = \"Location\";\n    container_location.appendChild(header_1);\n\n    // Add address\n    const address = document.createElement(\"p\");\n    address.textContent = \"123 Main Street, Anytown, USA\";\n    container_location.appendChild(address);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGVudF9ob21lLmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQXVEOzs7QUFHaEQ7O0FBRVA7QUFDQTs7QUFFQTtBQUNBLGlEQUFpRCxxREFBYyxDQUFDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9jb250ZW50X2hvbWUuanM/NDVlYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgcmVzdGF1cmFudF9pbWcgZnJvbSBcIi4vcmVzdGF1cmFudF9pbnRlcmlvci5qcGdcIjtcblxuXG5leHBvcnQgZnVuY3Rpb24gbG9hZENvbnRlbnQoKSB7XG5cbiAgICAvLyBHZXQgY29udGVudCBjb250YWluZXJcbiAgICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cbiAgICAvLyBTZXQgYmFja2dyb3VuZCBpbWFnZSBmb3IgdGhlIGJvZHkgZWxlbWVudFxuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuYmFja2dyb3VuZEltYWdlID0gYHVybCgke3Jlc3RhdXJhbnRfaW1nfSlgO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUuZmxleERpcmVjdGlvbiA9IFwiY29sdW1uXCI7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJjZW50ZXJcIjtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmhlaWdodCA9IFwiMTAwdmhcIjtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRQb3NpdGlvbiA9IFwiY2VudGVyXCI7XG4gICAgZG9jdW1lbnQuYm9keS5zdHlsZS5iYWNrZ3JvdW5kUmVwZWF0ID0gXCJuby1yZXBlYXRcIjtcbiAgICBkb2N1bWVudC5ib2R5LnN0eWxlLmJhY2tncm91bmRTaXplID0gXCJjb3ZlclwiO1xuICAgIGRvY3VtZW50LmJvZHkuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7IFxuXG4gICAgXG5cbiAgICAvLyBDb250ZW50IHdyYXBwZXIgdG8gcGxhY2UgZXZlcnl0aGluZyBvbiB0b3BcbiAgICBjb25zdCBjb250ZW50V3JhcHBlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGVudFdyYXBwZXIuc3R5bGUucG9zaXRpb24gPSBcInJlbGF0aXZlXCI7XG4gICAgY29udGVudFdyYXBwZXIuc3R5bGUuY29sb3IgPSBcImJsYWNrXCI7XG4gICAgY29udGVudFdyYXBwZXIuc3R5bGUudGV4dEFsaWduID0gXCJjZW50ZXJcIjtcbiAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY29udGVudFdyYXBwZXIpO1xuXG4gICAgLy8gQWRkIHRpdGxlXG4gICAgY29uc3QgdGl0bGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaDFcIik7XG4gICAgdGl0bGUudGV4dENvbnRlbnQgPSBcIkNyaXNweSBDcmVwZXMgYW5kIFdhZmZsZXNcIjtcbiAgICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZCh0aXRsZSk7XG5cbiAgICAvLyBBZGQgZGVzY3JpcHRpb25cbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGRlc2NyaXB0aW9uLnRleHRDb250ZW50ID0gXCJUaGUgYmVzdCBjcmVwZXMgYW5kIHdhZmZsZXMgaW4gdGhlIHdvcmxkIVwiO1xuICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKGRlc2NyaXB0aW9uKTtcblxuICAgIC8vIEFkZCBjb250YWluZXIgZm9yIGhvdXJzXG4gICAgY29uc3QgY29udGFpbmVyX2hvdXJzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXJfaG91cnMuY2xhc3NMaXN0LmFkZChcImxvY2F0aW9uXCIpO1xuICAgIGNvbnRlbnRXcmFwcGVyLmFwcGVuZENoaWxkKGNvbnRhaW5lcl9ob3Vycyk7XG5cbiAgICAvLyBBZGQgaGVhZGVyIGZvciBob3Vyc1xuICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBoZWFkZXIudGV4dENvbnRlbnQgPSBcIkhvdXJzXCI7XG4gICAgY29udGFpbmVyX2hvdXJzLmFwcGVuZENoaWxkKGhlYWRlcik7XG5cbiAgICAvLyBBZGQgaG91cnNcbiAgICBjb25zdCBob3VycyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJwXCIpO1xuICAgIGhvdXJzLnRleHRDb250ZW50ID0gXCJNb24tRnJpOiA3YW0tOXBtLCBTYXQtU3VuOiA3YW0tMTFwbVwiO1xuICAgIGNvbnRhaW5lcl9ob3Vycy5hcHBlbmRDaGlsZChob3Vycyk7XG5cbiAgICAvLyBBZGQgY29udGFpbmVyIGZvciBsb2NhdGlvblxuICAgIGNvbnN0IGNvbnRhaW5lcl9sb2NhdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgY29udGFpbmVyX2xvY2F0aW9uLmNsYXNzTGlzdC5hZGQoXCJsb2NhdGlvblwiKTtcbiAgICBjb250ZW50V3JhcHBlci5hcHBlbmRDaGlsZChjb250YWluZXJfbG9jYXRpb24pO1xuXG4gICAgLy8gQWRkIGhlYWRlciBmb3IgbG9jYXRpb25cbiAgICBjb25zdCBoZWFkZXJfMSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMlwiKTtcbiAgICBoZWFkZXJfMS50ZXh0Q29udGVudCA9IFwiTG9jYXRpb25cIjtcbiAgICBjb250YWluZXJfbG9jYXRpb24uYXBwZW5kQ2hpbGQoaGVhZGVyXzEpO1xuXG4gICAgLy8gQWRkIGFkZHJlc3NcbiAgICBjb25zdCBhZGRyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgYWRkcmVzcy50ZXh0Q29udGVudCA9IFwiMTIzIE1haW4gU3RyZWV0LCBBbnl0b3duLCBVU0FcIjtcbiAgICBjb250YWluZXJfbG9jYXRpb24uYXBwZW5kQ2hpbGQoYWRkcmVzcyk7XG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/content_home.js\n");

/***/ }),

/***/ "./src/content_menu.js":
/*!*****************************!*\
  !*** ./src/content_menu.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   menuContent: () => (/* binding */ menuContent)\n/* harmony export */ });\n\nfunction menuItem(name, description, price) {\n    this.itemName = name;\n    this.description = description;\n    this.price = price;\n}\n\nfunction menuContent() {\n\n   // Get content container\n   const container = document.getElementById(\"content\");\n\n\n   // Add title\n   const title = document.createElement(\"h1\");\n   title.textContent = \"Menu\";\n   title.style.textAlign = \"center\";\n   container.appendChild(title);\n\n   //menu items\n   const menu = [new menuItem(\"Crispy Crepes\", \"Comes with your choice of filling\", \"$5.99\"), \n    new menuItem(\"Waffles\", \"Comes with your choice of filling\", \"$6.99\"), \n    new menuItem(\"Omelette\", \"Comes with your choice of filling\", \"$7.99\"), \n    new menuItem(\"Pancakes\", \"Comes with your choice of filling\", \"$8.99\"), \n    new menuItem(\"French Toast\", \"Comes with your choice of filling\", \"$9.99\"), \n    new menuItem(\"Scones\", \"Comes with your choice of filling\", \"$10.99\"), \n    new menuItem(\"Bagels\", \"Comes with your choice of filling\", \"$11.99\"), \n    new menuItem(\"Croissant\", \"Comes with your choice of filling\", \"$12.99\"), \n    new menuItem(\"Donuts\", \"Comes with your choice of filling\", \"$13.99\")\n   ];\n\n   console.log(menu[0]);\n\n   const menuContainer = document.createElement(\"div\");\n\n   menuContainer.style.display = \"flex\";\n   menuContainer.style.flexDirection = \"column\";\n   menuContainer.style.alignItems = \"center\";\n   menuContainer.style.justifyContent = \"center\";\n   menuContainer.style.margin = \"20px\";\n   menuContainer.style.padding = \"20px\";\n   menuContainer.style.backgroundColor = \"lightgray\";\n   menuContainer.style.opacity = \"0.8\";\n   menuContainer.style.borderRadius = \"10px\";\n\n   for (let i= 0; i < menu.length; i++) {\n    let item = document.createElement(\"div\");\n    let foodName = document.createElement(\"p\");\n    let desc =document.createElement(\"p\");\n    let cost = document.createElement(\"p\");\n    \n    item.style.flex = \"1\";\n    item.style.display = \"flex\";\n    item.style.flexDirection = \"row\";\n    item.style.alignItems = \"center\";\n    item.style.justifyContent = \"center\";\n    \n\n    foodName.textContent = menu[i].itemName;\n    desc.textContent = menu[i].description;\n    cost.textContent = menu[i].price;\n\n    cost.style.padding = \"10px\";\n    desc.style.padding = \"10px\";\n\n    item.appendChild(foodName);\n    item.appendChild(desc);\n    item.appendChild(cost);\n\n    menuContainer.appendChild(item);\n\n    console.log(i);\n    console.log(menu[i].itemName);\n   }\n\n   container.appendChild(menuContainer);\n\n\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29udGVudF9tZW51LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTzs7QUFFUDtBQUNBOzs7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLGtCQUFrQixpQkFBaUI7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBOzs7QUFHQSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9jb250ZW50X21lbnUuanM/OWMxZiJdLCJzb3VyY2VzQ29udGVudCI6WyJcbmZ1bmN0aW9uIG1lbnVJdGVtKG5hbWUsIGRlc2NyaXB0aW9uLCBwcmljZSkge1xuICAgIHRoaXMuaXRlbU5hbWUgPSBuYW1lO1xuICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB0aGlzLnByaWNlID0gcHJpY2U7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBtZW51Q29udGVudCgpIHtcblxuICAgLy8gR2V0IGNvbnRlbnQgY29udGFpbmVyXG4gICBjb25zdCBjb250YWluZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRlbnRcIik7XG5cblxuICAgLy8gQWRkIHRpdGxlXG4gICBjb25zdCB0aXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJoMVwiKTtcbiAgIHRpdGxlLnRleHRDb250ZW50ID0gXCJNZW51XCI7XG4gICB0aXRsZS5zdHlsZS50ZXh0QWxpZ24gPSBcImNlbnRlclwiO1xuICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHRpdGxlKTtcblxuICAgLy9tZW51IGl0ZW1zXG4gICBjb25zdCBtZW51ID0gW25ldyBtZW51SXRlbShcIkNyaXNweSBDcmVwZXNcIiwgXCJDb21lcyB3aXRoIHlvdXIgY2hvaWNlIG9mIGZpbGxpbmdcIiwgXCIkNS45OVwiKSwgXG4gICAgbmV3IG1lbnVJdGVtKFwiV2FmZmxlc1wiLCBcIkNvbWVzIHdpdGggeW91ciBjaG9pY2Ugb2YgZmlsbGluZ1wiLCBcIiQ2Ljk5XCIpLCBcbiAgICBuZXcgbWVudUl0ZW0oXCJPbWVsZXR0ZVwiLCBcIkNvbWVzIHdpdGggeW91ciBjaG9pY2Ugb2YgZmlsbGluZ1wiLCBcIiQ3Ljk5XCIpLCBcbiAgICBuZXcgbWVudUl0ZW0oXCJQYW5jYWtlc1wiLCBcIkNvbWVzIHdpdGggeW91ciBjaG9pY2Ugb2YgZmlsbGluZ1wiLCBcIiQ4Ljk5XCIpLCBcbiAgICBuZXcgbWVudUl0ZW0oXCJGcmVuY2ggVG9hc3RcIiwgXCJDb21lcyB3aXRoIHlvdXIgY2hvaWNlIG9mIGZpbGxpbmdcIiwgXCIkOS45OVwiKSwgXG4gICAgbmV3IG1lbnVJdGVtKFwiU2NvbmVzXCIsIFwiQ29tZXMgd2l0aCB5b3VyIGNob2ljZSBvZiBmaWxsaW5nXCIsIFwiJDEwLjk5XCIpLCBcbiAgICBuZXcgbWVudUl0ZW0oXCJCYWdlbHNcIiwgXCJDb21lcyB3aXRoIHlvdXIgY2hvaWNlIG9mIGZpbGxpbmdcIiwgXCIkMTEuOTlcIiksIFxuICAgIG5ldyBtZW51SXRlbShcIkNyb2lzc2FudFwiLCBcIkNvbWVzIHdpdGggeW91ciBjaG9pY2Ugb2YgZmlsbGluZ1wiLCBcIiQxMi45OVwiKSwgXG4gICAgbmV3IG1lbnVJdGVtKFwiRG9udXRzXCIsIFwiQ29tZXMgd2l0aCB5b3VyIGNob2ljZSBvZiBmaWxsaW5nXCIsIFwiJDEzLjk5XCIpXG4gICBdO1xuXG4gICBjb25zb2xlLmxvZyhtZW51WzBdKTtcblxuICAgY29uc3QgbWVudUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG5cbiAgIG1lbnVDb250YWluZXIuc3R5bGUuZGlzcGxheSA9IFwiZmxleFwiO1xuICAgbWVudUNvbnRhaW5lci5zdHlsZS5mbGV4RGlyZWN0aW9uID0gXCJjb2x1bW5cIjtcbiAgIG1lbnVDb250YWluZXIuc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XG4gICBtZW51Q29udGFpbmVyLnN0eWxlLmp1c3RpZnlDb250ZW50ID0gXCJjZW50ZXJcIjtcbiAgIG1lbnVDb250YWluZXIuc3R5bGUubWFyZ2luID0gXCIyMHB4XCI7XG4gICBtZW51Q29udGFpbmVyLnN0eWxlLnBhZGRpbmcgPSBcIjIwcHhcIjtcbiAgIG1lbnVDb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJsaWdodGdyYXlcIjtcbiAgIG1lbnVDb250YWluZXIuc3R5bGUub3BhY2l0eSA9IFwiMC44XCI7XG4gICBtZW51Q29udGFpbmVyLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTBweFwiO1xuXG4gICBmb3IgKGxldCBpPSAwOyBpIDwgbWVudS5sZW5ndGg7IGkrKykge1xuICAgIGxldCBpdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBsZXQgZm9vZE5hbWUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBsZXQgZGVzYyA9ZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInBcIik7XG4gICAgbGV0IGNvc3QgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwicFwiKTtcbiAgICBcbiAgICBpdGVtLnN0eWxlLmZsZXggPSBcIjFcIjtcbiAgICBpdGVtLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjtcbiAgICBpdGVtLnN0eWxlLmZsZXhEaXJlY3Rpb24gPSBcInJvd1wiO1xuICAgIGl0ZW0uc3R5bGUuYWxpZ25JdGVtcyA9IFwiY2VudGVyXCI7XG4gICAgaXRlbS5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiY2VudGVyXCI7XG4gICAgXG5cbiAgICBmb29kTmFtZS50ZXh0Q29udGVudCA9IG1lbnVbaV0uaXRlbU5hbWU7XG4gICAgZGVzYy50ZXh0Q29udGVudCA9IG1lbnVbaV0uZGVzY3JpcHRpb247XG4gICAgY29zdC50ZXh0Q29udGVudCA9IG1lbnVbaV0ucHJpY2U7XG5cbiAgICBjb3N0LnN0eWxlLnBhZGRpbmcgPSBcIjEwcHhcIjtcbiAgICBkZXNjLnN0eWxlLnBhZGRpbmcgPSBcIjEwcHhcIjtcblxuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoZm9vZE5hbWUpO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQoZGVzYyk7XG4gICAgaXRlbS5hcHBlbmRDaGlsZChjb3N0KTtcblxuICAgIG1lbnVDb250YWluZXIuYXBwZW5kQ2hpbGQoaXRlbSk7XG5cbiAgICBjb25zb2xlLmxvZyhpKTtcbiAgICBjb25zb2xlLmxvZyhtZW51W2ldLml0ZW1OYW1lKTtcbiAgIH1cblxuICAgY29udGFpbmVyLmFwcGVuZENoaWxkKG1lbnVDb250YWluZXIpO1xuXG5cbn0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/content_menu.js\n");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _content_home_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./content_home.js */ \"./src/content_home.js\");\n/* harmony import */ var _content_menu_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./content_menu.js */ \"./src/content_menu.js\");\n/* harmony import */ var _content_contact_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./content_contact.js */ \"./src/content_contact.js\");\n\n\n\n\n\nconst home = document.getElementById(\"home\");\nconst menu = document.getElementById(\"menu\");\nconst contact = document.getElementById(\"contact\");\n\nfunction resetPage(){\n    // Remove existing content\n    const content = document.getElementById(\"content\");\n    content.remove();\n\n    // Create new content\n    const container = document.createElement(\"div\");\n    container.id = \"content\";\n    container.style.backgroundColor = \"lightgray\";\n    container.style.opacity = \"0.8\";\n    container.style.padding = \"60px\";\n    container.style.borderRadius = \"10px\";\n\n    document.body.appendChild(container);\n}\n\nhome.addEventListener(\"click\", function (){\n    resetPage();\n    (0,_content_home_js__WEBPACK_IMPORTED_MODULE_0__.loadContent)();\n});\nmenu.addEventListener(\"click\", function (){\n    resetPage();\n    (0,_content_menu_js__WEBPACK_IMPORTED_MODULE_1__.menuContent)();\n});\ncontact.addEventListener(\"click\", function(){\n    resetPage();\n    (0,_content_contact_js__WEBPACK_IMPORTED_MODULE_2__.contactContent)();\n});\n\nconst header = document.querySelector(\"header\");\nheader.style.position = \"fixed\";\nheader.style.top = \"0\";\nheader.style.width = \"100%\";\nheader.style.zIndex = \"1\";\nheader.style.padding = \"10px\";\nheader.style.display = \"flex\"; \nheader.style.justifyContent = \"space-between\";\nheader.style.alignItems = \"center\";\nheader.style.justifyContent = \"center\";\n\ndocument.querySelectorAll(\"button\").forEach(button => {\n    button.style.backgroundColor = \"lightgray\";\n    button.style.color = \"black\";\n    button.style.padding = \"20px 20px\";\n    button.style.borderRadius = \"10px\";\n    button.style.fontSize = \"20px\";\n});\n\nresetPage();\n(0,_content_home_js__WEBPACK_IMPORTED_MODULE_0__.loadContent)();//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvaW5kZXguanMiLCJtYXBwaW5ncyI6Ijs7OztBQUE4QztBQUNBO0FBQ007OztBQUdwRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsSUFBSSw2REFBVztBQUNmLENBQUM7QUFDRDtBQUNBO0FBQ0EsSUFBSSw2REFBVztBQUNmLENBQUM7QUFDRDtBQUNBO0FBQ0EsSUFBSSxtRUFBYztBQUNsQixDQUFDOztBQUVEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQSw2REFBVyIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnRfcGFnZS8uL3NyYy9pbmRleC5qcz9iNjM1Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7bG9hZENvbnRlbnR9IGZyb20gXCIuL2NvbnRlbnRfaG9tZS5qc1wiO1xuaW1wb3J0IHttZW51Q29udGVudH0gZnJvbSBcIi4vY29udGVudF9tZW51LmpzXCI7XG5pbXBvcnQge2NvbnRhY3RDb250ZW50fSBmcm9tIFwiLi9jb250ZW50X2NvbnRhY3QuanNcIjtcblxuXG5jb25zdCBob21lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJob21lXCIpO1xuY29uc3QgbWVudSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwibWVudVwiKTtcbmNvbnN0IGNvbnRhY3QgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNvbnRhY3RcIik7XG5cbmZ1bmN0aW9uIHJlc2V0UGFnZSgpe1xuICAgIC8vIFJlbW92ZSBleGlzdGluZyBjb250ZW50XG4gICAgY29uc3QgY29udGVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY29udGVudFwiKTtcbiAgICBjb250ZW50LnJlbW92ZSgpO1xuXG4gICAgLy8gQ3JlYXRlIG5ldyBjb250ZW50XG4gICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICBjb250YWluZXIuaWQgPSBcImNvbnRlbnRcIjtcbiAgICBjb250YWluZXIuc3R5bGUuYmFja2dyb3VuZENvbG9yID0gXCJsaWdodGdyYXlcIjtcbiAgICBjb250YWluZXIuc3R5bGUub3BhY2l0eSA9IFwiMC44XCI7XG4gICAgY29udGFpbmVyLnN0eWxlLnBhZGRpbmcgPSBcIjYwcHhcIjtcbiAgICBjb250YWluZXIuc3R5bGUuYm9yZGVyUmFkaXVzID0gXCIxMHB4XCI7XG5cbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGNvbnRhaW5lcik7XG59XG5cbmhvbWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpe1xuICAgIHJlc2V0UGFnZSgpO1xuICAgIGxvYWRDb250ZW50KCk7XG59KTtcbm1lbnUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpe1xuICAgIHJlc2V0UGFnZSgpO1xuICAgIG1lbnVDb250ZW50KCk7XG59KTtcbmNvbnRhY3QuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XG4gICAgcmVzZXRQYWdlKCk7XG4gICAgY29udGFjdENvbnRlbnQoKTtcbn0pO1xuXG5jb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiaGVhZGVyXCIpO1xuaGVhZGVyLnN0eWxlLnBvc2l0aW9uID0gXCJmaXhlZFwiO1xuaGVhZGVyLnN0eWxlLnRvcCA9IFwiMFwiO1xuaGVhZGVyLnN0eWxlLndpZHRoID0gXCIxMDAlXCI7XG5oZWFkZXIuc3R5bGUuekluZGV4ID0gXCIxXCI7XG5oZWFkZXIuc3R5bGUucGFkZGluZyA9IFwiMTBweFwiO1xuaGVhZGVyLnN0eWxlLmRpc3BsYXkgPSBcImZsZXhcIjsgXG5oZWFkZXIuc3R5bGUuanVzdGlmeUNvbnRlbnQgPSBcInNwYWNlLWJldHdlZW5cIjtcbmhlYWRlci5zdHlsZS5hbGlnbkl0ZW1zID0gXCJjZW50ZXJcIjtcbmhlYWRlci5zdHlsZS5qdXN0aWZ5Q29udGVudCA9IFwiY2VudGVyXCI7XG5cbmRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXCJidXR0b25cIikuZm9yRWFjaChidXR0b24gPT4ge1xuICAgIGJ1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kQ29sb3IgPSBcImxpZ2h0Z3JheVwiO1xuICAgIGJ1dHRvbi5zdHlsZS5jb2xvciA9IFwiYmxhY2tcIjtcbiAgICBidXR0b24uc3R5bGUucGFkZGluZyA9IFwiMjBweCAyMHB4XCI7XG4gICAgYnV0dG9uLnN0eWxlLmJvcmRlclJhZGl1cyA9IFwiMTBweFwiO1xuICAgIGJ1dHRvbi5zdHlsZS5mb250U2l6ZSA9IFwiMjBweFwiO1xufSk7XG5cbnJlc2V0UGFnZSgpO1xubG9hZENvbnRlbnQoKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/index.js\n");

/***/ }),

/***/ "./src/restaurant_interior.jpg":
/*!*************************************!*\
  !*** ./src/restaurant_interior.jpg ***!
  \*************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "b08bf90f3563aa5effd3.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript && document.currentScript.tagName.toUpperCase() === 'SCRIPT')
/******/ 				scriptUrl = document.currentScript.src;
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) {
/******/ 					var i = scripts.length - 1;
/******/ 					while (i > -1 && (!scriptUrl || !/^http(s?):/.test(scriptUrl))) scriptUrl = scripts[i--].src;
/******/ 				}
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/^blob:/, "").replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval-source-map devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;