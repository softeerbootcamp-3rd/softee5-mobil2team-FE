import { UploadView } from "../../views/pages/UploadView.js";

const modal = document.querySelector(".modal");

const initEventListener = () => {
  // modal.addEventListener("click", onModalClick);
};

export const initUploadModal = () => {
  const modalHTML = UploadView();
  modal.innerHTML = modalHTML;
  initEventListener();
};
