const slider = new Slider(".my-slider");


class Slider {
constructor(selector) {
    this.selector = selector;
    this.slider = document.querySelector(this.selector);
    this.slides =  [...this.slider.querySelectorAll(".slide")];
    this.current = this.slides.indexOf(this.slider.querySelector(".slide--active"));
    this.sliderBtnLeft = this.slider.querySelector(".slider__btn--left").addEventListener("click", this.prevSlide.bind(this));
    this.sliderBtnRight = this.slider.querySelector(".slider__btn--right").addEventListener("click", this.nextSlide.bind(this));
}
prevSlide() {
    this.slides[this.current].classList.toggle('slide--active');
    this.current--;
    this.current === -1 ? this.current = this.slides.length -1 : 0;
   this.slides[this.current].classList.toggle('slide--active');
};
nextSlide() {
    this.slides[this.current].classList.toggle('slide--active');
    this.current++;
    this.current = this.current % this.slides.length;
    this.slides[this.current].classList.toggle('slide--active');
};
}