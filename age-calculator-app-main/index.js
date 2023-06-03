const dayInp = document.getElementById("day-input");
const monthInp = document.getElementById("month-input");
const yearInp = document.getElementById("year-input");
const dateInputs = document.querySelector(".date-input");
const label = document.querySelectorAll("label");

const yearOtp = document.getElementById("age-years");
const monthOtp = document.getElementById("age-months");
const dayOtp = document.getElementById("age-days");

const form = document.querySelector("form");

const date = new Date();
let day = date.getDate();
let month = 1 + date.getMonth();
let year = date.getFullYear();

const months = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
function validate() {
  const inputs = document.querySelectorAll("input");
  let validator = true;
  inputs.forEach((i) => {
    const parent = i.parentElement;
    if (!i.value) {
      i.style.borderColor = "red";
      parent.querySelector("small").innerText = "this field is required.";
      label.forEach((l) => {
        l.style.color = "red";
      });
      validator = false;
    } else if (monthInp.value > 12) {
      monthInp.style.borderColor = "red";
      monthInp.parentElement.querySelector("small").innerText =
        "must be valid month.";
      validator = false;
    } else if (dayInp.value > 31) {
      dayInp.style.borderColor = "red";
      dayInp.parentElement.querySelector("small").innerText =
        "must be valid day.";
      validator = false;
    } else if (yearInp.value > year) {
      yearInp.style.borderColor = "red";
      yearInp.parentElement.querySelector(
        "small"
      ).innerText = `must be a year before ${year}`;
      validator = false;
    } else {
      i.style.borderColor = "hsl(0, 0%, 86%)";
      parent.querySelector("small").innerText = "";
      label.forEach((l) => {
        l.style.color = "hsl(127deg 1% 44%)";
      });
      validator = true;
    }
  });
  return validator;
}

function handleSubmit(e) {
  e.preventDefault();
  if (validate()) {
    if (dayInp.value > day) {
      day = day + months[month - 1];
      month = month - 1;
    }
    if (monthInp.value > month) {
      month = month + 12;
      year = year - 1;
    }

    const d = day - dayInp.value;
    const m = month - monthInp.value;
    const y = year - yearInp.value;

    dayOtp.innerHTML = d;
    monthOtp.innerHTML = m;
    yearOtp.innerHTML = y;
  }
}

form.addEventListener("submit", handleSubmit);
