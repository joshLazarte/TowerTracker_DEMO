import _ui from "./UiElements";
let expanded = false;

const toggleExpandButton = id => {
  const btn = document.getElementById(id);
  btn.textContent.trim() === "Expand"
    ? (btn.textContent = "Close")
    : (btn.textContent = "Expand");
};

const toggleArrows = id => {
  const arrow = document.getElementById(id);
  if (arrow.classList.contains("fa-angle-down")) {
    arrow.classList.remove("fa-angle-down");
    arrow.classList.add("fa-angle-up");
  } else {
    arrow.classList.remove("fa-angle-up");
    arrow.classList.add("fa-angle-down");
  }
};

export { toggleExpandButton, toggleArrows };
