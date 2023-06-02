// on image load

const dataCarousel = document.getElementById("data-carousel");
const firstSlide = dataCarousel.querySelector("[slide]");
firstSlide.dataset.active = true;

const wrapper = document.querySelector('[data-active="true"]');
const textWrapper = wrapper.querySelector("[text]");
const buttonTab = textWrapper.querySelector("[button]");
buttonTab.removeAttribute(`tabindex`);
textWrapper.classList.add("inAnimation");

const buttons = document.querySelectorAll("[data-carousel-button]");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const offset = button.dataset.carouselButton === "next" ? 1 : -1;

    const slides = Array.prototype.slice.call(
      button.closest("#data-carousel").querySelectorAll("[slide]")
    );

    let activeSlide;

    slides.forEach((slide) => {
      if (slide.getAttribute("data-active") === "true") activeSlide = slide;
    });

    let newIndex = slides.indexOf(activeSlide) + offset;

    if (newIndex < 0) newIndex = slides.length - 1;
    if (newIndex >= slides.length) newIndex = 0;

    slides[newIndex].dataset.active = true;
    slides[newIndex].querySelector("[button]").removeAttribute(`tabindex`);
    slides[newIndex].querySelector("[text]").classList.add("inAnimation");
    delete activeSlide.dataset.active;
    activeSlide.querySelector("[button]").setAttribute("tabindex", -1);
    activeSlide.querySelector("[text]").classList.remove("inAnimation");
  });
});
