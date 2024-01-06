export const CardFooterView = (like) => {
  return `
<footer class="card__footer">
    <img
        src="assets/heart_img.svg"
        alt="like"
        class="card__footer__like-img"
    />
    <span class="card__footer__like-count">${like}</span>
</footer>    
    `;
};
