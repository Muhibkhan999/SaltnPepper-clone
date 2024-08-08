const carouselRadioBtns = document.querySelectorAll('.carousel-radio-btn');
const carouselItems = document.querySelectorAll('.carousel-item');
const nextBtn = document.querySelector('.next');
const prevBtn = document.querySelector('.prev');

let currentSlide = 0;

nextBtn.addEventListener('click', () => {
  currentSlide++;
  if (currentSlide >= carouselItems.length) {
    currentSlide = 0;
  }
  updateCarousel();
});

prevBtn.addEventListener('click', () => {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = carouselItems.length - 1;
  }
  updateCarousel();
});

function updateCarousel() {
  carouselRadioBtns.forEach((btn, index) => {
    if (index === currentSlide) {
      btn.checked = true;
    } else {
      btn.checked = false;
    }
  });
}