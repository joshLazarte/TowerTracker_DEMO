import _ui from "./UiElements";
import {
  loadEditTechForm,
  clearEditTechForm
} from "./actions/toggleTechFormDisplay";

const loadEventListeners = () => {
  [..._ui.editTechBtns].forEach(btn => {
    btn.addEventListener("click", e => loadEditTechForm(e.target.dataset.tech));
  });

  _ui.cancelEditTechButton.addEventListener("click", () => {
    clearEditTechForm(true);
  });
};

export default loadEventListeners;
