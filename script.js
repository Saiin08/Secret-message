const container = document.querySelector(".container");
const lock = document.querySelector(".padlock");
const text = document.querySelector(".text");

lock.addEventListener("mouseenter", (event) => {
  text.classList.add("text_visible");
});

lock.addEventListener("mouseleave", (event) => {
  text.classList.remove("text_visible");
});

lock.addEventListener("click", (event) => {
  text.classList.add("text_visible");
  lock.removeEventListener("mouseenter");
  lock.removeEventListener("mouseleave");
});
