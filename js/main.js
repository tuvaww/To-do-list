let ul = document.querySelector(".carousel-items");
let slides = Array.from(ul.children);
let slideWidth = slides[0].getBoundingClientRect().width;
let nextButton = document.querySelector(".btn-right");
let prevButton = document.querySelector(".btn-left");
let navDots = document.querySelector(".carousel-nav");
let dots = Array.from(navDots.children);

//positionera slides bredvid istället för på varandra
let slidePosition = (slidePhoto, index) => {
  slidePhoto.style.left = slideWidth * index + "px";
};

slides.forEach(slidePosition);

// klicka vänster, flyttar slides till vänster
let moveTo = (ul, currentSlide, targetSlide) => {
  ul.style.transform = "translateX(-" + targetSlide.style.left + ")";
  currentSlide.classList.remove("current-slide");
  targetSlide.classList.add("current-slide");
};

let newDots = (currentDot, targetDot) => {
  currentDot.classList.remove("current-slide");
  targetDot.classList.add("current-slide");
};

let hideNavs = (slides, prevButton, nextButton, targetIndex) => {
  if (targetIndex === 0) {
    prevButton.classList.add("hide");
    nextButton.classList.remove("hide");
  } else if (targetIndex === slides.length - 1) {
    prevButton.classList.remove("hide");
    nextButton.classList.add("hide");
  } else {
    prevButton.classList.remove("hide");
    nextButton.classList.remove("hide");
  }
};

let test = (targetIndex) => {
  if (targetIndex === 0) {
    document.getElementById("styleHeading").innerHTML("hej");
  }
};

prevButton.addEventListener("click", () => {
  let currentSlide = ul.querySelector(".current-slide");
  let prevSlide = currentSlide.previousElementSibling;
  let thisDot = navDots.querySelector(".current-slide");
  let prevDot = thisDot.previousElementSibling;
  let prevIndex = slides.findIndex((slide) => slide === prevSlide);

  moveTo(ul, currentSlide, prevSlide);
  newDots(thisDot, prevDot);
  hideNavs(slides, prevButton, nextButton, prevIndex);
});
// klicka höger, flyttar slides till höger

nextButton.addEventListener("click", () => {
  let currentSlide = ul.querySelector(".current-slide");
  let nextSlide = currentSlide.nextElementSibling;
  let thisDot = navDots.querySelector(".current-slide");
  let nextDot = thisDot.nextElementSibling;
  let nextIndex = slides.findIndex((slide) => slide === nextSlide);

  moveTo(ul, currentSlide, nextSlide);
  newDots(thisDot, nextDot);
  hideNavs(slides, prevButton, nextButton, nextIndex);
});

// klicka på nav prickar, flyttar till vald slide

navDots.addEventListener("click", (dot) => {
  let targetDot = dot.target.closest("button");
  if (!targetDot) return;
  let currentSlide = ul.querySelector(".current-slide");
  let currentDot = navDots.querySelector(".current-slide");
  let targetIndex = dots.findIndex((eachDot) => eachDot === targetDot);
  let targetSlide = slides[targetIndex];

  moveTo(ul, currentSlide, targetSlide);
  newDots(currentDot, targetDot);
  hideNavs(slides, prevButton, nextButton, targetIndex);
});

//let headings = ["Bullet journal", "Post-it", "Fall"];

//for (let i = 0; i < headings.length; i++) {

//if ()

//console.log(headings);
//}
