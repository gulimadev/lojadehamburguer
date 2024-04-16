const menu = document.getElementById("menu");
const cardBtn = document.getElementById("card-btn");
const cardModal = document.getElementById("card-modal");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotal = document.getElementById("cart-total");
const checkoutBtn = document.getElementById("checkout-btn");
const closeModalBtn = document.getElementById("close-modal-btn");
const cartCounter = document.getElementById("cart-counter");
const addressInput = document.getElementById("addresss");
const addressWarn = document.getElementById("address-warn");

cardBtn.addEventListener("click", () => {
  cardModal.style.display = "flex";
}      );