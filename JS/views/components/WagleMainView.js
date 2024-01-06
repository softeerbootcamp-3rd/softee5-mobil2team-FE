import { CardView } from "./CardView.js";

export const WagleMainView = () => {
  /**
   * will fix
   * 서버에서 카드 정보 받기
   */
  return `
    ${cardList.map((card) => CardView(card))}
    `;
};
