const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key)) ?? [];
const setLocalStorage = (key, item) =>
  localStorage.setItem(key, JSON.stringify(item));

document.addEventListener("DOMContentLoaded", updateContent);
function printProduct(DataBase) {
  const index = document.getElementsByClassName("product").length;
  console.log(index);
  const content = document.getElementById("content");
  content.innerHTML += `<div id="product${index}" class="product"> 
    <div id="image${index}" class="image">
     <img id="imageimg${index}"
      class="imageimg" src="${DataBase.image}">
    </div>
        <div id="productinfo${index}"class="productinfo">
        
        <h2 id="subtitle${index}" class="subtitle">${DataBase.name}</h2> 
        <span id="text${index}" class="text">${DataBase.price}</span>
        <button data-product-id="${index}" id="button${index}" class="button" onclick="saveProduct(${index})">ADICIONAR AO CARRINHO</button>
        </div>
    </div>`;
}
function updateContent() {
  dataBase = getLocalStorage("database");
  dataBase.forEach(printProduct);
}
function openIndex() {
  const url = "../index.html";
  window.open(url, "_self");
}

function saveProduct(index) {
  if (!getLocalStorage("up-products")[index]) {
    dataBase = getLocalStorage("database")[index];

    console.log(index);
    updateProduct(dataBase);
  } else {
    window.alert("Você não pode adicionar o mesmo produto ao carrinho");
  }
}

function updateProduct(dataBase) {
  const dataBaseProduct = getLocalStorage("up-products");

  setLocalStorage("up-products", [dataBase, ...dataBaseProduct]);
  console.log(dataBaseProduct);
  const url = "../pages/carrinho.html";
  window.open(url);
}
