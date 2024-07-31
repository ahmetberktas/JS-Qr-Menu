import { buttonData } from "./constants.js";
const buttonArea = document.getElementById("buttons");

export function renderMenuItems(menuItems, menuList) {
  menuList.innerHTML = menuItems
    .map(
      (item) => `
          <a
          id="card"
          class="d-flex flex-column flex-md-row text-decoration-none text-dark gap-3"
          href="#"
        >
          <img class="rounded shadow img-fluid" src="${item.img}" />
          <div>
            <div class="d-flex justify-content-between">
              <h5>${item.title}</h5>
              <p class="text-success fw-bold">${(item.price * 30).toFixed(
                2
              )} ₺</p>
            </div>
            <p class="lead">
              ${item.desc.slice(0, 80) + "..."}
            </p>
          </div>
        </a>
      `
    )
    .join(" ");
}

export function renderButtons(active) {
    buttonArea.innerHTML = '';
    buttonData.forEach((btn) => {
        const buttonElement = document.createElement("button");
        buttonElement.className = "btn btn-outline-dark";
        buttonElement.dataset.category = btn.value;
        if (btn.text === active) {
            buttonElement.classList.add("btn-dark","text-white");
        }
        buttonElement.innerText = btn.text;
        buttonArea.appendChild(buttonElement);
    })
}