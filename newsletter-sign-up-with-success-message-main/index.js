const mainContainer = document.querySelector(".main-container");
const thanksContainer = document.querySelector(".thank-you");
const form = document.querySelector("form");

const submitButton = document.getElementById("submit");
const dismiss = document.getElementById("dismiss");
const email = document.getElementById("email");
const invalid = document.getElementById("invalid");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (ValidateEmail(email)) {
    mainContainer.classList.add("hide");
    thanksContainer.classList.remove("hide");
  }
});

dismiss.addEventListener("click", () => {
  mainContainer.classList.remove("hide");
  thanksContainer.classList.add("hide");
  email.style = "";
  invalid.style.visibility = "hidden";
});

function ValidateEmail(inputText) {
  var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
  if (inputText.value.match(mailformat)) {
    // document.form.email.focus();
    return true;
  } else {
    // alert("You have entered an invalid email address!");
    email.style.backgroundColor = "#ffe8e6";
    email.style.color = "#db9089";
    email.style.border = "1px solid #db9089";
    invalid.style.visibility = "visible";

    return false;
  }
}
