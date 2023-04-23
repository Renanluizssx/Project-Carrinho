const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));
const setLocalStorage = (key, item) =>
  localStorage.setItem(key, JSON.stringify(item));
document.addEventListener("DOMContentLoaded", updateProduct);
//a revisar
document.addEventListener("DOMContentLoaded", calculatetotal);
function calculatetotal() {
  const products = getLocalStorage("carts");
  console.log(products);
  let totalquantity = 0;
  let totalprice = 0;
  products.forEach((data) => {
    totalquantity += Number(data.quantity);
    totalprice += Number(data.price);
  });

  document.getElementById(`priceinfo`).innerHTML = `
  <div id="priceinfo" class="priceinfo">
  <p> SubTotal <br>${totalquantity}
  itens<span class="totalprice"> R$ ${totalprice}</span></p>
  </div>
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

  const price = getLocalStorage("products")[index].price;
  const newprice = Number.parseInt(price * quantity);
  const totalprice = document.getElementById(`pprice${index}`);

  totalprice.innerHTML = `R$ ${newprice}`;

  const products = getLocalStorage("carts");

  const newproducts = products.map((data, i) => {
    //atenção
    if (i === index) {
      data.quantity = quantity;
      data.price = newprice;
    }
    return data;
  });
  console.log(index);
  console.log(newproducts);

  setLocalStorage("carts", newproducts);
}
function plus(index) {
  //daria pra melhorar
  const quantity = getLocalStorage("carts")[index].quantity + 1;

  plusandminus(quantity, index);
  calculatetotal();
}

function minus(index) {
  const quantity = getLocalStorage("carts")[index].quantity - 1;
  if (quantity <= 0) {
    productDelete(index);
    return null;
  }
  plusandminus(quantity, index);
  calculatetotal();
}

function productDelete(index) {
  const upProducts = getLocalStorage("carts");
  upProducts.splice(index, 1);
  setLocalStorage("carts", upProducts);
  location.reload();
}

function printProduct(product) {
  const index = document.getElementsByClassName("shoppingcars").length;
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
    getLocalStorage("carts")[index].quantity
  }</span>
            
        </div>
        <div id="mais${index}" class="mais" onclick="plus(${index})">
            <img id="imgplus${index}" src="../images/Ellipse 3.png" alt="mais" >
            <span id="maisspan" class="maisspan">+</span>
        </div>
        <div id="divmove${index}" class="divmove">

        <div id="price" class="price">
        <p id="pprice${index}" class="pprice">
        R$${getLocalStorage("carts")[index].price},00
            
        </p>
        </div>
        
        <div id="deletar" class="deletar">

        <span id="sdeletar" class="sdeletar" onclick="productDelete(${index})">Deletar</span>

        </div>
        </div>
       
    

 
    `;
}
function updateProduct() {
  const products = getLocalStorage("carts");
  products.forEach(printProduct);
}
