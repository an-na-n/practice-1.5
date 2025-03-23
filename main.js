const swiper = new Swiper(".swiper", {
  slidesPerView: "auto",
  spaceBetween: 0,
  direction: "horizontal",
  loop: false,

  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
});

document.addEventListener("DOMContentLoaded", function () {
  if (window.innerWidth >= 768) {
    swiper.destroy(true, true);
  }
});

let openButton = document.querySelector(".brands__show-more");
let elements = document.querySelectorAll(".brands__item");
let isOpen = false;

openButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (isOpen) {
    for (let i = 0; i < elements.length; i++) {
      if (
        (window.innerWidth >= 1120 && i >= 8) ||
        (window.innerWidth >= 768 && window.innerWidth < 1120 && i >= 6)
      ) {
        elements[i].style.display = "none";
      }
    }
    openButton.textContent = "Показать все";
    openButton.classList.remove("brands__show-more--open");
    isOpen = false;
  } else {
    for (let i = 0; i < elements.length; i++) {
      elements[i].style.display = "list-item";
    }
    openButton.textContent = "Скрыть";
    openButton.classList.add("brands__show-more--open");
    isOpen = true;
  }
});

window.addEventListener("resize", function () {
  if (!isOpen) {
    for (let i = 0; i < elements.length; i++) {
      if (
        (window.innerWidth >= 1120 && i >= 8) ||
        (window.innerWidth >= 768 && window.innerWidth < 1120 && i >= 6)
      ) {
        elements[i].style.display = "none";
      } else {
        elements[i].style.display = "list-item";
      }
    }
  }
  if (window.innerWidth >= 768) {
    swiper.destroy(true, true);
  }
});
