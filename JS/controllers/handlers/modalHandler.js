import { renderModal } from "../render.js";

const dialog = document.querySelector(".modal");

export const showDialog = () => {
  renderModal();
  dialog.showModal();
};

export const closeDialog = () => {
  // form.reset();
  dialog.close();
};
