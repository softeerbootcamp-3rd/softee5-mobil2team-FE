import { CardView } from "../CardView.js";

export const WagleMainView = (cardList) => {
  return `
<main class="wagle__main">
  ${cardList.map((card) => CardView(card)).join(" ")}
</main>
    `;
};
