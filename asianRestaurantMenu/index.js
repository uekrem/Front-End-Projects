// script.js

import { menu } from "./app.js";

let filter = document.getElementById("filter");
let food = document.getElementById("food");

(function () {
    const uniqText = new Set(menu.map(element => element.category));
    [...uniqText, "All"].forEach(function (element) {
        const button = document.createElement("button");
        filter.appendChild(button);
        button.textContent = element;
        button.addEventListener("click", function () {
            filterMenu(element);
        });
    });
})();

function filterMenu(filterName) {
    food.innerHTML = "";
    menu
        .filter(element => filterName === element.category || filterName === "All")
        .forEach(function (element) {
            food.innerHTML += `
            <div class="menu-items">
                <img class="photo" src=${element.img} alt=${element.title}/>
                <div class="menu-info">
                    <div class="menu-title">
                        <h4>${element.title}</h4>
                        <h4 class="price">${element.price}</h4>
                    </div>
                    <p class="menu-text">${element.desc}</p>
                </div>
            </div>`;
        });
}

filterMenu("All");
