import { send } from "./api.js";

const productListEl = document.querySelector(".product-list");
const apiUrl = "https://dummyjson.com/products?limit=20";

send("GET", apiUrl)
  .then((data) => renderProducts(data.products))
  .catch((err) => console.error(err));

function renderProducts(products) {
  products.forEach((p) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <img class="thumb" src="${p.thumbnail}" alt="${p.title}" />
      <div class="info">
        <p class="title">${p.title}</p>
        <p class="price">$${p.price}</p>
      </div>`;
    li.addEventListener("click", () => {
      window.location.href = `detail.html?id=${p.id}`;
    });
    productListEl.appendChild(li);
  });
}
