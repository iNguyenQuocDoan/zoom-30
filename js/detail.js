import { send, getQueryParam } from "./api.js";

const productId = getQueryParam("id");
const detailBox = document.getElementById("detail");

if (!productId) {
  detailBox.textContent = "Không tìm thấy sản phẩm!";
  throw new Error("Missing id");
}

send("GET", `https://dummyjson.com/products/${productId}`)
  .then(renderDetail)
  .catch((err) => (detailBox.textContent = err));

function renderDetail(p) {
  detailBox.innerHTML = `
    <div class="images">
      ${p.images.map((img) => `<img src="${img}" alt="${p.title}">`).join("")}
    </div>
    <h2>${p.title}</h2>
    <p class="price-big">$${p.price}</p>
    <p><strong>Brand:</strong> ${p.brand}</p>
    <p><strong>Category:</strong> ${p.category}</p>
    <p><strong>Mô tả:</strong> ${p.description}</p>
    <p><strong>Tồn kho:</strong> ${p.stock}</p>
    <p><strong>Đánh giá:</strong> ${p.rating} ⭐</p>
  `;
}
