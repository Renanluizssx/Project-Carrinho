const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));
const setLocalStorage = (key, item) =>
  localStorage.setItem(key, JSON.stringify(item));
document.addEventListener("DOMContentLoaded", updateProduct);
document.addEventListener("DOMContentLoaded", calculateTotal);
function calculateTotal() {
  const products = getLocalStorage("carts");
  let totalQuantity = 0;
  let totalPrice = 0;
  products.forEach((data) => {
    totalQuantity += Number(data.quantity);
    totalPrice += Number(data.price);
  });

  document.getElementById(`priceinfo`).innerHTML = `
  <div id="priceinfo" class="priceinfo">
  <p> SubTotal <br>${totalQuantity}
  itens<span id="total-price" class="total-price"> R$ ${totalPrice}</span></p>
  </div>
      `;

  return setLocalStorage("totalProduct", [
    {
      totalQuantity,
      totalPrice,
    },
  ]);
}
function plusAndMinus(quantity, index) {
  document.getElementById(`n-span${index}`).innerText = quantity;

  const price = getLocalStorage("products")[index].price;
  const newPrice = Number.parseInt(price * quantity);
  const totalPrice = document.getElementById(`p-price${index}`);

  totalPrice.innerHTML = `R$ ${newPrice}`;

  const products = getLocalStorage("carts");

  const newProducts = products.map((data, i) => {
    //atenção
    if (i === index) {
      data.quantity = quantity;
      data.price = newPrice;
    }
    return data;
  });
  return setLocalStorage("carts", newProducts);
}
function plus(index) {
  //daria pra melhorar
  const quantity = getLocalStorage("carts")[index].quantity + 1;

  plusAndMinus(quantity, index);
  return calculateTotal();
}

function minus(index) {
  const quantity = getLocalStorage("carts")[index].quantity - 1;
  if (quantity <= 0) {
    productDelete(index);
    return null;
  }
  plusAndMinus(quantity, index);
  return calculateTotal();
}

function productDelete(index) {
  const upProducts = getLocalStorage("carts");
  upProducts.splice(index, 1);
  setLocalStorage("carts", upProducts);
  return location.reload();
}

function printProduct(product) {
  const index = document.getElementsByClassName("shopping-cars").length;
  console.log(index);
  return (content.innerHTML += `
    <div id="shopping-cars${index}" class="shopping-cars">
        <div id="product-image${index}" class="product-image">
            <img id="image${index}" class="image" src="${
    product.image
  }" alt="image">
        </div>      
        <div id="subtitle${index}" class="subtitle">
            <h2 id="tag-subtitle${index}" class="tag-subtitle">${
    product.name
  }</h2>
        </div> 
        <div id="menos" class="menos" onclick="minus(${index})">
            <img id="img-minus${index}" class="img-minus" src="../images/Ellipse 2.png" alt="menos" >
            <span id="menos-span" class="menos-span">-</span>
            </div>
            <div id="number${index}" class="number">
            <span id="n-span${index}" class="n-span" data-index="index">${
    getLocalStorage("carts")[index].quantity
  }</span>
            
        </div>
        <div id="mais${index}" class="mais" onclick="plus(${index})">
            <img id="img-plus${index}" src="../images/Ellipse 3.png" alt="mais" >
            <span id="mais-span" class="mais-span">+</span>
        </div>
        <div id="div-move${index}" class="div-move">

        <div id="price" class="price">
        <p id="p-price${index}" class="p-price">
        R$${getLocalStorage("carts")[index].price},00
            
        </p>
        </div>
        
        <div id="deletar" class="deletar">

        <span id="s-deletar" class="s-deletar" onclick="productDelete(${index})">Deletar</span>

        </div>
        </div>
       
    

 
    `);
}
function updateProduct() {
  const products = getLocalStorage("carts");
  return products.forEach(printProduct);
}
