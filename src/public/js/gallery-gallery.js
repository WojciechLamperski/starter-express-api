const thumbnails = document.querySelectorAll(".js-thumbnail");
const popup = document.getElementById("js-popup");
const popup_close = document.getElementById("js-popup-close");
const popup_img = document.getElementById("js-popup-img");
const arrow_left = document.getElementById("js-popup-arrow--left");
const arrow_right = document.getElementById("js-popup-arrow--right");

let currentImgIndex;

const showNextImage = () => {
  if (currentImgIndex === thumbnails.length - 1) {
    currentImgIndex = 0;
  } else {
    currentImgIndex++;
  }
  popup_img.src = thumbnails[currentImgIndex].previousElementSibling.src;
};

const showPreviousImage = () => {
  if (currentImgIndex === 0) {
    currentImgIndex = thumbnails.length - 1;
  } else {
    currentImgIndex--;
  }
  popup_img.src = thumbnails[currentImgIndex].previousElementSibling.src;
};

const closePopup = () => {
  popup.classList.add("hidden");

  thumbnails.forEach((element) => {
    element.setAttribute("tabindex", 1);
  });
};

thumbnails.forEach((thumbnail, index) => {
  const showPopup = (e) => {
    popup.classList.remove("hidden");
    popup_img.src = e.target.previousElementSibling.src;
    currentImgIndex = index;

    thumbnails.forEach((element) => {
      element.setAttribute("tabindex", -1);
    });
  };

  thumbnail.addEventListener("click", showPopup);

  thumbnail.addEventListener("keydown", (e) => {
    if (e.code === "Enter" || e.keyCode === 13) {
      console.log("Enter");
      showPopup(e);
    }
    // if (e.code === "Tab" || e.keyCode === 9) {
    //   e.target.previousElementSibling.classList.add("js-focus");
    //   e.target.focus();
    //   e.target.parentElement.focus();
    // }
  });
});

popup_close.addEventListener("click", closePopup);

arrow_right.addEventListener("click", showNextImage);

arrow_left.addEventListener("click", showPreviousImage);

document.addEventListener("keydown", (e) => {
  if (!popup.classList.contains("hidden")) {
    if (e.code === "ArrowRight" || e.keyCode === 39) {
      showNextImage();
    }

    if (e.code === "ArrowLeft" || e.keyCode === 37) {
      showPreviousImage();
    }

    if (e.code === "Escape" || e.keyCode === 27) {
      closePopup();
    }
  }
});

popup.addEventListener("click", (e) => {
  if (e.target === popup) {
    closePopup();
  }
});
