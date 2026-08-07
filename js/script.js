"use strict";

/*
  Restaurant owner editing guide:
  1. Upload the product photo into the images folder.
  2. Add, edit, or remove one object in the products array below.
  3. Keep the category name matching one of the category buttons.
  The HTML menu cards update automatically.
*/

const products = [
  // { id: 1, name: "Burger Klasik", category: "Burgera", price: 2.3, image: "images/1.webp", description: "Burger klasik." },
  { id: 2, name: "Copza Pule me Sos Kerpudhe", category: "Grill", price: 4.5, image: "images/2.webp", description: "Copza pule me sos kerpudhe." },
  { id: 3, name: "Copza Pule me Sos Djegst", category: "Grill", price: 4.5, image: "images/3.webp", description: "Copza pule me sos djathi." },
  { id: 4, name: "Llokuma", category: "Mengjesi", price: 3, image: "images/4.webp", description: "Llokuma tradicionale." },
  { id: 31, name: "Omlet me perime", category: "Mengjesi", price: 2.80, image: "images/omleti 2.webp", description: "Omlet me Perime." },
  { id: 32, name: "Omlet ", category: "Mengjesi", price: 2.50, image: "images/omleti 1.webp", description: "Omlet." },
  { id: 33, name: "Pula ne tavë", category: "Grill", price: 5, image: "images/pula ntav.webp", description: "Pula ne tavë." },
  { id: 34, name: "Meze për 2 persona ", category: "Grill", price: 12, image: "images/mishi.webp", description: "Meze për 2 persona." },
  { id: 35, name: "Meze për 4 persona ", category: "Grill", price: 20, image: "images/per 8 persona.webp", description: "Meze për 4 persona." },
  { id: 36, name: "Kombinim mishi ", category: "Grill", price: 5, image: "images/kombinimi.webp", description: "Kombinim mishi." },
  { id: 37, name: "Pleskavic e mbushur ", category: "Grill", price: 4.50, image: "images/pleskavic e mbushu.webp", description: "Pleskavic e mbushur." },

  { id: 6, name: "Rizoto Pule", category: "Grill", price: 4, image: "images/6.webp", description: "Rizoto me pule." },
  { id: 8, name: "Pleskavic Klasike", category: "Grill", price: 4, image: "images/8.webp", description: "Pleskavic klasike." },
  { id: 9, name: "5 Qebapa n'Tave", category: "Grill", price: 3.5, image: "images/9.webp", description: "5 qebapa ne tave." },
  { id: 10, name: "7 Qebapa n'Tave", category: "Grill", price: 4.5, image: "images/10.webp", description: "7 qebapa ne tave." },
  { id: 11, name: "Mengjes i Shtepise EM", category: "Mengjesi", price: 3.5, image: "images/11.webp", description: "Mengjes i shtepise." },
  { id: 12, name: "Virshlle Shtepie", category: "Grill", price: 3.8, image: "images/12.webp", description: "Virshlle shtepie." },
  { id: 13, name: "Hamburger me Ve", category: "Burgera", price: 3.8, image: "images/13.webp", description: "Hamburger me veze." },
  { id: 14, name: "EM Burger", category: "Burgera", price: 3.5, image: "images/14.webp", description: "Burger i shtepise EM." },
  { id: 15, name: "Shnicell Pule", category: "Grill", price: 4.5, image: "images/15.webp", description: "Shnicell pule." },
  { id: 47, name: "Sandwich Pule", category: "Sandwicha & Samuna", price: 2.5, image: "images/17.webp", description: "Sandwich pule" },
    { id: 48, name: "Sandwich Tuna", category: "Sandwicha & Samuna", price: 2.5, image: "images/17.webp", description: "Sandwich tuna" },
    { id: 49, name: "Sandwich Proshut", category: "Sandwicha & Samuna", price: 2.5, image: "images/sandwich pershute.webp", description: "Sandwich mix." },

    { id: 50, name: "Sandwich Mix", category: "Sandwicha & Samuna", price: 3, image: "images/sandwich pershute.webp", description: "Sandwich mix." },

  { id: 18, name: "Hamburger me Pomfrit", category: "Burgera", price: 2.5, image: "images/18.webp", description: "Hamburger me pomfrit." },
  { id: 19, name: "Pizza Margarita", category: "Pizza", price: 3.5, image: "images/34.webp", description: "Pizza margarita." },
  { id: 20, name: "Pizza Tuna me Qepe", category: "Pizza", price: 4.5, image: "images/20.webp", description: "Pizza tuna me qepe." },
  { id: 21, name: "Specialitet Shtepie", category: "Grill", price: 8, image: "images/21.webp", description: "Specialitet i shtepise." },
  { id: 23, name: "Pizza Pershute", category: "Pizza", price: 4, image: "images/33.webp", description: "Pizza me pershute." },
    { id: 23, name: "Pizza Shpis", category: "Pizza", price: 4.50, image: "images/33.webp", description: "Pizza me pershute." },

  { id: 24, name: "Sallat Pule", category: "Sallata", price: 3.5, image: "images/24.webp", description: "Sallate me pule." },
    { id: 38, name: "Sallat Shope", category: "Sallata", price: 3, image: "images/sallata shope.webp", description: "Sallate shope." },

  { id: 51, name: "Samun Pershut/Sugjuk", category: "Sandwicha & Samuna", price: 2.5, image: "images/25.webp", description: "Samun me  pershut ose sugjuk." },
    { id: 52, name: "Samun Mix", category: "Sandwicha & Samuna", price: 3, image: "images/25.webp", description: "Samun me pule, pershut ose sugjuk." },

  { id: 26, name: "Spaghetti Boloneze", category: "Pasta", price: 4, image: "images/26.webp", description: "Spaghetti boloneze." },
  { id: 27, name: "Makarona Boloneze", category: "Pasta", price: 4, image: "images/27.webp", description: "Makarona boloneze." },
  { id: 28, name: "Makarona Karbonara", category: "Pasta", price: 4, image: "images/28.webp", description: "Makarona karbonara." },
  { id: 29, name: "7 Qebapa", category: "Grill", price: 4, image: "images/29.webp", description: "7 cope qebapa." },
  { id: 30, name: "5 Qebapa", category: "Grill", price: 3, image: "images/30.webp", description: "5 cope qebapa." },
    { id: 40, name: "Tortilla pule", category: "Tortilla", price: 4, image: "images/tortilla.webp", description: "Tortilla me pule." },
      { id: 41, name: "Tortilla viqi", category: "Tortilla", price: 5, image: "images/tortilla.webp", description: "Tortilla me pule." },




];

const categories = [
  { name: "Të gjitha", icon: "✦" },
  { name: "Burgera", icon: "☰" },
  { name: "Pasta", icon: "◉" },
  { name: "Pizza", icon: "◌" },
  { name: "Sandwicha & Samuna", icon: "◆" },
  { name: "Sallata", icon: "✿" },
  { name: "Mengjesi", icon: "☀" },
  { name: "Grill", icon: "▣" },
  { name: "Tortilla", icon: "▤" }
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
          width="900"
          height="900"
          tabindex="0"
          role="button"
          aria-label="Open ${product.name} image"
          loading="lazy"
          decoding="async"
          onerror="if (this.src.includes('.webp')) { this.src = this.src.replace('.webp', '.png'); return; } this.onerror = null; this.src='https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80';"
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

  const filteredProducts = products.filter((product) => {
    const matchesCategory =
      activeCategory === "Të gjitha" || product.category === activeCategory;
    const searchableText = `${product.name} ${product.category} ${product.description}`.toLowerCase();
    const matchesSearch = searchableText.includes(searchTerm);

    return matchesCategory && matchesSearch;
  });

  const sortById = (a, b) => a.id - b.id;

  if (activeCategory !== "Të gjitha") {
    return [...filteredProducts].sort(sortById);
  }

  const categoryOrder = categories
    .filter((category) => category.name !== "Të gjitha")
    .map((category) => category.name);

  const categoryIndexMap = new Map(
    categoryOrder.map((categoryName, index) => [categoryName, index])
  );

  return [...filteredProducts].sort((a, b) => {
    const categoryIndexA = categoryIndexMap.get(a.category) ?? Number.MAX_SAFE_INTEGER;
    const categoryIndexB = categoryIndexMap.get(b.category) ?? Number.MAX_SAFE_INTEGER;

    if (categoryIndexA !== categoryIndexB) {
      return categoryIndexA - categoryIndexB;
    }

    return sortById(a, b);
  });
}

function renderMenu() {
  const filteredProducts = getFilteredProducts();

  menuGrid.innerHTML = filteredProducts
    .map((product, index) => createMenuCard(product, index))
    .join("");

  if (emptyState) {
    emptyState.hidden = filteredProducts.length > 0;
  }
  resultCount.textContent = `${filteredProducts.length} item${
    filteredProducts.length === 1 ? "" : "s"
  } available`;
}

function scrollToMenuTop() {
  if (!menuGrid) {
    return;
  }

  const toolbar = document.querySelector(".menu-toolbar");
  const toolbarHeight = toolbar ? toolbar.offsetHeight : 0;
  const gridTop = menuGrid.getBoundingClientRect().top + window.scrollY;

  window.scrollTo({
    top: Math.max(gridTop - toolbarHeight - 10, 0),
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

