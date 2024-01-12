import { getTime } from "../../../controllers/utils/getDate.js";
import { tagList } from "../../../data.js";
import { BothCardView } from "./BothCardView.js";
import { CardFooterView } from "./CardFooterView.js";
import { CardHeaderView } from "./CardHeaderView.js";
import { OnlyImgCardView } from "./OnlyImgCardView.js";
import { OnlyTextCardView } from "./OnlyTextCardView.js";

export const CardView = ({ nickname, content, imageUrl, like, createdTime, id, tagId }) => {
  const profileImg = tagId ? tagList[tagId].img : tagList[0].img;
  const formattedTime = getTime(createdTime);

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
