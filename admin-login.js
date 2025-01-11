const form = document.getElementById("form");
const eye = document.getElementById("eye");
const emailvalue = document.getElementById("email");
const passwordValue = document.getElementById("password");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (emailvalue.value == "izzatillo" && passwordValue.value == "izzatillo") {
    let toast = document.querySelector(".toast");
    toast.textContent = `Loged In Successfully ☑️`;

    toast.classList.remove("right-[-100%]");

    toast.classList.remove("bg-white");

    toast.style.transition = "0.5s";
    toast.classList.add("right-[20px]");
    toast.classList.add("bg-blue");
    setTimeout(() => {
      window.location.href = "./admin.html";
    }, 2000);
  }
  console.log(emailvalue.value, passwordValue.value);
});
eye.addEventListener("click", () => {
  passwordValue.type = "text";
});
