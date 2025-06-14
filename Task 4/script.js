const products = [
  {
    name: "iPhone 14",
    category: "tech",
    price: 79999,
    rating: 4.8
  },
  {
    name: "Casual T-Shirt",
    category: "fashion",
    price: 499,
    rating: 4.2
  },
  {
    name: "Dell XPS 13",
    category: "tech",
    price: 114999,
    rating: 4.7
  },
  {
    name: "Slim Fit Jeans",
    category: "fashion",
    price: 1299,
    rating: 4.1
  },
  {
    name: "Bluetooth Earbuds",
    category: "tech",
    price: 2199,
    rating: 4.5
  },
  {
    name: "Hoodie Jacket",
    category: "fashion",
    price: 999,
    rating: 4.4
  }
];

const productList = document.getElementById("productList");
const categoryFilter = document.getElementById("categoryFilter");
const priceFilter = document.getElementById("priceFilter");
const sortFilter = document.getElementById("sortFilter");

function renderProducts(data) {
  productList.innerHTML = "";
  data.forEach(product => {
    const div = document.createElement("div");
    div.className = "product";
    div.innerHTML = `
      <h4>${product.name}</h4>
      <p><strong>Category:</strong> ${product.category}</p>
      <p><strong>Price:</strong> ₹${product.price.toLocaleString()}</p>
      <p><strong>Rating:</strong> ${product.rating} ⭐</p>
    `;
    productList.appendChild(div);
  });
}

function filterAndSortProducts() {
  let filtered = [...products];

  const category = categoryFilter.value;
  const price = priceFilter.value;
  const sort = sortFilter.value;

  if (category !== "all") {
    filtered = filtered.filter(p => p.category === category);
  }

  if (price === "low") {
    filtered = filtered.filter(p => p.price < 1000);
  } else if (price === "high") {
    filtered = filtered.filter(p => p.price >= 1000);
  }

  if (sort === "rating") {
    filtered.sort((a, b) => b.rating - a.rating);
  }

  renderProducts(filtered);
}

categoryFilter.addEventListener("change", filterAndSortProducts);
priceFilter.addEventListener("change", filterAndSortProducts);
sortFilter.addEventListener("change", filterAndSortProducts);

document.addEventListener("DOMContentLoaded", () => {
  renderProducts(products);
});