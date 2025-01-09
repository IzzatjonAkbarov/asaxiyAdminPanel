const form = document.getElementById("form");
const eye = document.getElementById("eye");
const emailvalue = document.getElementById("email");
const passwordValue = document.getElementById("password");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (emailvalue.value == "izzatillo" && passwordValue.value == "izzatillo") {
    window.location.href = "./admin.html";
  }
  console.log(emailvalue.value, passwordValue.value);
});
eye.addEventListener("click", () => {
  passwordValue.type = "text";
});
