import { onClick } from "../events/onClick.js";

const app = document.getElementById("app");

export const initEventListener = () => {
  app.addEventListener("click", onClick);
};
