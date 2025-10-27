const prevBtn = document.querySelector(".previous");
const nextBtn = document.querySelector(".next");
const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slide");
let i = 0;

prevBtn.addEventListener("click", () => {
  slides.style.transform = `translateX(-${i * 450}px)`;
  i++;
});
nextBtn.addEventListener("click", () => {
  i--;
  slides.style.transform = `translateX(-${i * 450}px)`;
});
