import { tagList } from "../../data.js";
import { BothCardView } from "./BothCardView.js";
import { CardFooterView } from "./CardFooterView.js";
import { CardHeaderView } from "./CardHeaderView.js";
import { OnlyImgCardView } from "./OnlyImgCardView.js";
import { OnlyTextCardView } from "./OnlyTextCardView.js";
import defaultImg from "../../../assets/tag_img.svg";

export const CardView = ({
  nickname,
  content,
  imageUrl,
  like,
  createdTime,
  id,
  tagId,
}) => {
  // * db상의 tag와 fe data의 index 차이 보정
  const correctedTagId = Number(tagId) - 1;
  const profileImg = tagId ? tagList[correctedTagId].img : defaultImg;

  return `
<section class="wagle__main__card" id="${id}">
    ${CardHeaderView(profileImg, nickname, createdTime)}
    <article class="card__content">
        ${!imageUrl ? OnlyTextCardView(content) : ""}
        ${imageUrl && content ? BothCardView(content, imageUrl) : ""}
        ${!content ? OnlyImgCardView(imageUrl) : ""}
    </article>
    ${CardFooterView(like)}
</section>
    `;
};
