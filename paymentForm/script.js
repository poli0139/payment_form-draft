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
  if (monthInput.value > 1) {
    document.getElementById("expiryYear").focus();
  }
});
const yearInput = document.querySelector("#expiryYear");
yearInput.addEventListener("input", function (e) {
  if (yearInput.value.length == 2) {
    document.querySelector("#securityCode").focus();
  }
});
