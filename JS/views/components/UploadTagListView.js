import { tagList } from "../../data.js";
import { TagView } from "./TagView.js";

export const UploadTagListView = () => {
  return `
<nav class="upload__tag-list">
    ${tagList.map((tag) => TagView(tag.img, tag.text)).join(" ")}
</nav>
    `;
};
