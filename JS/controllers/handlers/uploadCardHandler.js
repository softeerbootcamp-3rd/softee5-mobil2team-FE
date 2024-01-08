import { renderModal } from "../render.js";
import { showDialog } from "./modalHandler.js";
import { fetchUploadImg } from "../api/getApi.js";

const modal = document.querySelector(".modal");

export const uploadCardHandler = (target) => {
  fetchUploadImg();
  showDialog();
  //   modal.addEventListener("submit", onAddSubmit);
};
