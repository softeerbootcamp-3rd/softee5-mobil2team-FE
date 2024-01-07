import { tagList } from "../../data.js";
import { TagView } from "./TagView.js";

export const UploadTagListView = () => {
  /**
   * will fix
   * 태그 리스트 추가 필요
   */
  return `
<nav class="upload__tag-list">
    ${tagList.map((tag) => TagView(tag.img, tag.text)).join(" ")}
</nav>
    `;
};
