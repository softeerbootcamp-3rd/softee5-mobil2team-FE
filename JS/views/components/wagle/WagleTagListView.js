import { tagList } from "../../../data.js";
import { TagView } from "../TagView.js";

export const WagleTagListView = () => {
  /**
   * tagList를 서버에서 받아오기 -> 임시로 프론트 데이터 사용
   */
  return `
    <ul class="wagle__header__tag-list">
        <li class="tag all-tag">전체</li>
        ${tagList.map((tag, idx) => TagView(idx, tag.img, tag.text)).join(" ")}
    </ul>
    `;
};
