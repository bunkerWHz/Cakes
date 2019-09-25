const slider = document.querySelector(".my-slider");
const slides = [...document.querySelectorAll(".slider__item")];

const toggleActive = (el) => {
el.classList.toggle("slider__item--active");
}
setInterval(toggleActive(slides[0], 2000));