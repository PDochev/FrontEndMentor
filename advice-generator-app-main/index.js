const dataFetch = async () => {
  const res = await fetch("https://api.adviceslip.com/advice");
  const data = await res.json();

  document.querySelector(".title").innerHTML = `Advice #${data.slip.id}`;
  document.querySelector(".text").innerHTML = data.slip.advice;
};

const submitButton = document.querySelector("button");

submitButton.addEventListener("click", () => {
  dataFetch();
});

window.addEventListener("load", () => {
  dataFetch();
});
