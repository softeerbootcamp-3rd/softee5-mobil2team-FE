import { onClick } from "../events/onClick.js";

const app = document.getElementById("app");
const modal = document.querySelector(".modal");

export const initEventListener = () => {
  app.addEventListener("click", onClick);
  modal.addEventListener("input", onClick);
};
