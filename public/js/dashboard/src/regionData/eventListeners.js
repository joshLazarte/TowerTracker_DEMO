import _ui from "./UiElements";
import { toggleExpandButton, toggleArrows } from "./actions";

const loadEventListeners = () => {
  _ui.expandButtons.forEach(btn => {
    btn.addEventListener("click", () => toggleExpandButton(btn.id));
  });

  _ui.areaArrows.forEach(arrow => {
    arrow.addEventListener("click", () => toggleArrows(arrow.id));
  });
};

export default loadEventListeners;
