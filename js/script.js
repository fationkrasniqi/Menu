"use strict";

/*
  Restaurant owner editing guide:
  1. Upload the product photo into the images folder.
  2. Add, edit, or remove one object in the products array below.
  3. Keep the category name matching one of the category buttons.
  The HTML menu cards update automatically.
*/

const products = [
  {
    id: 1,
    name: "Classic Burger",
    category: "Burgers",
    price: 5.99,
    image: "images/burger1.jpg",
    description: "Fresh beef burger with cheddar, crisp lettuce, tomato, and house sauce."
  },
  {
    id: 2,
    name: "Truffle Royale Burger",
    category: "Burgers",
    price: 9.49,
    image: "images/burger2.jpg",
    description: "Dry-aged beef, truffle aioli, caramelized onion, and aged Swiss cheese."
  },
  {
    id: 3,
    name: "Smoked BBQ Burger",
    category: "Burgers",
    price: 8.25,
    image: "images/burger3.jpg",
    description: "Charred patty, smoked bacon, barbecue glaze, pickles, and onion rings."
  },
  {
    id: 4,
    name: "Spicy Jalapeno Burger",
    category: "Burgers",
    price: 7.75,
    image: "images/burger4.jpg",
    description: "Pepper jack, jalapenos, chili mayo, lettuce, and fire-roasted salsa."
  },
  {
    id: 5,
    name: "Mushroom Melt Burger",
    category: "Burgers",
    price: 8.1,
    image: "images/burger5.jpg",
    description: "Sauteed mushrooms, garlic butter, provolone, and black pepper mayo."
  },
  {
    id: 6,
    name: "Blue Cheese Burger",
    category: "Burgers",
    price: 8.95,
    image: "images/burger6.jpg",
    description: "Beef patty, blue cheese crumble, arugula, onion jam, and mustard aioli."
  },
  {
    id: 7,
    name: "Crispy Chicken Burger",
    category: "Burgers",
    price: 7.95,
    image: "images/burger7.jpg",
    description: "Buttermilk chicken, slaw, pickles, and creamy herb dressing."
  },
  {
    id: 8,
    name: "Garden Halloumi Burger",
    category: "Burgers",
    price: 7.5,
    image: "images/burger8.jpg",
    description: "Grilled halloumi, roasted peppers, avocado, greens, and lemon yogurt."
  },
  {
    id: 9,
    name: "Margherita Pizza",
    category: "Pizza",
    price: 8.5,
    image: "images/pizza1.jpg",
    description: "San Marzano tomato, mozzarella, fresh basil, and extra virgin olive oil."
  },
  {
    id: 10,
    name: "Pepperoni Diavola",
    category: "Pizza",
    price: 10.25,
    image: "images/pizza2.jpg",
    description: "Pepperoni, chili flakes, mozzarella, tomato sauce, and oregano."
  },
  {
    id: 11,
    name: "Prosciutto Arugula",
    category: "Pizza",
    price: 11.75,
    image: "images/pizza3.jpg",
    description: "Prosciutto, arugula, parmesan, mozzarella, and balsamic glaze."
  },
  {
    id: 12,
    name: "Quattro Formaggi",
    category: "Pizza",
    price: 10.95,
    image: "images/pizza4.jpg",
    description: "Mozzarella, gorgonzola, parmesan, ricotta, and cracked black pepper."
  },
  {
    id: 13,
    name: "Wild Mushroom Pizza",
    category: "Pizza",
    price: 10.5,
    image: "images/pizza5.jpg",
    description: "Roasted mushrooms, thyme, garlic cream, mozzarella, and parsley."
  },
  {
    id: 14,
    name: "Smoked Chicken Pizza",
    category: "Pizza",
    price: 11.25,
    image: "images/pizza6.jpg",
    description: "Smoked chicken, red onion, roasted peppers, mozzarella, and barbecue sauce."
  },
  {
    id: 15,
    name: "Mediterranean Veggie",
    category: "Pizza",
    price: 9.95,
    image: "images/pizza7.jpg",
    description: "Olives, artichokes, peppers, cherry tomatoes, feta, and basil pesto."
  },
  {
    id: 16,
    name: "Black Olive Burrata",
    category: "Pizza",
    price: 12.25,
    image: "images/pizza8.jpg",
    description: "Creamy burrata, black olives, tomato confit, basil, and sea salt."
  },
  {
    id: 17,
    name: "Sparkling Citrus Spritz",
    category: "Drinks",
    price: 4.95,
    image: "images/drink1.jpg",
    description: "Orange, lemon, soda, rosemary, and a bright bitter finish."
  },
  {
    id: 18,
    name: "Noir Espresso Martini",
    category: "Drinks",
    price: 7.5,
    image: "images/drink2.jpg",
    description: "Fresh espresso, vanilla, coffee liqueur, and a silky crema top."
  },
  {
    id: 19,
    name: "Pomegranate Fizz",
    category: "Drinks",
    price: 5.25,
    image: "images/drink3.jpg",
    description: "Pomegranate, lime, mint, soda, and crushed ice."
  },
  {
    id: 20,
    name: "Ginger Basil Lemonade",
    category: "Drinks",
    price: 4.5,
    image: "images/drink4.jpg",
    description: "Pressed lemon, fresh basil, ginger syrup, and mineral water."
  },
  {
    id: 21,
    name: "Golden Negroni",
    category: "Drinks",
    price: 8.25,
    image: "images/drink5.jpg",
    description: "Gin, white vermouth, bittersweet aperitif, orange zest, and ice."
  },
  {
    id: 22,
    name: "Cucumber Mint Cooler",
    category: "Drinks",
    price: 4.75,
    image: "images/drink6.jpg",
    description: "Cucumber, mint, elderflower, lime, and sparkling water."
  },
  {
    id: 23,
    name: "House Red Wine",
    category: "Drinks",
    price: 6.25,
    image: "images/drink7.jpg",
    description: "Velvety red blend with dark fruit, spice, and a smooth finish."
  },
  {
    id: 24,
    name: "Iced Berry Tea",
    category: "Drinks",
    price: 3.95,
    image: "images/drink8.jpg",
    description: "Cold-brewed black tea, berries, lemon, and a touch of honey."
  },
  {
    id: 25,
    name: "Ribeye Steak",
    category: "Grilled Meat",
    price: 19.95,
    image: "images/grill1.jpg",
    description: "Charcoal-grilled ribeye with smoked salt, herb butter, and jus."
  },
  {
    id: 26,
    name: "Lamb Chops",
    category: "Grilled Meat",
    price: 18.5,
    image: "images/grill2.jpg",
    description: "Rosemary lamb chops with garlic yogurt and grilled lemon."
  },
  {
    id: 27,
    name: "Smoked Beef Ribs",
    category: "Grilled Meat",
    price: 17.95,
    image: "images/grill3.jpg",
    description: "Slow-smoked ribs with dark molasses glaze and pickled onion."
  },
  {
    id: 28,
    name: "Charred Chicken Skewers",
    category: "Grilled Meat",
    price: 12.95,
    image: "images/grill4.jpg",
    description: "Marinated chicken, roasted peppers, herbs, and lemon garlic sauce."
  },
  {
    id: 29,
    name: "Grilled Sausage Board",
    category: "Grilled Meat",
    price: 13.5,
    image: "images/grill5.jpg",
    description: "Artisan sausages with mustard, sauerkraut, and toasted sourdough."
  },
  {
    id: 30,
    name: "Peppercorn Sirloin",
    category: "Grilled Meat",
    price: 16.75,
    image: "images/grill6.jpg",
    description: "Sirloin steak with green peppercorn sauce and grilled vegetables."
  },
  {
    id: 31,
    name: "Mixed Grill Platter",
    category: "Grilled Meat",
    price: 22.95,
    image: "images/grill7.jpg",
    description: "Steak, chicken, sausage, lamb, grilled onions, and house sauces."
  },
  {
    id: 32,
    name: "Honey Chili Pork Belly",
    category: "Grilled Meat",
    price: 14.95,
    image: "images/grill8.jpg",
    description: "Crisp-edged pork belly with honey chili lacquer and sesame herbs."
  }
];

const categories = [
  { name: "All Items", icon: "✦" },
  { name: "Burgers", icon: "☰" },
  { name: "Pizza", icon: "◉" },
  { name: "Drinks", icon: "◌" },
  { name: "Grilled Meat", icon: "◆" }
];

const menuGrid = document.querySelector("#menuGrid");
const categoryFilters = document.querySelector("#categoryFilters");
const searchInput = document.querySelector("#menuSearch");
const emptyState = document.querySelector("#emptyState");
const resultCount = document.querySelector("#resultCount");
const loadingScreen = document.querySelector("#loadingScreen");

let activeCategory = "All Items";

function formatPrice(price) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD"
  }).format(price);
}

function getCategoryIcon(categoryName) {
  const category = categories.find((item) => item.name === categoryName);
  return category ? category.icon : "•";
}

function createCategoryButtons() {
  categoryFilters.innerHTML = categories
    .map(
      (category) => `
        <button
          class="category-button${category.name === activeCategory ? " is-active" : ""}"
          type="button"
          data-category="${category.name}"
          aria-pressed="${category.name === activeCategory}"
        >
          <span aria-hidden="true">${category.icon}</span>
          ${category.name}
        </button>
      `
    )
    .join("");
}

function createMenuCard(product, index) {
  const animationDelay = `${Math.min(index * 35, 420)}ms`;

  return `
    <article class="menu-card" style="animation-delay: ${animationDelay}">
      <div class="card-image">
        <img
          src="${product.image}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80';"
        />
        <span class="price-badge">${formatPrice(product.price)}</span>
      </div>
      <div class="card-body">
        <span class="category-pill">
          <span aria-hidden="true">${getCategoryIcon(product.category)}</span>
          ${product.category}
        </span>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
      </div>
    </article>
  `;
}

function getFilteredProducts() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  return products.filter((product) => {
    const matchesCategory =
      activeCategory === "All Items" || product.category === activeCategory;
    const searchableText = `${product.name} ${product.category} ${product.description}`.toLowerCase();
    const matchesSearch = searchableText.includes(searchTerm);

    return matchesCategory && matchesSearch;
  });
}

function renderMenu() {
  const filteredProducts = getFilteredProducts();

  menuGrid.innerHTML = filteredProducts
    .map((product, index) => createMenuCard(product, index))
    .join("");

  emptyState.hidden = filteredProducts.length > 0;
  resultCount.textContent = `${filteredProducts.length} item${
    filteredProducts.length === 1 ? "" : "s"
  } available`;
}

function setActiveCategory(categoryName) {
  activeCategory = categoryName;

  document.querySelectorAll(".category-button").forEach((button) => {
    const isActive = button.dataset.category === activeCategory;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  renderMenu();
}

categoryFilters.addEventListener("click", (event) => {
  const button = event.target.closest(".category-button");

  if (!button) {
    return;
  }

  setActiveCategory(button.dataset.category);
});

searchInput.addEventListener("input", renderMenu);

window.addEventListener("load", () => {
  window.setTimeout(() => {
    loadingScreen.classList.add("is-hidden");
  }, 450);
});

createCategoryButtons();
renderMenu();
