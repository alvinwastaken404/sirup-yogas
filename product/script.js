const products = [
  {
    id: "1",
    name: "Varian: Frambozen",
    volume: "600mL",
    price: "Rp 21.000",
    image: "../img/variant/frambozen.png"
  },
  {
    id: "2",
    name: "Varian: Rozen",
    volume: "600mL",
    price: "Rp 21.000",
    image: "../img/variant/rozen.png"
  },
  {
    id: "3",
    name: "Varian: Jeruk Keprok",
    volume: "600mL",
    price: "Rp 21.000",
    image: "../img/variant/jeruk_keprok.png"
  },
  {
    id: "4",
    name: "Varian: Sirup Jahe",
    volume: "600mL",
    price: "Rp 21.000",
    image: "../img/variant/jahe.png"
  },
  {
    id: "5",
    name: "Varian: Melon",
    volume: "600mL",
    price: "Rp 21.000",
    image: "../img/variant/melon.png"
  },
  {
    id: "6",
    name: "Varian: Lemon",
    volume: "600mL",
    price: "Rp 21.000",
    image: "../img/variant/lemon.png"
  },
  {
    id: "7",
    name: "Varian: Kawista",
    volume: "600mL",
    price: "Rp 21.000",
    image: "../img/variant/kawis.png"
  },
  {
    id: "8",
    name: "Varian: Mocca",
    volume: "600mL",
    price: "Rp 21.000",
    image: "../img/variant/mocca.png"
  },
  {
    id: "9",
    name: "Varian: Leci",
    volume: "600mL",
    price: "Rp 21.000",
    image: "../img/variant/leci.png"
  },
  {
    id: "10",
    name: "Varian: Nanas",
    volume: "600mL",
    price: "Rp 21.000",
    image: "../img/variant/nanas.png"
  },
  {
    id: "11",
    name: "Varian: Mangga",
    volume: "600mL",
    price: "Rp 21.000",
    image: "../img/variant/mangga.png"
  },
  {
    id: "12",
    name: "Varian: Jambu",
    volume: "600mL",
    price: "Rp 21.000",
    image: "../img/variant/jambu.png"
  },
  {
    id: "13",
    name: "Varian: Frambozen",
    volume: "600mL",
    price: "Rp 20.500",
    image: "../img/plastic/frambozen.png"
  },
  {
    id: "14",
    name: "Varian: Rozen",
    volume: "600mL",
    price: "Rp 20.500",
    image: "../img/plastic/rozen.png"
  },
  {
    id: "15",
    name: "Varian: Jeruk Keprok",
    volume: "600mL",
    price: "Rp 20.500",
    image: "../img/plastic/jeruk_keprok.png"
  },
  {
    id: "16",
    name: "Varian: Mangga",
    volume: "600mL",
    price: "Rp 20.500",
    image: "../img/plastic/mangga.png"
  },
  {
    id: "17",
    name: "Varian: Melon",
    volume: "600mL",
    price: "Rp 20.500",
    image: "../img/plastic/melon.png"
  },
  {
    id: "18",
    name: "Varian: Leci",
    volume: "600mL",
    price: "Rp 20.500",
    image: "../img/plastic/leci.png"
  },
  {
    id: "19",
    name: "Varian: Kawista",
    volume: "600mL",
    price: "Rp 20.500",
    image: "../img/plastic/kawista.png"
  },
  {
    id: "20",
    name: "Varian: Nanas",
    volume: "600mL",
    price: "Rp 20.500",
    image: "../img/plastic/nanas.png"
  }
]

document.getElementById("year").textContent = new Date().getFullYear();

const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

burger.addEventListener("click", () => {
  menu.classList.toggle("show");
});

const itemsPerPage = 6;
let currentPage = 1;
let filteredProducts = [...products];

const grid = document.getElementById("productGrid");
const pagination = document.getElementById("pagination");
const searchInput = document.getElementById("searchInput");

function renderProducts() {
  grid.innerHTML = "";
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;

  filteredProducts.slice(start, end).forEach(p => {
    grid.innerHTML += `
      <div class="card">
          <img src="${p.image}">
          <div class="card-body">
            <small>${p.volume}</small>
            <h4>${p.name}</h4>
            <div class="bottom">
              <span class="price">${p.price}</span>
              <a class="detail-btn" href="../details/detail.html?id=${p.id}">Detail</a>
            <div>
          </div>
      </div>
    `;
  });
}

function renderPagination() {
  pagination.innerHTML = "";
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  for (let i = 1; i <= totalPages; i++) {
    pagination.innerHTML += `
      <button class="${i === currentPage ? "active" : ""}" 
        onclick="goToPage(${i})">${i}</button>
    `;
  }
}

function goToPage(page) {
  currentPage = page;
  renderProducts();
  renderPagination();
}

searchInput.addEventListener("input", () => {
  const keyword = searchInput.value.toLowerCase();
  filteredProducts = products.filter(p =>
    p.name.toLowerCase().includes(keyword)
  );
  currentPage = 1;
  renderProducts();
  renderPagination();
});

renderProducts();
renderPagination();
