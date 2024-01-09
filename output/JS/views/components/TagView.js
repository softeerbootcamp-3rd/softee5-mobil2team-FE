export const TagView = (id, img, text) => {
  return `
    <li class='${id ? "js-onTagSelect tag" : "js-onTagSelect tag selected-tag"}' id="${id}">
        <img class="js-onTagSelect tag__img" alt="tag-img" src="${img}" />
        <span class="js-onTagSelect tag__text" >${text}</span>
    </li>
    `;
};
