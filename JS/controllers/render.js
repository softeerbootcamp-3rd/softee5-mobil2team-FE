import { WagleView } from "../views/pages/WagleView.js";

const app = document.getElementById("app");

export const renderWagle = (stationId, cardList) => {
  app.innerHTML = WagleView(stationId, cardList);
};
