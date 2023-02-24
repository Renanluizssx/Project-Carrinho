const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key)) ?? [];
const setLocalStorage = (key, item) => localStorage.setItem(key, JSON.stringify(item));
const button = document.getElementById("button");
button.addEventListener("click", OpenEcommercePage);
function checkfields() {
    const form = document.getElementById("form");
    return form.reportValidity();
}

function OpenEcommercePage(event) {
    event.preventDefault();
    if (!checkfields()) {
        return null;
    }
    const name = document.getElementById("name");
    const price = document.getElementById("price");
    const image = document.getElementById("image");
    const dataBase = {
            name:name.value,
            price:price.value,
            image:image.value

    };
    //console.log(DataBase)
    const data = getLocalStorage("database");
    setLocalStorage("database", [...data, dataBase]);
    
    const url = "../pages/ecommerce.html";
    window.open(url, "_self");

}   