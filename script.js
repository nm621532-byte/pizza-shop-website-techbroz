const pizzas = [
  ["Margherita", 199, "🍕"],
  ["Veggie", 249, "🫑"],
  ["Farmhouse", 299, "🌽"],
  ["Paneer Tikka", 349, "🧀"],
];
let n = 0;
menu.innerHTML = pizzas.map(
  ([name, price, icon]) =>
    `<div class="card">
      <span>${icon}</span><br>
      <b>${name}</b>
      <p>₹${price} only</p>
      <button onclick="add()">Add 🛒</button>
    </div>`
).join("");
function add() {
  count.textContent = ++n;
}
