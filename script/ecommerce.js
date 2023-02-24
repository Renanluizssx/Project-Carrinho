const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key)) ?? [];
const setLocalStorage = (key, item) => localStorage.setItem(key, JSON.stringify(item));

//const image = document.getElementById("imageindex");
//.log(image).addEventListener("click", openIndex)
document.addEventListener("DOMContentLoaded", updateContent);
function printProduct(DataBase) {
    const index = document.getElementsByClassName("product").length + 1;
    console.log(index)
    const content = document.getElementById("content");
    content.innerHTML +=
     `<div id="product${index}" class="product"> 
    <div id="image${index}" class="image">
     <img id="imageimg${index} class="imageimg" src="${DataBase.image}">
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
    //console.log(dataBase)
}
function openIndex() {
    const url = "../index.html";
    window.open(url, "_self");
} 
function saveProduct(index) {

    dataBase = getLocalStorage("database")[index-1]
    //setLocalStorage("up-products", dataBase)
    console.log(index)
    updateProduct(dataBase, index)
    
    }      
    function updateProduct (dataBase, index) {

        
        const dataBaseProduct = getLocalStorage("up-products");
        
        price = dataBase.price
        const newDataBase = [dataBase]
        console.log(price)
        console.log(dataBase)
        console.log(index)

        const priceditals = {
            index:index,
            price: price
        }
        console.log(priceditals)
        //não entendi
        setLocalStorage("up-products", [...newDataBase, ...dataBaseProduct]) 
    //    productDataBase = {
    //        index:index,
     //       price:dataBaseProduct.price
        //}
        const url = "../pages/carrinho.html";  
        window.open(url)
        //[...dataBaset, ...dataBaseProduct]

    }

