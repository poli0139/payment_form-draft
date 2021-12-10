document
  .querySelector(".cardNumber input")
  .addEventListener("input", function (e) {
    e.target.value = e.target.value
      .replace(/[^\dA-Z]/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
  });

const monthInput = document.querySelector("#expiryMonth");
monthInput.addEventListener("input", function (e) {
  if (monthInput.value > 1 && monthInput.value.length == 1) {
    monthInput.value = `0${monthInput.value}`;
    document.getElementById("expiryYear").focus();
  } else if (monthInput.value.length == 2 && monthInput.value[1] <= 2) {
    document.getElementById("expiryYear").focus();
    console.log(monthInput.value[1]);
  } else if (monthInput.value[1] > 2) {
    document.querySelector(".monthErrMessage").classList.add("animateMessage");
  }
});
const yearInput = document.querySelector("#expiryYear");
yearInput.addEventListener("input", function (e) {
  if (yearInput.value.length == 2) {
    document.querySelector("#securityCode").focus();
  }
});
const cardNumberInput = document.querySelector("#cardNumber");
document.querySelector("form").addEventListener("submit", function (e) {
  if (cardNumberInput.value.length < 19) {
    e.preventDefault();
    console.log("invalid card");
    document
      .querySelector(".cardNumberErrMessage")
      .classList.add("animateMessage");
  }
});
