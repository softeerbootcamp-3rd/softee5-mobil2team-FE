import { UploadLinkView } from "../components/ButtonViews.js";
import { WagleEmptyView } from "../components/wagle/WagleEmptyView.js";
import { WagleHeaderView } from "../components/wagle/WagleHeaderView.js";
import { WagleMainView } from "../components/wagle/WagleMainView.js";

import profileImg from "../../../assets/tag_img.svg";
import cardImg from "../../../assets/card_img.svg";

const BASE_URL = "http://13.209.90.251";

export const WagleView = (stationId) => {
  /**
   * will fix
   * 서버에서 카드 정보 받기 -> cardList
   * 현재역 이전역 다음역 불러오기 -> params로
   */
  const fetchData = async () => {
    const endpoint = "/v1/post/postList";
    const pageSize = 5;
    const pageNumber = 1;

    try {
      const response = await fetch(
        `${BASE_URL}${endpoint}?stationId=${stationId}&pageSize=${pageSize}&pageNumber=${pageNumber}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const responseData = await response.json();

      return responseData.data.posts;
    } catch (error) {
      console.error("Error fetching data:", error.message);
    }
  };

  // fetchData 함수 호출
  const cardList = fetchData();

  return `
<div class="wagle">
    ${WagleHeaderView(stationId)}

    ${cardList && cardList.length ? WagleMainView(cardList) : WagleEmptyView()}

    ${UploadLinkView()}
</div>
  `;
};

// const cardList = [
//   {
//     profileImg,
//     title: "출근하기 싫은 회사원",
//     time: "12:00",
//     text: "출근하기 싫어~~~~",
//     img: cardImg,
//     likeCount: 99,
//   },
//   {
//     profileImg,
//     title: "출근하기 싫은 회사원",
//     time: "12:00",
//     text: "출근하기 싫어~~~~",
//     likeCount: 100,
//   },
//   {
//     profileImg,
//     title: "출근하기 싫은 회사원",
//     time: "12:00",
//     img: cardImg,
//     likeCount: 99,
//   },
// ]; // dummy
