const _ = id => document.getElementById(id);

const UiElements = {
  editTechBtns: document.querySelectorAll(".edit-tech-button"),
  techFormTitle: _("tech-form-title"),
  formFields: [
    _("tech-firstName"),
    _("tech-lastName"),
    _("tech-PID"),
    _("tech-email"),
    _("tech-techNumber"),
    _("tech-market"),
    _("tech-_id")
  ],
  cancelEditTechButton: _("cancel-edit-tech-btn")
};

const _ui = Object.freeze(UiElements);

export default _ui;
