import _ui from "../UiElements";
import { showAddTech, showRegionData } from "../../viewCtrl/actions";

const toggleFormFieldValues = tech => {
  if (tech) {
    const techObj = JSON.parse(tech);
    _ui.formFields.forEach(field => {
      const key = field.id.replace(/tech-/, "");
      field.value = techObj[key];
    });
  } else {
    _ui.formFields.forEach(field => {
      field.value = "";
    });
  }
};

const toggleTitle = tech => {
  tech
    ? (_ui.techFormTitle.textContent = "Edit Tech")
    : (_ui.techFormTitle.textContent = "Add Tech");
};

const toggleCancelBtnDisplay = tech => {
  tech
    ? (_ui.cancelEditTechButton.style.display = "block")
    : (_ui.cancelEditTechButton.style.display = "none");
};

const loadEditTechForm = tech => {
  toggleFormFieldValues(tech);
  toggleTitle(tech);
  toggleCancelBtnDisplay(tech);
  showAddTech(tech);
};

const clearEditTechForm = goBack => {
  toggleFormFieldValues(null);
  toggleTitle(null);
  toggleCancelBtnDisplay(null);
  goBack && showRegionData();
};

export { loadEditTechForm, clearEditTechForm };
