const products = [
  { name: "Lipstick", price: 499, image: "https://via.placeholder.com/200x180?text=Lipstick" },
  { name: "Face Cream", price: 899, image: "https://via.placeholder.com/200x180?text=Face+Cream" },
  { name: "Foundation", price: 1299, image: "https://via.placeholder.com/200x180?text=Foundation" },
  { name: "Blush", price: 699, image: "https://via.placeholder.com/200x180?text=Blush" },
  { name: "Eyeliner", price: 299, image: "https://via.placeholder.com/200x180?text=Eyeliner" },
  { name: "Mascara", price: 349, image: "https://via.placeholder.com/200x180?text=Mascara" },
  { name: "Highlighter", price: 599, image: "https://via.placeholder.com/200x180?text=Highlighter" },
  { name: "Compact", price: 549, image: "https://via.placeholder.com/200x180?text=Compact" },
  { name: "Makeup Remover", price: 449, image: "https://via.placeholder.com/200x180?text=Remover" },
  { name: "Nail Polish", price: 199, image: "https://via.placeholder.com/200x180?text=Nail+Polish" },
  { name: "BB Cream", price: 499, image: "https://via.placeholder.com/200x180?text=BB+Cream" },
  { name: "Serum", price: 1099, image: "https://via.placeholder.com/200x180?text=Serum" },
  { name: "Sunscreen", price: 799, image: "https://via.placeholder.com/200x180?text=Sunscreen" },
  { name: "Hair Oil", price: 399, image: "https://via.placeholder.com/200x180?text=Hair+Oil" },
  { name: "Shampoo", price: 699, image: "https://via.placeholder.com/200x180?text=Shampoo" },
  { name: "Conditioner", price: 599, image: "https://via.placeholder.com/200x180?text=Conditioner" },
  { name: "Face Wash", price: 349, image: "https://via.placeholder.com/200x180?text=Face+Wash" },
  { name: "Body Lotion", price: 449, image: "https://via.placeholder.com/200x180?text=Body+Lotion" },
  { name: "Perfume", price: 999, image: "https://via.placeholder.com/200x180?text=Perfume" },
  { name: "Lip Balm", price: 199, image: "https://via.placeholder.com/200x180?text=Lip+Balm" },
  { name: "Toner", price: 599, image: "https://via.placeholder.com/200x180?text=Toner" },
  { name: "Eye Shadow", price: 799, image: "https://via.placeholder.com/200x180?text=Eye+Shadow" },
  { name: "Makeup Brush Set", price: 1299, image: "https://via.placeholder.com/200x180?text=Brush+Set" },
  { name: "Face Pack", price: 399, image: "https://via.placeholder.com/200x180?text=Face+Pack" },
  { name: "Lip Gloss", price: 299, image: "https://via.placeholder.com/200x180?text=Lip+Gloss" },
  { name: "Cuticle Oil", price: 199, image: "https://via.placeholder.com/200x180?text=Cuticle+Oil" },
  { name: "Hair Mask", price: 499, image: "https://via.placeholder.com/200x180?text=Hair+Mask" },
  { name: "Anti-Aging Cream", price: 1299, image: "https://via.placeholder.com/200x180?text=Anti-Aging+Cream" },
  { name: "Facial Kit", price: 1599, image: "https://via.placeholder.com/200x180?text=Facial+Kit" },
  { name: "Makeup Setting Spray", price: 799, image: "https://via.placeholder.com/200x180?text=Setting+Spray" },
  { name: "Charcoal Peel Off Mask", price: 599, image: "https://via.placeholder.com/200x180?text=Peel+Off+Mask" }
];

let cartCount = 0;
let totalPrice = 0;

function displayProducts() {
  const productList = document.getElementById("product-list");
  products.forEach((product, index) => {
    const card = document.createElement("div");
    card.className = "product-card";
    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}">
      <h2>${product.name}</h2>
      <p>₹${product.price}</p>
      <button onclick="addToCart(${index})">Add to Cart</button>
    `;
    productList.appendChild(card);
  });
}

function addToCart(index) {
  cartCount++;
  totalPrice += products[index].price;
  document.getElementById("cart-count").innerText = cartCount;
  document.getElementById("total-price").innerText = totalPrice;
  alert(`${products[index].name} added to cart!`);
}

window.onload = displayProducts;
// 1. Search box input logic
document.querySelector(".inp input").addEventListener("keyup", function () {
  const value = this.value.trim().toLowerCase();
  if (value.length > 1) {
    console.log(`User is searching for: ${value}`);
    alert(`Search triggered: "${value}"`);
  }
});

// 2. Wishlist icon (heart)
document.querySelector(".fa-heart").addEventListener("click", () => {
  alert("💖 Added to your wishlist!");
});

// 3. Smile icon click
document.querySelector(".fa-face-smile").addEventListener("click", () => {
  alert("😊 Thanks for visiting us!");
});

// 4. Clickable product images (category cards)
document.querySelectorAll(".card img").forEach((img, index) => {
  img.style.cursor = "pointer";
  img.addEventListener("click", () => {
    alert(`🛍️ You clicked on Category ${index + 1}`);
  });
});

// 5. Nav hover effect with JS (alternative to CSS)
document.querySelectorAll("nav p").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.color = "purple";
    item.style.fontWeight = "600";
  });
  item.addEventListener("mouseleave", () => {
    item.style.color = "";
    item.style.fontWeight = "";
  });
});

// 6. Deal image interaction
const dealImage = document.querySelector(".deal img");
if (dealImage) {
  dealImage.style.cursor = "pointer";
  dealImage.addEventListener("click", () => {
    alert("🎉 Deal of the day clicked!");
  });
}

// 7. Footer click demo
document.querySelectorAll(".footer .list p").forEach((link) => {
  link.style.cursor = "pointer";
  link.addEventListener("click", () => {
    alert(`Navigating to "${link.textContent}"...`);
  });
});
