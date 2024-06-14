document.addEventListener("DOMContentLoaded", function () {
  const carouselInterval = 3000;
  const carouselContainer = document.querySelector(".carousel-content-featured");
  const carouselItems = document.querySelectorAll(".carousel-item-featured");
  const carouselNavPrev = document.querySelector(".prev-featured");
  const carouselNavNext = document.querySelector(".next-featured");
  const carouselIndicators = document.querySelectorAll(".indicator");
  let currentIndex = 0;
  let intervalId;

  function showSlide(index) {
    carouselItems.forEach((item) => {
      item.style.display = "none";
    });
    carouselItems[index].style.display = "block";
    carouselIndicators.forEach((indicator) => {
      indicator.classList.remove("active");
    });
    carouselIndicators[index].classList.add("active");
  }

  function nextSlide() {
    currentIndex = (currentIndex + 1) % carouselItems.length;
    showSlide(currentIndex);
    stopCarousel();
    startCarousel();
  }

  function prevSlide() {
    currentIndex = (currentIndex - 1 + carouselItems.length) % carouselItems.length;
    showSlide(currentIndex);
    stopCarousel();
    startCarousel();
  }

  carouselNavNext.addEventListener("click", nextSlide);
  carouselNavPrev.addEventListener("click", prevSlide);

  function goToSlide(index) {
    currentIndex = index;
    showSlide(currentIndex);
    stopCarousel();
    startCarousel();
  }

  carouselIndicators.forEach((indicator, index) => {
    indicator.addEventListener("click", () => {
      goToSlide(index);
      stopCarousel();
      startCarousel();
    });
  });

  function startCarousel() {
    intervalId = setInterval(nextSlide, carouselInterval);
  }

  function stopCarousel() {
    clearInterval(intervalId);
  }

  startCarousel();

  carouselContainer.addEventListener("mouseenter", stopCarousel);
  carouselContainer.addEventListener("mouseleave", startCarousel);
});