
function init(){
  initEventListeners();
}

function initEventListeners(){
  let add_to_cart_btns = document.getElementsByClassName("add_to_cart_btn")
  for(let i = 0;i<add_to_cart_btns.length;i++){
    add_to_cart_btns[i].addEventListener("click",addCartItem)
  }
}

function addCartItem(){
  let cartItem = document.createElement("div");
  let shoppingCart = document.getElementsByClassName("shopping_cart")[0];
  cartItem.className = "cart_item";
  cartItem.innerHTML = "<p class=\"cart_col\">Item</p><p class=\"cart_col\">Name</p><p class=\"cart_col\">Quantity</p>";
  shoppingCart.append(cartItem);
}