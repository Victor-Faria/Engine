const carouselContent20 = document.querySelector(".carousel-content-under20");
const prevButton20 = document.querySelector(".prev-under20");
const nextButton20 = document.querySelector(".next-under20");
const carouselItems20 = document.querySelectorAll(".carousel-item-under20");

let currentIndex20 = 0;
const step20 = 4;

function showItems20() {
  carouselItems20.forEach((item, index) => {
    if (index >= currentIndex20 && index < currentIndex20 + step20) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

prevButton20.addEventListener("click", () => {
  if (currentIndex20 > 0) {
    currentIndex20 -= step20;
    showItems20();
  } else {
    currentIndex20 = carouselItems20.length - step20; // Volta para as últimas 4 imagens
    showItems20();
  }
});

nextButton20.addEventListener("click", () => {
  if (currentIndex20 + step20 < carouselItems20.length) {
    currentIndex20 += step20;
    showItems20();
  } else {
    currentIndex20 = 0; // Volta para as primeiras 4 imagens
    showItems20();
  }
});

showItems20();
