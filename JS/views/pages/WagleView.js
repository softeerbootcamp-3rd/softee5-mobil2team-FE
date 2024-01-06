import { UploadLinkView } from "../components/ButtonViews.js";
import { WagleEmptyView } from "../components/WagleEmptyView.js";
import { WagleHeaderView } from "../components/WagleHeaderView.js";
import { WagleMainView } from "../components/WagleMainView.js";

export const WagleView = () => {
  /**
   * will fix
   * 서버에서 카드 정보 받기 -> cardList
   *
   * 현재역 이전역 다음역 불러오기
   */
  const cardList = [{ card: "Card1" }, { card: "Card2" }, { card: "Card3" }]; // dummy
  return `
<div class="wagle">
    ${WagleHeaderView("서초역", "교대역", "강남역")}

    ${cardList.length ? WagleMainView(cardList) : WagleEmptyView()}

    ${UploadLinkView()}
</div>
  `;
};
