const dataFetch = async () => {
  try {
    const res = await fetch("https://api.adviceslip.com/advice");
    const data = await res.json();

    document.querySelector(".title").textContent = `Advice #${data.slip.id}`;
    document.querySelector(".text").innerHTML = `<q>${data.slip.advice}</q>`;
  } catch (error) {
    console.log("Something went wrong!", error);
    document.querySelector(".title").textContent = `Something went wrong!`;
    document.querySelector(".text").innerHTML = `${error.message}`;
  }
};

const submitButton = document.querySelector("button");

submitButton.addEventListener("click", () => {
  dataFetch();
});

window.addEventListener("DOMContentLoaded", () => {
  dataFetch();
});
