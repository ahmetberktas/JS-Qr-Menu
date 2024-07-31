import { renderMenuItems, renderButtons } from "./scripts/ui.js";

const buttonsArea = document.getElementById("buttons");
const menuList = document.querySelector("#menu-list");

document.addEventListener("DOMContentLoaded", () => {
  fetchMenu();
  renderButtons();
});

let data;

async function fetchMenu() {
  const res = await fetch("./db.json");
  data = await res.json();
  renderMenuItems(data.menu, menuList);
}

buttonsArea.addEventListener("click", (e) => {
  if (e.target.id !== "buttons") {
    renderButtons(e.target.innerText);
    const selected = e.target.dataset.category;
    if (selected === "all") {
        renderMenuItems(data.menu, menuList);
    } else {
      const filtered = data.menu.filter((i) => i.category === selected);
      renderMenuItems(filtered, menuList);
    }
  }
});
