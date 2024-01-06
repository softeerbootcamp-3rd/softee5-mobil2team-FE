export const WagleTagListView = (tagList) => {
  return `
    <ul class="wagle__header__tag-list">
        <li class="tag all-tag">전체</li>
        ${tagList.map((tag) => TagView(tag.img, tag.text)).join(" ")}
    </ul>
    `;
};
