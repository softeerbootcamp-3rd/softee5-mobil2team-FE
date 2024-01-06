export const BothCardView = (text, img) => {
  return `
<div class="card__content--both">
    <img
      src="${img}"
      alt="card-content"
      class="card__content__img"
    />
    <p class="card__content__text">
        ${text}
    </p>
</div>    
    `;
};
