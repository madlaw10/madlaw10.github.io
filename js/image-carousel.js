const carousel = document.querySelector('[data-target="image-carousel__cards"]')
const card = carousel.querySelector('[data-target="image-carousel__card"]')
const leftButton = document.querySelector('[data-action="slideLeft"]')
const rightButton = document.querySelector('[data-action="slideRight"]')

const carouselWidth = carousel.offsetWidth

const cardCount = carousel.querySelectorAll('[data-target="image-carousel__card"]').length;

let offset = 0;
const maxX = -((cardCount / 1) * carouselWidth - carouselWidth)

leftButton.addEventListener("click", function() {
    if (offset !== 0) {
      offset += carouselWidth
      carousel.style.transform = `translateX(${offset}px)`;
      }
  })
    
  rightButton.addEventListener("click", function() {
    if (offset !== maxX) {
      offset -= carouselWidth
      carousel.style.transform = `translateX(${offset}px)`;
    }
  })