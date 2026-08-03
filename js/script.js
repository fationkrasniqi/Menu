"use strict";

/*
  Restaurant owner editing guide:
  1. Upload the product photo into the images folder.
  2. Add, edit, or remove one object in the products array below.
  3. Keep the category name matching one of the category buttons.
  The HTML menu cards update automatically.
*/

const products = [
  // { id: 1, name: "Burger Klasik", category: "Burgera", price: 2.3, image: "images/1.png", description: "Burger klasik." },
  { id: 2, name: "Copza Pule me Sos Kerpudhe", category: "Grill", price: 4.5, image: "images/2.png", description: "Copza pule me sos kerpudhe." },
  { id: 3, name: "Copza Pule me Sos Djegst", category: "Grill", price: 4.5, image: "images/3.png", description: "Copza pule me sos djathi." },
  { id: 4, name: "Llokuma", category: "Mengjesi", price: 3, image: "images/4.png", description: "Llokuma tradicionale." },
  { id: 6, name: "Rizoto Pule", category: "Grill", price: 4, image: "images/6.png", description: "Rizoto me pule." },
  { id: 8, name: "Pleskavic Klasike", category: "Grill", price: 4, image: "images/8.png", description: "Pleskavic klasike." },
  { id: 9, name: "5 Qebapa n'Tave", category: "Grill", price: 3.5, image: "images/9.png", description: "5 qebapa ne tave." },
  { id: 10, name: "7 Qebapa n'Tave", category: "Grill", price: 4.5, image: "images/10.png", description: "7 qebapa ne tave." },
  { id: 11, name: "Mengjes i Shtepise EM", category: "Mengjesi", price: 3.5, image: "images/11.png", description: "Mengjes i shtepise." },
  { id: 12, name: "Virshlle Shtepie", category: "Grill", price: 3.8, image: "images/12.png", description: "Virshlle shtepie." },
  { id: 13, name: "Hamburger me Ve", category: "Burgera", price: 3.8, image: "images/13.png", description: "Hamburger me veze." },
  { id: 14, name: "EM Burger", category: "Burgera", price: 3.5, image: "images/14.png", description: "Burger i shtepise EM." },
  { id: 15, name: "Shnicell Pule", category: "Grill", price: 4.5, image: "images/15.png", description: "Shnicell pule." },
  { id: 17, name: "Sandwich Pule/Tuna/Pershut", category: "Sandwicha & Samuna", price: 2.5, image: "images/17.png", description: "Sandwich pule, tuna ose pershut." },
    { id: 32, name: "Sandwich Mix", category: "Sandwicha & Samuna", price: 3, image: "images/17.png", description: "Sandwich pule, tuna ose pershut." },

  { id: 18, name: "Hamburger me Pomfrit", category: "Burgera", price: 2.5, image: "images/18.png", description: "Hamburger me pomfrit." },
  { id: 19, name: "Pizza Margarita", category: "Pizza", price: 3.5, image: "images/34.png", description: "Pizza margarita." },
  { id: 20, name: "Pizza Tuna me Qepe", category: "Pizza", price: 4.5, image: "images/20.png", description: "Pizza tuna me qepe." },
  { id: 21, name: "Specialitet Shtepie", category: "Grill", price: 8, image: "images/21.png", description: "Specialitet i shtepise." },
  { id: 23, name: "Pizza Pershute", category: "Pizza", price: 4, image: "images/33.png", description: "Pizza me pershute." },
    { id: 23, name: "Pizza Shpis", category: "Pizza", price: 4.50, image: "images/33.png", description: "Pizza me pershute." },

  { id: 24, name: "Sallat Pule", category: "Sallata", price: 3.5, image: "images/24.png", description: "Sallate me pule." },
  { id: 25, name: "Samun Pershut/Sugjuk", category: "Sandwicha & Samuna", price: 2.5, image: "images/25.png", description: "Samun me  pershut ose sugjuk." },
    { id: 31, name: "Samun Mix", category: "Sandwicha & Samuna", price: 3, image: "images/25.png", description: "Samun me pule, pershut ose sugjuk." },

  { id: 26, name: "Spaghetti Boloneze", category: "Pasta", price: 4, image: "images/26.png", description: "Spaghetti boloneze." },
  { id: 27, name: "Makarona Boloneze", category: "Pasta", price: 4, image: "images/27.png", description: "Makarona boloneze." },
  { id: 28, name: "Makarona Karbonara", category: "Pasta", price: 4, image: "images/28.png", description: "Makarona karbonara." },
  { id: 29, name: "7 Qebapa", category: "Grill", price: 4, image: "images/29.png", description: "7 cope qebapa." },
  { id: 30, name: "5 Qebapa", category: "Grill", price: 3, image: "images/30.png", description: "5 cope qebapa." }
];

const categories = [
  { name: "Të gjitha", icon: "✦" },
  { name: "Burgera", icon: "☰" },
  { name: "Pasta", icon: "◉" },
  { name: "Pizza", icon: "◌" },
  { name: "Sandwicha & Samuna", icon: "◆" },
  { name: "Sallata", icon: "✿" },
  { name: "Mengjesi", icon: "☀" },
  { name: "Grill", icon: "▣" }
];

const menuGrid = document.querySelector("#menuGrid");
const menuSection = document.querySelector(".menu-section");
const categoryFilters = document.querySelector("#categoryFilters");
const searchInput = document.querySelector("#menuSearch");
const emptyState = document.querySelector("#emptyState");
const resultCount = document.querySelector("#resultCount");
const loadingScreen = document.querySelector("#loadingScreen");

const imageLightbox = createImageLightbox();

let activeCategory = "Të gjitha";

function formatPrice(price) {
  return new Intl.NumberFormat("de-DE", {
    style: "currency",
    currency: "EUR"
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
          class="menu-image"
          src="${product.image}"
          alt="${product.name}"
          tabindex="0"
          role="button"
          aria-label="Open ${product.name} image"
          loading="lazy"
          onerror="this.src='https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80';"
        />
        <span class="price-badge">${formatPrice(product.price)}</span>
      </div>
      <div class="card-body">
        <h3>${product.name}</h3>
      </div>
    </article>
  `;
}

function createImageLightbox() {
  const lightbox = document.createElement("div");
  lightbox.className = "image-lightbox";
  lightbox.setAttribute("aria-hidden", "true");

  lightbox.innerHTML = `
    <button class="lightbox-close" type="button" aria-label="Close image">X</button>
    <img class="lightbox-image" src="" alt="" />
  `;

  document.body.append(lightbox);

  return {
    container: lightbox,
    image: lightbox.querySelector(".lightbox-image")
  };
}

function openImageLightbox(src, altText) {
  imageLightbox.image.src = src;
  imageLightbox.image.alt = altText;
  imageLightbox.container.classList.add("is-open");
  imageLightbox.container.setAttribute("aria-hidden", "false");
  document.body.classList.add("lightbox-open");
}

function closeImageLightbox() {
  imageLightbox.container.classList.remove("is-open");
  imageLightbox.container.setAttribute("aria-hidden", "true");
  imageLightbox.image.src = "";
  imageLightbox.image.alt = "";
  document.body.classList.remove("lightbox-open");
}

function getFilteredProducts() {
  const searchTerm = searchInput.value.trim().toLowerCase();

  return products.filter((product) => {
    const matchesCategory =
      activeCategory === "Të gjitha" || product.category === activeCategory;
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

function scrollToMenuTop() {
  if (!menuSection) {
    return;
  }

  const toolbar = document.querySelector(".menu-toolbar");
  const toolbarHeight = toolbar ? toolbar.offsetHeight : 0;
  const sectionTop = menuSection.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: Math.max(sectionTop - toolbarHeight - 10, 0),
    behavior: "smooth"
  });
}

function setActiveCategory(categoryName, shouldScroll = false) {
  activeCategory = categoryName;

  document.querySelectorAll(".category-button").forEach((button) => {
    const isActive = button.dataset.category === activeCategory;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });

  renderMenu();

  if (shouldScroll) {
    scrollToMenuTop();
  }
}

categoryFilters.addEventListener("click", (event) => {
  const button = event.target.closest(".category-button");

  if (!button) {
    return;
  }

  setActiveCategory(button.dataset.category, true);
});

searchInput.addEventListener("input", renderMenu);

menuGrid.addEventListener("click", (event) => {
  const image = event.target.closest(".menu-image");

  if (!image) {
    return;
  }

  openImageLightbox(image.src, image.alt);
});

menuGrid.addEventListener("keydown", (event) => {
  const image = event.target.closest(".menu-image");

  if (!image) {
    return;
  }

  if (event.key === "Enter" || event.key === " ") {
    event.preventDefault();
    openImageLightbox(image.src, image.alt);
  }
});

imageLightbox.container.addEventListener("click", (event) => {
  const clickedBackdrop = event.target === imageLightbox.container;
  const clickedCloseButton = event.target.closest(".lightbox-close");

  if (clickedBackdrop || clickedCloseButton) {
    closeImageLightbox();
  }
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && imageLightbox.container.classList.contains("is-open")) {
    closeImageLightbox();
  }
});

window.addEventListener("load", () => {
  window.setTimeout(() => {
    loadingScreen.classList.add("is-hidden");
  }, 450);
});

createCategoryButtons();
renderMenu();
