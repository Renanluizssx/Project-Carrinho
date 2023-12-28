const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key)) ?? [];
const setLocalStorage = (key, item) =>
  localStorage.setItem(key, JSON.stringify(item));
  
document.addEventListener("DOMContentLoaded", updateProduct);

function handleItemChange(productID, index, operation){
  const newQuantity = changeQuantity(productID, index, operation)
  const newPrice = changePrice(productID, newQuantity)
  refreshCart(productID, newQuantity, newPrice);
  return calculateTotalPriceAndQuantity();
}

function changeQuantity(productID, index, operation) {
  const carts = getLocalStorage("carts");
  const productCart = carts.find((product) => product.id === productID)
  const newQuantity = operation === 'plus' ? productCart.quantity + 1 : productCart.quantity - 1;

  if (newQuantity <= 0) {
    productDelete(index);
  }

  document.getElementById(`n-span-${productID}`).innerText = newQuantity;

  return newQuantity
}


function changePrice(productID, newQuantity) {
  const price = getLocalStorage("products")[productID].price;
  const newPrice = Number.parseInt(price * newQuantity);
  const totalPrice = document.getElementById(`p-price-${productID}`);
  totalPrice.innerHTML = `R$ ${newPrice}`;
  return newPrice;
}

function refreshCart(productID, newQuantity, newPrice) {
  const carts = getLocalStorage("carts");
  const newCart = carts.map((product) => {
    if (product.id === productID) {
      product.quantity = newQuantity;
      product.price = newPrice;
    }
    return product;
  });

  return setLocalStorage("carts", newCart);
}


function calculateTotalPriceAndQuantity() {
  const products = getLocalStorage("carts");
  let totalQuantity = 0;
  let totalPrice = 0;
  products.forEach((data) => {
    totalQuantity += Number(data.quantity);
    totalPrice += Number(data.price);
  });

  document.getElementById(`price-info`).innerHTML = `
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


function productDelete(index) {
  const upProducts = getLocalStorage("carts")
  upProducts.splice(index, 1);
  setLocalStorage("carts", upProducts);
  return updateProduct()
}

function printProduct(product, index) {
  const productID = product.id

  return content.innerHTML += `
    <div id="shopping-cars-${productID}" class="shopping-cars">
      <div id="product-image-${productID}" class="product-image">
          <img id="image-${productID}" class="image" src="${product.image}" alt="image">
      </div>      
      <div id="subtitle-${productID}" class="subtitle">
          <h2 id="tag-subtitle-${productID}" class="tag-subtitle">
            ${product.name}
          </h2>
      </div> 
      <div id="minus" class="minus" onclick="handleItemChange(${product.id},${index}, 'minus')">
        <img id="img-minus-${productID}" class="img-minus" src="../images/Ellipse 2.png" alt="minus" >
        <span id="minus-span" class="minus-span">-</span>
      </div>
      <div id="number${productID}" class="number">
        <span id="n-span-${productID}" class="n-span" data-productID="productID">${product.quantity}</span> 
      </div>
      <div id="plus-${productID}" class="plus" onclick="handleItemChange(${product.id},${index},'plus')">
        <img id="img-plus-${productID}" src="../images/Ellipse 3.png" alt="plus" >
        <span id="plus-span" class="plus-span">+</span>
      </div>
      <div id="div-move-${productID}" class="div-move">
      <div id="price" class="price">
        <p id="p-price-${productID}" class="p-price">
        R$${product.price},00</p>
      </div>
      <div id="delete" class="delete">
        <span id="s-delete" class="s-delete" onclick="productDelete(${index})">Deletar</span>
      </div>
    </div>
  `;
}

function updateProduct() {
  content.innerHTML = ''
  calculateTotalPriceAndQuantity()
  const carts = getLocalStorage("carts");
  return carts.forEach(printProduct);
}
