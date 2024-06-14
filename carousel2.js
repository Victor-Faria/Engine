
const prevButton = document.querySelector(".prev-special");
const nextButton = document.querySelector(".next-special");
const carouselItems = document.querySelectorAll(".carousel-item-special");

let currentIndex = 0;
const step = 4;

function showItems() {
  carouselItems.forEach((item, index) => {
    if (index >= currentIndex && index < currentIndex + step) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

prevButton.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex -= step;
    showItems();
  } else {
    currentIndex = carouselItems.length - step; // Volta para as últimas 4 imagens
    showItems();
  }
});

nextButton.addEventListener("click", () => {
  if (currentIndex + step < carouselItems.length) {
    currentIndex += step;
    showItems();
  } else {
    currentIndex = 0; // Volta para as primeiras 4 imagens
    showItems();
  }
});

showItems();
