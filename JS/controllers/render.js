import { WagleView } from "../views/pages/WagleView.js";

const app = document.getElementById("app");
const modal = document.getElementsByClassName("modal");

export const renderWagle = (stationId, cardList) => {
  app.innerHTML = WagleView(stationId, cardList);
};

export const renderModal = () => {
  const modalHTML = UploadView();
  modal.innerHTML = modalHTML;
};
