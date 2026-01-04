const products = [
  {
    id: "1",
    nama: "Varian: Frambozen",
    deskripsi: "Perpaduan manis dan asam frambozen yang segar, bikin minuman terasa ringan dan menyenangkan.",
    gambar: "../img/variant/frambozen.png",
    price: "Rp 21.000",
    bg: "#ff4d4d"
  },
  {
    id: "2",
    nama: "Varian: Rozen",
    deskripsi: "Aroma bunga rozen yang lembut dengan rasa manis elegan, pas untuk sajian istimewa.",
    gambar: "../img/variant/rozen.png",
    price: "Rp 21.000",
    bg: "#ff4d4d"
  },
  {
    id: "3",
    nama: "Varian: Jeruk Keprok",
    deskripsi: "Rasa jeruk yang cerah dan menyegarkan, cocok diminum kapan saja untuk melepas dahaga.",
    gambar: "../img/variant/jeruk_keprok.png",
    price: "Rp 21.000",
    bg: "#FB692F"
  },
  {
    id: "4",
    nama: "Varian: Sirup Jahe",
    deskripsi: "Hangatnya jahe berpadu dengan manis alami, memberi sensasi nyaman di setiap tegukan.",
    gambar: "../img/variant/jahe.png",
    price: "Rp 21.000",
    bg: "#C68642"
  },
  {
    id: "5",
    nama: "Varian: Melon",
    deskripsi: "Manis lembut dan segar khas melon, memberikan rasa ringan yang menenangkan.",
    gambar: "../img/variant/melon.png",
    price: "Rp 21.000",
    bg: "#50C878"
  },
  {
    id: "6",
    nama: "Varian: Lemon",
    deskripsi: "Kesegaran lemon dengan sentuhan asam yang seimbang, bikin minuman terasa lebih hidup.",
    gambar: "../img/variant/lemon.png",
    price: "Rp 21.000",
    bg: "#C9C84A"
  },
  {
    id: "7",
    nama: "Varian: Kawis",
    deskripsi: "Rasa unik kawis yang segar dan khas, memberikan sensasi berbeda dari citrus biasa.",
    gambar: "../img/variant/kawis.png",
    price: "Rp 21.000",
    bg: "#483C32"
  },
  {
    id: "8",
    nama: "Varian: Mocca",
    deskripsi: "Perpaduan kopi dan cokelat yang lembut, menghadirkan rasa hangat dan kaya.",
    gambar: "../img/variant/mocca.png",
    price: "Rp 21.000",
    bg: "#483C32"
  },
  {
    id: "9",
    nama: "Varian: Leci",
    deskripsi: "Manis segar leci dengan aroma khas yang lembut dan menyenangkan.",
    gambar: "../img/variant/leci.png",
    price: "Rp 21.000",
    bg: "#F4A7B9"
  },
  {
    id: "10",
    nama: "Varian: Nanas",
    deskripsi: "Segarnya nanas tropis dengan rasa manis-asam yang menyegarkan.",
    gambar: "../img/variant/nanas.png",
    price: "Rp 21.000",
    bg: "#D1B845"
  },
  {
    id: "11",
    nama: "Varian: Mangga",
    deskripsi: "Manis legit mangga matang, menghadirkan rasa tropis yang kaya.",
    gambar: "../img/variant/mangga.png",
    price: "Rp 21.000",
    bg: "#D9A441"
  },
  {
    id: "12",
    nama: "Varian: Jambu",
    deskripsi: "Rasa jambu yang segar dan ringan, pas untuk minuman sehari-hari.",
    gambar: "../img/variant/jambu.png",
    price: "Rp 21.000",
    bg: "#E84A5F"
  },
  {
    id: "13",
    nama: "Varian: Frambozen",
    deskripsi: "Perpaduan manis dan asam frambozen yang segar, bikin minuman terasa ringan dan menyenangkan.",
    gambar: "../img/plastic/frambozen.png",
    price: "Rp 20.500",
    bg: "#ff4d4d"
  },
  {
    id: "14",
    nama: "Varian: Rozen",
    deskripsi: "Aroma bunga rozen yang lembut dengan rasa manis elegan, pas untuk sajian istimewa.",
    gambar: "../img/plastic/rozen.png",
    price: "Rp 20.500",
    bg: "#ff4d4d"
  },
  {
    id: "15",
    nama: "Varian: Jeruk Keprok",
    deskripsi: "Rasa jeruk yang cerah dan menyegarkan, cocok diminum kapan saja untuk melepas dahaga.",
    gambar: "../img/plastic/jeruk_keprok.png",
    price: "Rp 20.500",
    bg: "#FB692F"
  },
  {
    id: "16",
    nama: "Varian: Mangga",
    deskripsi: "Manis legit mangga matang, menghadirkan rasa tropis yang kaya.",
    gambar: "../img/plastic/mangga.png",
    price: "Rp 20.500",
    bg: "#FFA500"
  },
  {
    id: "17",
    nama: "Varian: Melon",
    deskripsi: "Manis lembut dan segar khas melon, memberikan rasa ringan yang menenangkan.",
    gambar: "../img/plastic/melon.png",
    price: "Rp 20.500",
    bg: "#50C878"
  },
  {
    id: "18",
    nama: "Varian: Leci",
    deskripsi: "Manis segar leci dengan aroma khas yang lembut dan menyenangkan.",
    gambar: "../img/plastic/leci.png",
    price: "Rp 20.500",
    bg: "#F4A7B9"
  },
  {
    id: "19",
    nama: "Varian: Kawista",
    deskripsi: "Rasa unik kawis yang segar dan khas, memberikan sensasi berbeda dari citrus biasa.",
    gambar: "../img/plastic/kawista.png",
    price: "Rp 20.500",
    bg: "#483C32"
  },
  {
    id: "20",
    nama: "Varian: Nanas",
    deskripsi: "Segarnya nanas tropis dengan rasa manis-asam yang menyegarkan.",
    gambar: "../img/plastic/nanas.png",
    price: "Rp 20.500",
    bg: "#ffff00"
  }
];

const params = new URLSearchParams(window.location.search);
const id = params.get("id");
const product = products.find(p => p.id === id);

const burger = document.getElementById("burger");
const menu = document.getElementById("menu");
const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");

document.getElementById("year").textContent = new Date().getFullYear();

if (product) {
  document.getElementById("productName").innerText = product.nama;
  document.getElementById("productDesc").innerText = product.deskripsi;
  document.getElementById("productImg").src = product.gambar;
  document.getElementById("productPrice").innerText = product.price;

  const navbar = document.querySelector(".navbar");
  const bottle = document.querySelector(".detail-left");
  const footer = document.querySelector(".copyright");

  if (product.bg) {
    navbar.style.background = product.bg;
    bottle.style.background = product.bg;
    footer.style.background = product.bg;
  }
};

search.addEventListener("input", function () {
  const keyword = this.value.toLowerCase();

  cards.forEach(card => {
    const nama = card.dataset.name;
    card.style.display = nama.includes(keyword) ? "block" : "none";
  });
});

burger.addEventListener("click", () => {
  menu.classList.toggle("show");
});