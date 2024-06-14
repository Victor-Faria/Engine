const carouselContentvr = document.querySelector(".carousel-content-vr");
const prevButtonvr = document.querySelector(".prev-vr");
const nextButtonvr = document.querySelector(".next-vr");
const carouselItemsvr = document.querySelectorAll(".carousel-item-vr");

let currentIndexvr = 0;
const stepvr = 4;

function showItemsvr() {
  carouselItemsvr.forEach((item, index) => {
    if (index >= currentIndexvr && index < currentIndexvr + stepvr) {
      item.style.display = "flex";
    } else {
      item.style.display = "none";
    }
  });
}

prevButtonvr.addEventListener("click", () => {
  if (currentIndexvr > 0) {
    currentIndexvr -= stepvr;
    showItemsvr();
  } else {
    currentIndexvr = carouselItemsvr.length - stepvr; // Volta para as últimas 4 imagens
    showItemsvr();
  }
});

nextButtonvr.addEventListener("click", () => {
  if (currentIndexvr + stepvr < carouselItemsvr.length) {
    currentIndexvr += stepvr;
    showItemsvr();
  } else {
    currentIndexvr = 0; // Volta para as primeiras 4 imagens
    showItemsvr();
  }
});

showItemsvr();
