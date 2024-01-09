import heart from "../../../assets/heart_img.svg";

export const CardFooterView = (likeCount) => {
  return `
<footer class="js-likePost card__footer">
    <img
        src="${heart}"
        alt="like"
        class="js-likePost card__footer__like-img"
    />
    <span class="js-likePost card__footer__like-count">${likeCount}</span>
</footer>    
    `;
};
