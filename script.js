const search = document.getElementById("search");
const cards = document.querySelectorAll(".card");
const burger = document.getElementById("burger");
const menu = document.getElementById("menu");

document.getElementById("year").textContent = new Date().getFullYear();

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

const slides = [
  {
    title: "FRAMBOZEN",
    variant: "Varian: frambozen",
    price: "Rp 21.000",
    bottle: "img/hero/frambozen/sirup.png",
    fruits: [
      "img/hero/frambozen/raspb.png",
      "img/hero/frambozen/raspb2.png",
      "img/hero/frambozen/raspb3.png"
    ],
    navbar: "rgba(255,77,77,1)",
    positions: [
      { left: "50%", top: "-35%" },
      { right: "15%", top: "17%" },
      { left: "10%", top: "-10%" }
    ]
  },
  {
    title: "ROZEN",
    variant: "Varian: rozen",
    price: "Rp 21.000",
    bottle: "img/hero/rozen/sirup.png",
    fruits: [
      "img/hero/rozen/rozen.png",
      "img/hero/rozen/rozen2.png",
      "img/hero/rozen/rozen3.png"
    ],
    navbar: "rgba(255,77,77,1)",
    positions: [
      { left: "50%", top: "-32%" },
      { right: "15%", top: "20%" },
      { left: "10%", top: "-15%" }
    ]
  },
  {
    title: "JAHE SIRUP",
    variant: "Varian: jahe sirup",
    price: "Rp 30.000",
    bottle: "img/hero/jahe/sirup.png",
    fruits: [
      "img/hero/jahe/ginger.png",
      "img/hero/jahe/ginger2.png",
      "img/hero/jahe/ginger3.png"
    ],
    navbar: "rgba(196,121,41,1)",
    positions: [
      { left: "50%", top: "-32%" },
      { right: "15%", top: "20%" },
      { left: "10%", top: "-15%" }
    ]
  },
  {
    title: "JERUK KEPROK",
    variant: "Varian: jeruk keprok",
    price: "Rp 21.000",
    bottle: "img/hero/jeruk/sirup.png",
    fruits: [
      "img/hero/jeruk/jeruk.png",
      "img/hero/jeruk/jeruk2.png",
      "img/hero/jeruk/jeruk3.png"
    ],
    navbar: "rgba(255, 124, 17, 1)",
    positions: [
      { left: "50%", top: "-32%" },
      { right: "15%", top: "20%" },
      { left: "10%", top: "-15%" }
    ]
  },
  {
    title: "MELON",
    variant: "Varian: melon",
    price: "Rp 21.000",
    bottle: "img/hero/melon/sirup.png",
    fruits: [
      "img/hero/melon/melon.png",
      "img/hero/melon/melon2.png",
      "img/hero/melon/melon3.png"
    ],
    navbar: "#50C878",
    positions: [
      { left: "50%", top: "-32%" },
      { right: "15%", top: "30%" },
      { left: "10%", top: "-5%" }
    ]
  },
  {
    title: "LEMON",
    variant: "Varian: lemon",
    price: "Rp 21.000",
    bottle: "img/hero/lemon/sirup.png",
    fruits: [
      "img/hero/lemon/lemon.png",
      "img/hero/lemon/lemon2.png",
      "img/hero/lemon/lemon3.png"
    ],
    navbar: "#C9C84A",
    positions: [
      { left: "50%", top: "-32%" },
      { right: "15%", top: "30%" },
      { left: "10%", top: "-15%" }
    ]
  },
  {
    title: "KAWISTA",
    variant: "Varian: kawista",
    price: "Rp 21.000",
    bottle: "img/hero/kawis/sirup.png",
    fruits: [
      "img/hero/kawis/kawis.png",
      "img/hero/kawis/kawis2.png",
      "img/hero/kawis/kawis3.png"
    ],
    navbar: "#483C32",
    positions: [
      { left: "50%", top: "-20%" },
      { right: "15%", top: "30%" },
      { left: "10%", top: "5%" }
    ]
  },
  {
    title: "MOCCA",
    variant: "Varian: mocca",
    price: "Rp 21.000",
    bottle: "img/hero/mocca/sirup.png",
    fruits: [
      "img/hero/mocca/coffee.png",
      "img/hero/mocca/coffee2.png",
      "img/hero/mocca/coffee3.png"
    ],
    navbar: "#483C32",
    positions: [
      { left: "50%", top: "-32%" },
      { right: "15%", top: "20%" },
      { left: "10%", top: "-15%" }
    ]
  },
  {
    title: "LYCHEE",
    variant: "Varian: leci",
    price: "Rp 21.000",
    bottle: "img/hero/leci/sirup.png",
    fruits: [
      "img/hero/leci/lychee.png",
      "img/hero/leci/lychee2.png",
      "img/hero/leci/lychee3.png"
    ],
    navbar: "#F4A7B9",
    positions: [
      { left: "50%", top: "-32%" },
      { right: "15%", top: "20%" },
      { left: "10%", top: "-15%" }
    ]
  },
  {
    title: "NANAS",
    variant: "Varian: nanas",
    price: "Rp 21.000",
    bottle: "img/hero/nanas/sirup.png",
    fruits: [
      "img/hero/nanas/nanas.png",
      "img/hero/nanas/nanas2.png",
      "img/hero/nanas/nanas3.png"
    ],
    navbar: "#D1B845",
    positions: [
      { left: "50%", top: "-10%" },
      { right: "15%", top: "15%" },
      { left: "15%", top: "-20%" }
    ]
  },
  {
    title: "MANGGA",
    variant: "Varian: mangga",
    price: "Rp 21.000",
    bottle: "img/hero/mangga/sirup.png",
    fruits: [
      "img/hero/mangga/mango.png",
      "img/hero/mangga/mango2.png",
      "img/hero/mangga/mango3.png"
    ],
    navbar: "#D9A441",
    positions: [
      { left: "50%", top: "-32%" },
      { right: "15%", top: "20%" },
      { left: "10%", top: "-15%" }
    ]
  },
  {
    title: "JAMBU BIJI",
    variant: "Varian: jambu biji",
    price: "Rp 30.000",
    bottle: "img/hero/jambu/sirup.png",
    fruits: [
      "img/hero/jambu/guava.png",
      "img/hero/jambu/guava2.png",
      "img/hero/jambu/guava3.png"
    ],
    navbar: "rgba(232,74,95,1)",
    positions: [
      { left: "50%", top: "-32%" },
      { right: "15%", top: "20%" },
      { left: "10%", top: "-15%" }
    ]
  }
];

let index = 0;
let autoSlide;

const heroSlide = document.getElementById("heroSlide");
const nav = document.getElementById("navbar");
const home = document.getElementById("home");
const title = document.getElementById("heroTitle");
const variant = document.getElementById("heroVariant");
const price = document.getElementById("heroPrice");
const bottle = document.getElementById("heroBottle");
const fruit1 = document.getElementById("fruit1");
const fruit2 = document.getElementById("fruit2");
const fruit3 = document.getElementById("fruit3");

function updateSlide() {
  const s = slides[index];

  title.textContent = s.title;
  variant.textContent = s.variant;
  price.textContent = s.price;
  bottle.src = s.bottle;

  fruit1.src = s.fruits[0];
  fruit2.src = s.fruits[1];
  fruit3.src = s.fruits[2];

  const fruits = [fruit1, fruit2, fruit3];
  fruits.forEach((f, i) => {
    f.style.top = s.positions[i].top || "auto";
    f.style.left = s.positions[i].left || "auto";
    f.style.right = s.positions[i].right || "auto";
  });

  nav.style.background = s.navbar;
  home.style.background = s.navbar;
}

const titleEl = document.getElementById("heroTitle");
const bottleEl = document.getElementById("heroBottle");
const fruits = [fruit1, fruit2, fruit3];

function resetAnim(el) {
  el.classList.remove(
    "bottle-in-right","bottle-in-left","bottle-out-left","bottle-out-right",
    "title-in-left","title-in-right","title-out-left","title-out-right"
  );
}

function resetFruitAnim() {
  fruits.forEach(f => {
    f.classList.remove("fruit-in", "fruit-out", "fruit-init");
    void f.offsetWidth;
  })
}

function waitAnim(el, cb) {
  function done(e) {
    if (e.target !== el) return;
    el.removeEventListener("animationend", done);
    cb();
  }
  el.addEventListener("animationend", done);
}

function changeSlide(direction = "next") {

  // FRUIT OUT LANGSUNG
  fruits.forEach(f => f.classList.add("fruit-out"));

  if (direction === "next") {
    bottleEl.classList.add("bottle-out-left");
    titleEl.classList.add("title-out-right");
  } else {
    bottleEl.classList.add("bottle-out-right");
    titleEl.classList.add("title-out-left");
  }

  waitAnim(bottleEl, () => {

    resetAnim(bottleEl);
    resetAnim(titleEl);
    resetFruitAnim();

    index = direction === "next"
      ? (index + 1) % slides.length
      : (index - 1 + slides.length) % slides.length;

    updateSlide();

    // FRUIT IN (STAGGER)
    fruits.forEach((f, i) => {
      setTimeout(() => f.classList.add("fruit-in"), i * 120);
    });

    // SLIDE IN
    requestAnimationFrame(() => {
      if (direction === "next") {
        bottleEl.classList.add("bottle-in-right");
        titleEl.classList.add("title-in-left");
      } else {
        bottleEl.classList.add("bottle-in-left");
        titleEl.classList.add("title-in-right");
      }
    });

  });
}

document.getElementById("next").onclick = e => {
  e.preventDefault();
  changeSlide("next");
  restartAuto();
};

document.getElementById("prev").onclick = e => {
  e.preventDefault();
  changeSlide("prev");
  restartAuto();
};

function startAuto() {
  autoSlide = setInterval(() => {
    changeSlide("next");
  }, 8000);
}

function restartAuto() {
  clearInterval(autoSlide);
  startAuto();
}

updateSlide();
startAuto();

