const getLocalStorage = (key) => JSON.parse(localStorage.getItem(key)) ?? [];
const setLocalStorage = (key, item) =>
  localStorage.setItem(key, JSON.stringify(item));

const button = document.getElementById("button");
button.addEventListener("click", saveProduct);

function checkFields() {
  const form = document.getElementById("form");
  return form.reportValidity();
}

function saveProduct(event) {
  event.preventDefault();
  if (!checkFields()) {
    return null;
  }
  const name = document.getElementById("name").value;
  const price = document.getElementById("price").value;
  const image = document.getElementById("image").value;
  const data = getLocalStorage("products");

  const products = {
    name,
    price,
    image,
    quantity: 1,
    id: data.length
  };

  setLocalStorage("products", [...data, products]);

  const url = "pages/ecommerce.html";
  return window.open(url, "_self");
}
