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
  const originalDate = new Date(createdTime);

  // 같은날 올린 글 - HH:mm
  const sameDayOptions = {
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  };

  // 다른날 올린 글 - MM/dd HH:mm
  const differentDayOptions = {
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  };

  const currentDate = new Date();
  let formattedTime;
  if (
    originalDate.getFullYear() === currentDate.getFullYear() &&
    originalDate.getMonth() === currentDate.getMonth() &&
    originalDate.getDate() === currentDate.getDate()
  ) {
    formattedTime = originalDate.toLocaleString('en-US', sameDayOptions);
  } else {
    formattedTime = originalDate.toLocaleString('en-US', differentDayOptions).replace(',', '');
  }

  return `
<section class="wagle__main__card" id="${id}">
    ${CardHeaderView(profileImg, nickname, formattedTime)}
    <article class="card__content">
        ${!imageUrl ? OnlyTextCardView(content) : ""}
        ${imageUrl && content ? BothCardView(content, imageUrl) : ""}
        ${!content ? OnlyImgCardView(imageUrl) : ""}
    </article>
    ${CardFooterView(like)}
</section>
    `;
};
