const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));
const setLocalStorage = (key, item) =>
  localStorage.setItem(key, JSON.stringify(item));
document.addEventListener("DOMContentLoaded", updateProduct);
document.addEventListener("DOMContentLoaded", () => {
  const priceinfo = document.getElementById("priceinfo");
  totalproduct = getLocalStorage("totalproduct");
  totalproduct.forEach((product) => {
    priceinfo.innerHTML = `
    <div id="priceinfo" class="priceinfo">
    <p> SubTotal ${product.totalquantity}
    itens R$ ${product.totalprice}</p>
    </div>
    `;
  });
});
const priceinfo = document.getElementById("priceinfo");
function calculatetotal() {
  const dataBase = getLocalStorage("up-products");
  let totalquantity = 0;
  let totalprice = 0;
  dataBase.forEach((data) => {
    totalquantity += data.quantity;
    totalprice += data.price;
  });

  document.getElementById(`priceinfo`).innerHTML = `
      <p> SubTotal ${totalquantity} 
      itens R$ ${totalprice}</p>
      `;

  setLocalStorage("totalproduct", [
    {
      totalquantity,
      totalprice,
    },
  ]);
}
function plusandminus(quantity, index) {
  document.getElementById(`nspan${index}`).innerText = quantity;

  const price = getLocalStorage("database")[index].price;
  const newprice = Number.parseInt(price * quantity);
  const totalprice = document.getElementById(`pprice${index}`);

  totalprice.innerHTML = `R$ ${newprice}`;

  const dataBase = getLocalStorage("up-products");

  const newDataBase = dataBase.map((data, i) => {
    if (i === index) {
      data.quantity = quantity;
      data.price = newprice;
    }
    return data;
  });
  console.log(index);
  console.log(newDataBase);

  setLocalStorage("up-products", newDataBase);
}
content = document.getElementById("content");
dataBase = getLocalStorage("up-products");

function plus(index) {
  //daria pra melhorar
  const quantity = getLocalStorage("up-products")[index].quantity + 1;
  plusandminus(quantity, index);
  calculatetotal();
}

function minus(index) {
  const quantity = getLocalStorage("up-products")[index].quantity - 1;
  plusandminus(quantity, index);
  calculatetotal();
}
function productDelete(index) {
  console.log("teste");
  const upProducts = getLocalStorage("up-products");
  upProducts.splice(index, 1);
  setLocalStorage("up-products", upProducts);

  location.reload();
  calculatetotal();
}

function printProduct(product) {
  index = document.getElementsByClassName("shoppingcars").length;
  console.log(index);
  content.innerHTML += `
    <div id="shoppingcars${index}" class="shoppingcars">
        <div id="productimage${index}" class="productimage">
            <img id="image${index}" class="image" src="${
    product.image
  }" alt="image">
        </div>      
        <div id="subtitle${index}" class="subtitle">
            <h2 id="tagsubtitle${index}" class="tagsubtitle">${
    product.name
  }</h2>
        </div> 
        <div id="menos" class="menos" onclick="minus(${index})">
            <img id="imgminus${index}" class="imgminus" src="../images/Ellipse 2.png" alt="menos" >
            <span id="menosspan" class="menosspan">-</span>
            </div>
            <div id="number${index}" class="number">
            <span id="nspan${index}" class="nspan" data-index="index">${
    getLocalStorage("up-products")[index].quantity
  }</span>
            
        </div>
        <div id="mais${index}" class="mais" onclick="plus(${index})">
            <img id="imgplus${index}" src="../images/Ellipse 3.png" alt="mais" >
            <span id="maisspan" class="maisspan">+</span>
        </div>
        <div id="price" class="price">
        <p id="pprice${index}" class="pprice">
        R$${getLocalStorage("up-products")[index].price},00
            
        </p>
        </div>
        <div id="deletar" class="deletar">

        <span id="sdeletar" class="sdeletar" onclick="productDelete(${index})">Deletar</span>

        </div>
       
    

 
    `;
}
function updateProduct() {
  const dataBase = getLocalStorage("up-products");
  dataBase.forEach(printProduct);
}
