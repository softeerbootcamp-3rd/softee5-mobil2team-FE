import { BothCardView } from "./BothCardView.js";
import { CardFooterView } from "./CardFooterView.js";
import { CardHeaderView } from "./CardHeaderView.js";
import { OnlyTextCardView } from "./OnlyTextCardView.js";

export const CardView = ({ profileImg, title, time, text, img }) => {
  /**
   * will fix
   * props name
   *
   */
  return `
<section class="wagle__main__card">
    ${CardHeaderView(profileImg, title, time)}
    <article class="card__content">
        ${!img ? OnlyTextCardView(text) : null}
        ${img && text ? BothCardView(text, img) : null}
        ${!text ? OnlyImgCardView(img) : null}
    </article>
    ${CardFooterView(like)}
</section>
    `;
};