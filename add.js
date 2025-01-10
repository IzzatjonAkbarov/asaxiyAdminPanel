let BASE_URL = "https://676a9fb7863eaa5ac0df14f1.mockapi.io/asaxiy";

const form = document.getElementById("form");
const name1 = document.querySelector("#name");
const img = document.querySelector("#img");
const old_price = document.querySelector("#old_price");
const price = document.querySelector("#price");
const month = document.querySelector("#month");
const month_payment = document.querySelector("#month_payment");
const have = document.querySelector("#have");
const type = document.querySelector("#type");
let toast = document.querySelector(".toast");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  fetch(BASE_URL, {
    method: "POST",
    body: JSON.stringify({
      name: name1.value,
      img: "https://cdn.asaxiy.uz/asaxiy-content/product/items/desktop/b2f627fff19fda463cb386442eac2b3d2024011715304614439FSHb3tDZE3.png.webp",
      old_price: +old_price.value,
      price: +price.value,
      month: +month.value,
      month_payment: +month_payment.value,
      have: +have.value,
      type: type.value.toUpperCase(),
    }),
    headers: { "Content-Type": "application/json" },
  })
    .then((data) => data.json())
    .then(
      (data) => console.log(data),
      (name1.value = ""),
      (img.value = ""),
      (old_price.value = ""),
      (price.value = ""),
      (month.value = ""),
      (month_payment.value = ""),
      (have.value = ""),
      (type.value = ""),
      (toast.textContent = "added successfuly"),
      toast.classList.remove("right-[-200px]"),
      (toast.style.transition = "1s"),
      toast.classList.add("bg-green-400"),

      toast.classList.add("right-[0px]"),
      setTimeout(() => {
        window.location.href = "./admin.html";
      }, 2000)
    )
    .catch((err) => console.log(err));
});
