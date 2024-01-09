import { UploadView } from "../views/pages/UploadView.js";
import { WagleView } from "../views/pages/WagleView.js";

const app = document.getElementById("app");
const modal = document.querySelector(".modal");

export const renderWagle = (stationId, cardList) => {
  const wagleHTML = WagleView(stationId, cardList);
  app.innerHTML = wagleHTML;
};

export const renderModal = (imageList) => {
  const modalHTML = UploadView(imageList);
  modal.innerHTML = modalHTML;
};
