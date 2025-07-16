import { createStore } from "redux";
import cartReducer from "../cartReducer";
import { addToCart, calculateTotal, removeFromCart } from "../actions";

const store = createStore(
  cartReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

const products = [
  { id: 1, name: "Phone", price: 12000 },
  { id: 2, name: "Laptop", price: 15000 },
  { id: 3, name: "Refrigerator", price: 85000 },
];

store.subscribe(() => {
  console.log(store.getState());
  // updateCart();
});

store.dispatch(addToCart({ id: 1, name: "Product A", price: 100 }));
store.dispatch(calculateTotal());
store.dispatch(addToCart({ id: 2, name: "Product B", price: 200 }));
store.dispatch(calculateTotal());
store.dispatch(addToCart({ id: 3, name: "Product C", price: 100 }));
store.dispatch(calculateTotal());
store.dispatch(removeFromCart(1));
store.dispatch(calculateTotal());

const productsContainer = document.querySelector("#products-container");
const cart = document.querySelector("#cart");
const total = document.querySelector("#total");

window.handleAdd = (productId) => {
  const product = products.find((product) => product.id === productId);
  store.dispatch(addToCart(product));
  store.dispatch(calculateTotal());
};

window.handleRemove = (productId) => {
  store.dispatch(removeFromCart(productId));
  store.dispatch(calculateTotal());
};

function renderProducts() {
  productsContainer.innerHTML = products.map((product) => {
    return `<li>${product.name} - Rs.${product.price} <button onClick="handleAdd(${product.id})">Add To Cart</button></li>`;
  });
}

function updateCart() {
  const state = store.getState();
  console.log(state);
  cart.innerHTML = state.cartItems
    .map((item) => {
      return `<li>${item.name} - Rs.${item.price} - ${item.quantity} <button onClick="handleRemove(${item.id})">Remove</button></li>`;
    })
    .join("");

  total.innerHTML = `Total: Rs.${state.total || 0}`;
}

renderProducts();
updateCart();
