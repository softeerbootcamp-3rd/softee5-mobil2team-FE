export const TagView = (img, text) => {
  return `
    <li class="tag">
        <img class="tag__img" alt="tag-img" src="${img}" />
        <span class="tag__text">${text}</span>
    </li>
    `;
};
