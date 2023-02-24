//ele vai executar tudo que está fora de uma função quando a página for recarregada?
//quando usar ou não o return
const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key));
const setLocalStorage = (key, item) => localStorage.setItem(key, JSON.stringify(item));
document.addEventListener("DOMContentLoaded", updateProduct)
const priceinfo = document.getElementById("priceinfo");
let cont = 1
//const queryString = window.location.search;
//const urlParams = new URLSearchParams(queryString);
//const product = urlParams.get('productid');
content = document.getElementById("content");
dataBase = getLocalStorage("up-products");
function plus(index, price) {
    
    //duvida
 
    //const não deixa declarar a variável sem mandar um valor
    //setLocalStorage("up-products", price[index].price = pricetwo)
    // não consigo tirar nan
    // por que com vírgula ele não converte
   
 
    const quantity = Number(document.getElementById(`nspan${index-1}`).innerText) + 1;
    document.getElementById(`nspan${index-1}`).innerText = quantity;
    newprice = {
        index:quantity,
        price: price

    }
    setLocalStorage(`unit${index}`, newprice)
    console.log(newprice)
    newunit = quantity
   // console.log(unit)
   // console.log(quantity)
   // newunit.push(quantity)
   console.log(index)
    //setLocalStorage(`unit${index}`, )
     price = getLocalStorage("up-products")[index-1].price;
     //price = parseFloat(price.replace(","), ("."));
     console.log(price)
         newprice = Number.parseInt(price*quantity)
     
//     newprice = price*cont;
    
    
//     //console.log(pricetwo)
//     console.log(cont)     
     const tprice = document.getElementById(`pprice${index-1}`);
//     console.log(tprice)
     tprice.innerHTML = `R$ ${newprice},00`
     // setLocalStorage("up-products", price[index].price = newprice) 
//     //const price = document.getElementById()
//     const number = document.getElementById(`number${index}`);
//   //  console.log(number)
  
//     number.innerHTML += `${cont}`
//    // const textproduct = document.getElementsByTagName("p");
//    // textproduct.innerHTML = `${pricetwo}`
    const priceinfo = document.getElementById("priceinfo")
    priceinfo.innerHTML = `<p> SubTotal ${quantity} 
    itens R$ ${price*quantity},00</p>`;
    }
   //ctrl ;
    
   

function minus(index) {
    
    cont = cont - 1
    if (cont < 1) {
        cont = 1
        return window.alert(`Você não pode diminuir mais que isso, 
        se você quiser deletar clique em deletar`)
        
    }
    //pricetwo = price[index].price
    //pricetwo = Number(pricetwo * 2)
    //console.log(pricetwo)
    
    //console.log(cont)
    
    price = getLocalStorage("up-products")[index].price
    newprice = parseFloat(price.replace(","), ("."));
    console.log(newprice)
    newprice = newprice*cont
    price = parseFloat(price.replace(","), ("."));
    //const price = document.getElementById()
    const number = document.getElementById(`number${index}`);
   // console.log(number)
    number.innerHTML = `${cont}`
   // console.log(index)
    const tprice = document.getElementById(`pprice${index}`);
    tprice.innerHTML = `R$ ${newprice},00`
    
    priceinfo.innerHTML = `<p> SubTotal ${cont} itens R$ ${price*cont},00`
}
function productDelete(index) {
        
        upProducts = getLocalStorage("up-products")
         upProducts.splice(index, 1)
         setLocalStorage("up-products", upProducts)
         location.reload()  
}
function printProduct(product) {
        index = document.getElementsByClassName("shoppingcars").length + 1
        console.log(index)
        content.innerHTML += `
    <div id="shoppingcars${index-1}" class="shoppingcars">
        <div id="productimage" class="productimage">
            <img src="${product.image}" alt="image">
        </div>      
        <div id="subtitle" class="subtitle">
            <h2>${product.name}</h2>
        </div> 
        <div id="menos" class="menos" onclick="minus(${index-1})">
            <img id="imgminus${index-1}" class="imgminus" src="../images/Ellipse 2.png" alt="menos" >
            <span id="menosspan" class="menosspan">-</span>
            </div>
            <div id="number${index-1}" class="number">
            <span id="nspan${index-1}" class="nspan" data-index="index"></span>
        </div>
        <div id="mais${index-1}" class="mais" onclick="plus(${index})">
            <img id="imgplus${index-1}" src="../images/Ellipse 3.png" alt="mais" >
            <span id="maisspan" class="maisspan">+</span>
        </div>
        <div id="price" class="price">
        <p id="pprice${index-1}" class="pprice">
            ${product.price},00
            
        </p>
        </div>
        <div id="deletar" class="deletar">

        <span id="sdeletar" class="sdeletar" onclick="productDelete(${index-1})">Deletar</span>

        </div>

    </div>
    `
    //alt seta baixo ou cima
}
function updateProduct() {
 dataBase.forEach(printProduct)
}

