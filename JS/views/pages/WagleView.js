import { UploadLinkView } from "../components/ButtonViews.js";
import { WagleEmptyView } from "../components/WagleEmptyView.js";
import { WagleHeaderView } from "../components/WagleHeaderView.js";
import { WagleMainView } from "../components/WagleMainView.js";

import profileImg from "../../../assets/tag_img.svg";
import cardImg from "../../../assets/card_img.svg";

export const WagleView = (stationId) => {
  /**
   * will fix
   * 서버에서 카드 정보 받기 -> cardList
   * 현재역 이전역 다음역 불러오기 -> params로
   */
  const cardList = [
    {
      profileImg,
      title: "출근하기 싫은 회사원",
      time: "12:00",
      text: "출근하기 싫어~~~~",
      img: cardImg,
      likeCount: 99,
    },
    {
      profileImg,
      title: "출근하기 싫은 회사원",
      time: "12:00",
      text: "출근하기 싫어~~~~",
      likeCount: 100,
    },
    {
      profileImg,
      title: "출근하기 싫은 회사원",
      time: "12:00",
      img: cardImg,
      likeCount: 99,
    },
  ]; // dummy
  return `
<div class="wagle">
    ${WagleHeaderView(stationId)}

    ${cardList.length ? WagleMainView(cardList) : WagleEmptyView()}

    ${UploadLinkView()}
</div>
  `;
};
