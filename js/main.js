let ul = document.querySelector(".carousel-items");
let slides = Array.from(ul.children);

let slideWidth = slides[0].getBoundingClientRect().width;
let nextButton = document.querySelector(".btn-right");
let prevButton = document.querySelector(".btn-left");
let navDots = document.querySelector(".carousel-nav");
let dots = Array.from(navDots.children);

//positionera slides bredvid istället för på varandra

let slidePosition = (slide, index) => {
  slide.style.left = slideWidth * index + "px";
};

slides.forEach(slidePosition);

// klicka vänster, flyttar slides till vänster
// klicka höger, flyttar slides till höger

//flytta slide

nextButton.addEventListener("click", (e) => {
  let currentSlide = ul.querySelector(".current-slide");
  let nextSlide = currentSlide.nextElementSibling;
  let moves = nextSlide.style.left;

  ul.style.transform = "translateX(-" + moves + ")";
  currentSlide.classList.remove("current-slide");
  nextSlide.classList.add("current-slide");
});

//});
// klicka på nav prickar, flyttar till vald slide
