export const TagView = (imgSrc, text) => {
  return `
    <li class="tag">
        <img class="tag__img" alt="tag-img" src="${imgSrc}" />
        <span class="tag__text">${text}</span>
    </li>
    `;
};
