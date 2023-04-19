<<<<<<< HEAD
=======
//nomes variáveis e das funções, e resto
//separar funções
//layouts




>>>>>>> 2b628aa15988c0e7f841f7c3e2727bdfb71545cc
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
<<<<<<< HEAD
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
=======
function atualizartela() {
    dataBase.push({name:"teste",
    image:"imagem",
    quantity: quantity,
   newprice: newprice
 } )
}
content = document.getElementById("content");
dataBase = getLocalStorage("up-products");
function plus(index) {
    console.log(index-1)

 
    const quantity = getLocalStorage("up-products")[index-1].quantity + 1
    document.getElementById(`nspan${index-1}`).innerText = quantity;


 



   const  price = getLocalStorage("database")[index-1].price;
  
        const newprice = Number.parseInt(price*quantity)

     const tprice = document.getElementById(`pprice${index-1}`);

     tprice.innerHTML = `R$ ${newprice}`
   document.getElementById(`priceinfo${index-1}`).innerHTML= `
   <p> SubTotal ${quantity} 
   itens R$ ${newprice}</p>
   `
 
   const name = document.getElementById(`tagsubtitle${index-1}`).innerText;
  const image = document.getElementById(`image${index-1}`).src

   
   const dataBase = getLocalStorage("up-products")
   dataBase.splice(index-1)

  const newdataBase = {name:name,
    image:image,
    quantity: quantity,
    price: newprice
     }
     console.log(   quantity)
setLocalStorage("up-products", [...dataBase, newdataBase])
}

function minus(index) {
    const quantity = getLocalStorage("up-products")[index-1].quantity - 1
    document.getElementById(`nspan${index-1}`).innerText = quantity;
    price = getLocalStorage("database")[index-1].price;
        const newprice = Number.parseInt(price*quantity)

  
    const tprice = document.getElementById(`pprice${index-1}`);

    tprice.innerHTML = `R$ ${newprice}`

  teste = document.getElementById(`priceinfo${index-1}`).innerHTML= `
  <p> SubTotal ${quantity} 
  itens R$ ${newprice}</p>
  `
   console.log(teste)
  const name = document.getElementById(`tagsubtitle${index-1}`).innerText;
   const image = document.getElementById(`image${index-1}`).src;
  const dataBase = getLocalStorage("up-products");

  const newdataBase = {name:name,
    image:image,
    quantity: quantity,
    price: newprice
     }
     console.log(   quantity)
     // a revisar
//setLocalStorage("up-products", [...dataBase, newdataBase])

>>>>>>> 2b628aa15988c0e7f841f7c3e2727bdfb71545cc
}

function productDelete(index) {
<<<<<<< HEAD
  console.log("teste");
  const upProducts = getLocalStorage("up-products");
  upProducts.splice(index, 1);
  setLocalStorage("up-products", upProducts);

  location.reload();
  calculatetotal();
=======
        console.log("teste")
        const upProducts = getLocalStorage("up-products")
         upProducts.splice(index)
         setLocalStorage("up-products", upProducts)
         
         location.reload()  
>>>>>>> 2b628aa15988c0e7f841f7c3e2727bdfb71545cc
}

function printProduct(product) {
<<<<<<< HEAD
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
=======
        index = document.getElementsByClassName("shoppingcars").length + 1
        console.log(index)
        content.innerHTML += `
    <div id="shoppingcars${index-1}" class="shoppingcars">
        <div id="productimage${index-1}" class="productimage">
            <img id="image${index-1}" class="image" src="${product.image}" alt="image">
        </div>      
        <div id="subtitle${index-1}" class="subtitle">
            <h2 id="tagsubtitle${index-1}" class="tagsubtitle">${product.name}</h2>
        </div> 
        <div id="menos" class="menos" onclick="minus(${index})">
            <img id="imgminus${index-1}" class="imgminus" src="../images/Ellipse 2.png" alt="menos" >
            <span id="menosspan" class="menosspan">-</span>
            </div>
            <div id="number${index-1}" class="number">
            <span id="nspan${index-1}" class="nspan" data-index="index">${getLocalStorage("up-products")[index-1].quantity}</span>
>>>>>>> 2b628aa15988c0e7f841f7c3e2727bdfb71545cc
            
        </div>
        <div id="mais${index}" class="mais" onclick="plus(${index})">
            <img id="imgplus${index}" src="../images/Ellipse 3.png" alt="mais" >
            <span id="maisspan" class="maisspan">+</span>
        </div>
        <div id="price" class="price">
<<<<<<< HEAD
        <p id="pprice${index}" class="pprice">
        R$${getLocalStorage("up-products")[index].price},00
=======
        <p id="pprice${index-1}" class="pprice">
        R$${getLocalStorage("up-products")[index-1].price},00
>>>>>>> 2b628aa15988c0e7f841f7c3e2727bdfb71545cc
            
        </p>
        </div>
        <div id="deletar" class="deletar">

        <span id="sdeletar" class="sdeletar" onclick="productDelete(${index})">Deletar</span>

        </div>
<<<<<<< HEAD
       
    

 
    `;
}
function updateProduct() {
  const dataBase = getLocalStorage("up-products");
  dataBase.forEach(printProduct);
=======
        <div id="priceinfo${index-1}" class="priceinfo">
        <p> SubTotal ${getLocalStorage("up-products")[index-1].quantity} 
        itens R$ ${getLocalStorage("up-products")[index-1].price}</p>
        </div>
    

 
    `
}
function updateProduct() {
    dataBase = getLocalStorage("up-products")
 dataBase.forEach(printProduct)
>>>>>>> 2b628aa15988c0e7f841f7c3e2727bdfb71545cc
}
