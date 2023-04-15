//nomes variáveis e das funções, e resto
//separar funções
//layouts




const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));
const setLocalStorage = (key, item) => localStorage.setItem(key, JSON.stringify(item));
document.addEventListener("DOMContentLoaded", updateProduct)
const priceinfo = document.getElementById("priceinfo");
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

}

function productDelete(index) {
        console.log("teste")
        const upProducts = getLocalStorage("up-products")
         upProducts.splice(index)
         setLocalStorage("up-products", upProducts)
         
         location.reload()  
}
function printProduct(product) {
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
            
        </div>
        <div id="mais${index-1}" class="mais" onclick="plus(${index})">
            <img id="imgplus${index-1}" src="../images/Ellipse 3.png" alt="mais" >
            <span id="maisspan" class="maisspan">+</span>
        </div>
        <div id="price" class="price">
        <p id="pprice${index-1}" class="pprice">
        R$${getLocalStorage("up-products")[index-1].price},00
            
        </p>
        </div>
        <div id="deletar" class="deletar">

        <span id="sdeletar" class="sdeletar" onclick="productDelete(${index-1})">Deletar</span>

        </div>
        <div id="priceinfo${index-1}" class="priceinfo">
        <p> SubTotal ${getLocalStorage("up-products")[index-1].quantity} 
        itens R$ ${getLocalStorage("up-products")[index-1].price}</p>
        </div>
    

 
    `
}
function updateProduct() {
    dataBase = getLocalStorage("up-products")
 dataBase.forEach(printProduct)
}

