const itemList = document.getElementById("item-list");
const themeSelect = document.getElementById("theme-select");
const listStyleSelect = document.getElementById("list-style-select");
const resetButton = document.getElementById("reset-button");

const items = ["Learn HTML", "Master CSS", "Explore JavaScript", "Understand APIs", "Build Projects"];

function loadItems() {
  itemList.innerHTML = "";
  items.forEach(item => {
    const li = document.createElement("li");
    li.className = "list-group-item";
    li.textContent = item;
    itemList.appendChild(li);
  });
}

function applyPreferences() {
  const theme = localStorage.getItem("theme") || "light";
  const listStyle = localStorage.getItem("listStyle") || "default";

  document.body.className = "theme-" + theme;
  itemList.className = "list-group list-" + listStyle;

  themeSelect.value = theme;
  listStyleSelect.value = listStyle;
}

function savePreferences() {
  localStorage.setItem("theme", themeSelect.value);
  localStorage.setItem("listStyle", listStyleSelect.value);
  applyPreferences();
}

themeSelect.addEventListener("change", savePreferences);
listStyleSelect.addEventListener("change", savePreferences);

resetButton.addEventListener("click", () => {
  localStorage.clear();
  applyPreferences();
});

document.addEventListener("DOMContentLoaded", () => {
  loadItems();
  applyPreferences();
});
