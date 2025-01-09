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
  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `
      <div>
        <img class="imgofcard mx-auto" src="${value.img}" alt="" />
      </div>
      <div class="txtarea p-[15px]">
        <h1 class="text-[14px] multi-line font-medium">${value.name}</h1>
        <div class="stars flex items-center justify-between my-[8px]">
          <p class="text-[6px] flex items-center gap-1">\</p>
          <p>${value.have || 0} отзывов</p>
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
      addsmth(data);
  }
}
const editbtn = document.querySelector(".editbtn");
cards.addEventListener("click", (e) => {
  let id = e.target.id;
  if (e.target.classList.contains("edit")) {
    console.log(cards);
    // window.location.href = "./add.html";

    // cards.forEach((value) => {
    //   if (value.id == id) {
    //     console.log(value);
    //   }
    // });
    save(id);
  }
});
function save(id) {
  let smth = confirm(" Do you want to edit information's of this card");

  let name = prompt("enter name");
  console.log(name);

  let old_price = prompt("enter old_price");
  let price = prompt("enter price");
  let month = prompt("enter month");
  let month_payment = prompt("enter month_payment");
  let have = prompt("enter have");
  let type = prompt("enter type");

  if (smth) {
    fetch(`${BASE_URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify({
        name: name,
        img: "IMG",
        old_price: old_price,
        price: price,
        month: month,
        month_payment: month_payment,
        have: have,
        type: type,
      }),
      headers: { "Content-Type": "application/json" },
    })
      .then((data) => data.json())
      .then((data) => console.log(data));
  }
}
function addsmth(data) {
  data.forEach((value) => {
    console.log(value);
  });
}
