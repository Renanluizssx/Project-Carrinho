const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key)) ?? [];
const setLocalStorage = (key, item) =>
  localStorage.setItem(key, JSON.stringify(item));

document.addEventListener("DOMContentLoaded", updateContent);
function printProduct(products) {
  const index = document.getElementsByClassName("product").length;
  console.log(index);
  const content = document.getElementById("content");
  content.innerHTML += `<div id="product${index}" class="product"> 
    <div id="image${index}" class="image">
     <img id="imageimg${index}"
      class="imageimg" src="${products.image}">
    </div>
        <div id="productinfo${index}"class="productinfo">
        
        <h2 id="subtitle${index}" class="subtitle">${products.name}</h2> 
        <span id="text${index}" class="text">R$ ${products.price}</span>
        <button data-product-id="${index}" id="button${index}" class="button" onclick="saveProduct(${index})">ADICIONAR AO CARRINHO</button>
        </div>
    </div>`;
}
function updateContent() {
  const products = getLocalStorage("products");
  products.forEach(printProduct);
}
function openIndex() {
  const url = "../index.html";
  window.open(url, "_self");
}

function saveProduct(index) {
  const products = getLocalStorage("products")[index];
  updateProduct(products);
}

function updateProduct(products) {
  const productsProduct = getLocalStorage("carts");
  setLocalStorage("carts", [products, ...productsProduct]);
  const url = "../pages/carrinho.html";
  window.open(url);
}
