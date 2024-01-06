import { CardView } from "./CardView.js";

export const WagleMainView = (cardList) => {
  return `
    ${cardList.map((card) => CardView(card))}
    `;
};
