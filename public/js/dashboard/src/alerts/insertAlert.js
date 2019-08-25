import setAlertContent from "./setAlertContent";

const insertAlert = (target, type, content) => {
  target.innerHTML = setAlertContent(type, content);
};

export default insertAlert;
