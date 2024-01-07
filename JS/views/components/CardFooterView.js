import heart from "../../../assets/heart_img.svg";

export const CardFooterView = (likeCount) => {
  return `
<footer class="card__footer">
    <img
        src="${heart}"
        alt="like"
        class="card__footer__like-img"
    />
    <span class="card__footer__like-count">${likeCount}</span>
</footer>    
    `;
};
