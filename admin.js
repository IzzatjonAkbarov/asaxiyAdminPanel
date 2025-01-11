const form = document.getElementById("form");
const name1 = document.querySelector("#name");
const img = document.querySelector("#img");
const old_price = document.querySelector("#old_price");
const price = document.querySelector("#price");
const month = document.querySelector("#month");
const month_payment = document.querySelector("#month_payment");
const have = document.querySelector("#have");
const type = document.querySelector("#type");

let BASE_URL = "https://676a9fb7863eaa5ac0df14f1.mockapi.io/asaxiy";
const cards = document.querySelector(".cards");
const getDataFuncForFetch = async () => {
  const request = await fetch(BASE_URL);
  const response = await request.json();

  return response;
};

getDataFuncForFetch().then((data) => {
  getdatauseui(data);
});

function getdatauseui(data) {
  data.forEach((value) => {
    addUIdata(value);
  });
}
function addUIdata(value) {
  function data_i(params) {
    const i = `<i class="fa-solid text-orange-500 fa-star"></i>`;
    const i2 = `<i class="fa-solid gray fa-star"></i>`;
    return i.repeat(params);
  }
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
      <div>
        <img class="imgofcard mx-auto" src="${value.img}" alt="" />
      </div>
      <div class="txtarea p-[15px]">
        <h1 class="text-[14px] multi-line font-medium">${value.name}</h1>
        <div class="stars flex items-center justify-between my-[8px]">
          <p class="text-[6px]  flex items-center gap-1">${data_i(5)}</p>
          <p>${value.have || 0} pcs</p>
        </div>
        <div class="prices">
          <p class="text-[12px] font-normal text-[#94a3b8]">
            <s>${value.old_price} сум</s>
          </p>
          <p class="text-[18px] font-bold text-[#006bff] my-[4px]">${
            value.price
          } сум</p>
          <button class="text-[#fe7300] border rounded-md border-[#fe7300] p-[6px] w-[100%] text-left text-[14px] font-medium hover:bg-[#fe7300] hover:text-white transition-all active:scale-95">
            ${value.month_payment} сум x ${value.month} мес
          </button>
        </div>
        <div class="btns flex items-center gap-1 mt-[15px]">
          <button id="${
            value.id
          }" class=" text-xl deletebtn items-center gap-2 w-[100%] text-center text-white text-[13px] bg-[#006bff] px-4 py-2 rounded-[10px] hover:text-[#006bff] border border-[#006bff] hover:bg-white transition-all active:scale-95">
            Delete
          </button>
          <button  id="${
            value.id
          }"  class="flex edit  items-center gap-2  text-center text-white text-[13px] bg-[#006bff] px-4 py-2 rounded-[10px] hover:text-[#006bff] border border-[#006bff] hover:bg-white transition-all active:scale-95">
            edit
          </button>
        </div>
      </div>`;

  cards.append(card);
}
let toast = document.querySelector(".toast");

const deletebtn = document.querySelector(".deletebtn");

cards.addEventListener("click", (e) => {
  let id = e.target.id;

  if (e.target.classList.contains("deletebtn")) {
    deletefunc(id);
  }
});
function deletefunc(id) {
  let smth = confirm(" Do you want to delete this data of the card");
  if (smth) {
    fetch(`${BASE_URL}/${id}`, {
      method: "DELETE",
    })
      .then((data) => data.json())
      .then((data) => getdatauseui(data)),
      (toast.textContent = "deleted successfuly 🗑️");

    toast.classList.remove("right-[-100%]");

    toast.classList.remove("bg-blue-600");

    toast.style.transition = "0.5s";
    toast.classList.add("bg-red-600");

    toast.classList.add("right-[20px]");
    setTimeout(() => {
      window.location.href = "./admin.html";
    }, 2000);
  }
}
const editbtn = document.querySelector(".editbtn");
let editarea = document.querySelector(".editarea");
editarea.style.display = "none";
cards.addEventListener("click", (e) => {
  let id = e.target.id;
  if (e.target.classList.contains("edit")) {
    editarea.style.display = "block";
    fetch(`${BASE_URL}/${id}`, { method: "GET" })
      .then((data) => data.json())
      .then(
        (data) => (
          (name1.value = data.name),
          (old_price.value = data.old_price),
          (price.value = data.price),
          (month.value = data.month),
          (month_payment.value = data.month_payment),
          (have.value = data.have),
          (type.value = data.type)
        )
      );
  }
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    let baseimg = "";
    let imagefile = form.img.files[0];
    let reader = new FileReader();
    reader.onload = (e) => {
      baseimg = e.target.result;
      fetch(`${BASE_URL}/${id}`, {
        method: "PUT",
        body: JSON.stringify({
          name: name1.value,
          img: baseimg,
          old_price: +old_price.value,
          price: +price.value,
          month: +month.value,
          month_payment: +month_payment.value,
          have: +have.value,
          type: type.value.toUpperCase(),
        }),
        headers: { "Content-type": "application/json" },
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
          (editarea.style.display = "none"),
          (toast.textContent = "Edited successfuly ✏️"),
          toast.classList.remove("bg-blue-600"),
          toast.classList.add("bg-green-500"),
          toast.classList.remove("right-[-100%]"),
          (toast.style.transition = "0.5s"),
          toast.classList.add("right-[20px]"),
          setTimeout(() => {
            window.location.href = "./admin.html";
          }, 2000)
        )
        .catch((err) => console.log(err));
    };

    reader.readAsDataURL(imagefile);
  });
});
