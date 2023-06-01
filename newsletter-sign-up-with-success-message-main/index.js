const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thank-you");
const form = document.querySelector("form");

const submitButton = document.getElementById("submit");
const dismiss = document.getElementById("dismiss");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  mainContainer.classList.add("hide");
  thanksContainer.classList.remove("hide");
});

dismiss.addEventListener("click", () => {
  mainContainer.classList.remove("hide");
  thanksContainer.classList.add("hide");
});
