const carouselContentctg = document.querySelector(".carousel-content-category");
const prevButtonctg = document.querySelector(".prev-category");
const nextButtonctg = document.querySelector(".next-category");
const carouselItemsctg = document.querySelectorAll(".carousel-item-category");
let currentIndexctg = 0;
const stepctg = 1;
const itemsPerPage = 4;

function showItemsctg() {
  carouselItemsctg.forEach((item, index) => {
    if (index >= currentIndexctg && index < currentIndexctg + itemsPerPage) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

prevButtonctg.addEventListener("click", () => {
  if (currentIndexctg > 0) {
    currentIndexctg -= stepctg;
    showItemsctg();
  } else {
    currentIndexctg = carouselItemsctg.length - itemsPerPage; // Go back to the last 4 images
    showItemsctg();
  }
});

nextButtonctg.addEventListener("click", () => {
  if (currentIndexctg + itemsPerPage < carouselItemsctg.length) {
    currentIndexctg += stepctg;
    showItemsctg();
  } else {
    currentIndexctg = 0; // Go back to the first 4 images
    showItemsctg();
  }
});

showItemsctg();