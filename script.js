const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

const meals = {
  soup: [
    { name: "Tomato Soup", desc: "Dadlı və ədviyyəli pomidor şorbası.", price: "6 AZN" },
    { name: "Chicken Soup", desc: "Təbii toyuq bulyonlu şorba.", price: "7 AZN" },
  ],
  pizza: [
    { name: "Margherita", desc: "Mozzarella və təzə reyhan ilə klassik pizza.", price: "10 AZN" },
    { name: "Pepperoni", desc: "Əsl italyan pepperoni və pendir.", price: "12 AZN" },
  ],
  dessert: [
    { name: "Chocolate Cake", desc: "Kremli, tünd şokoladlı tort.", price: "8 AZN" },
    { name: "Cheesecake", desc: "Vanilli, yumşaq cheesecake.", price: "9 AZN" },
  ],
  drink: [
    { name: "Lemonade", desc: "Təbii limon suyu ilə sərin içki.", price: "4 AZN" },
    { name: "Coffee", desc: "Təzə qəhvə dənələrindən espresso.", price: "5 AZN" },
  ],
};

const buttons = document.querySelectorAll(".cat-btn");
const menuContainer = document.getElementById("menu-items");

buttons.forEach(btn => {
  btn.addEventListener("click", () => {
    const category = btn.dataset.category;
    showMeals(category);
  });
});

function showMeals(category) {
  menuContainer.innerHTML = "";
  meals[category].forEach(item => {
    const card = document.createElement("div");
    card.classList.add("menu-card");
    card.innerHTML = `
      <h4>${item.name}</h4>
      <p>${item.desc}</p>
      <p class="price">${item.price}</p>
    `;
    menuContainer.appendChild(card);
  });
}