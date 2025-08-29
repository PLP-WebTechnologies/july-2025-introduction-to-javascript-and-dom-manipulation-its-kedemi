// ==========================
// Part 1: JavaScript Basics
// ==========================
let age = 20;
let name = "Ezekiel";

if (age >= 18) {
  console.log(name + " is an adult.");
} else {
  console.log(name + " is a minor.");
}

// ==========================
// Part 2: Functions
// ==========================
function greetUser(userName) {
  return `Hello, ${userName}! Welcome 🚀`;
}

function calculateTotal(price, quantity) {
  return price * quantity;
}

console.log("Total:", calculateTotal(50, 3));

// ==========================
// Part 3: Loops
// ==========================
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}

let fruits = ["🍎", "🍌", "🍊"];
fruits.forEach(fruit => console.log("Fruit:", fruit));

// ==========================
// Part 4: DOM Manipulation
// ==========================
const greetBtn = document.getElementById("greetBtn");
const greeting = document.getElementById("greeting");
const userNameInput = document.getElementById("userName");
const loopList = document.getElementById("loopList");
const toggleBtn = document.getElementById("toggleBtn");

greetBtn.addEventListener("click", () => {
  let userName = userNameInput.value;
  greeting.textContent = greetUser(userName);
});

for (let i = 1; i <= 5; i++) {
  let li = document.createElement("li");
  li.textContent = "Item " + i;
  loopList.appendChild(li);
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
});
