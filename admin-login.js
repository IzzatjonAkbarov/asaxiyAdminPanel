const form = document.getElementById("form");
const eye = document.getElementById("eye");
const emailvalue = document.getElementById("email");
const passwordValue = document.getElementById("password");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (emailvalue.value == "izzatillo" && passwordValue.value == "izzatillo") {
    let toast = document.querySelector(".toast");
    toast.classList.remove("right-[-200px]");

    toast.classList.remove("bg-[#006bff]");
    toast.classList.add("bg-red-400");

    toast.style.transition = "1s";
    toast.classList.add("right-[0px]");
    setTimeout(() => {
      window.location.href = "./admin.html";
    }, 2000);
  }
  console.log(emailvalue.value, passwordValue.value);
});
eye.addEventListener("click", () => {
  passwordValue.type = "text";
});
